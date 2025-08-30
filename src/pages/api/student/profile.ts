import type { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT, requireRole } from "../../../services/auth";
import { prisma } from "../../../lib/prisma";
import cookie from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const authHeader = req.headers.authorization;
    const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
    const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
    const token = tokenFromHeader ?? cookies["auth_token"];
    const user = token ? verifyJWT(token) : null;

    try {
      requireRole(user, ["student"]);
    } catch {
      return res.status(403).json({ error: "Unauthorized" });
    }

    if (req.method === "GET") {
      // 获取学生个人资料
      const student = await prisma.student.findUnique({
        where: { id: user!.id },
        select: {
          id: true,
          name: true,
          email: true,
          graduationYear: true,
          gpa: true,
          satScore: true,
          actScore: true,
          targetCountries: true,
          intendedMajors: true,
        },
      });

      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }

      return res.status(200).json(student);
    }

    if (req.method === "PUT") {
      // 更新学生个人资料
      const { name, graduationYear, gpa, satScore, actScore, targetCountries, intendedMajors } = req.body ?? {};

      // 验证必填字段
      if (!name || !graduationYear) {
        return res.status(400).json({ error: "name and graduationYear are required" });
      }

      // 验证数值范围
      if (gpa !== undefined && (gpa < 0 || gpa > 4.0)) {
        return res.status(400).json({ error: "GPA must be between 0 and 4.0" });
      }

      if (satScore !== undefined && (satScore < 400 || satScore > 1600)) {
        return res.status(400).json({ error: "SAT score must be between 400 and 1600" });
      }

      if (actScore !== undefined && (actScore < 1 || actScore > 36)) {
        return res.status(400).json({ error: "ACT score must be between 1 and 36" });
      }

      const updatedStudent = await prisma.student.update({
        where: { id: user!.id },
        data: {
          name,
          graduationYear: parseInt(graduationYear),
          gpa: gpa !== undefined ? parseFloat(gpa) : null,
          satScore: satScore !== undefined ? parseInt(satScore) : null,
          actScore: actScore !== undefined ? parseInt(actScore) : null,
          targetCountries: targetCountries || null,
          intendedMajors: intendedMajors || null,
        },
        select: {
          id: true,
          name: true,
          email: true,
          graduationYear: true,
          gpa: true,
          satScore: true,
          actScore: true,
          targetCountries: true,
          intendedMajors: true,
        },
      });

      return res.status(200).json(updatedStudent);
    }

    res.setHeader("Allow", ["GET", "PUT"]);
    return res.status(405).end("Method Not Allowed");
  } catch (err: any) {
    console.error("/api/student/profile error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
