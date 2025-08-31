import type { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT, requireRole, comparePassword, hashPassword } from "../../../services/auth";
import { prisma } from "../../../lib/prisma";
import { parse } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const authHeader = req.headers.authorization;
    const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    const token = tokenFromHeader ?? cookies["auth_token"];
    const user = token ? verifyJWT(token) : null;

    try {
      requireRole(user, ["student"]);
    } catch {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const { currentPassword, newPassword } = req.body ?? {};

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: "currentPassword and newPassword are required" });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: "New password must be at least 6 characters long" });
    }

    // 获取学生当前密码哈希
    const student = await prisma.student.findUnique({
      where: { id: user!.id },
      select: { passwordHash: true },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // 验证当前密码
    const isCurrentPasswordValid = await comparePassword(currentPassword, student.passwordHash);
    if (!isCurrentPasswordValid) {
      return res.status(400).json({ error: "Current password is incorrect" });
    }

    // 生成新密码哈希
    const newPasswordHash = await hashPassword(newPassword);

    // 更新密码
    await prisma.student.update({
      where: { id: user!.id },
      data: { passwordHash: newPasswordHash },
    });

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (err: any) {
    console.error("/api/student/change-password error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
