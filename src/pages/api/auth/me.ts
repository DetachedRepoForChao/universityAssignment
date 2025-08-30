import { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT } from "../../../services/auth";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 从cookie获取token
    const token = req.cookies.auth_token;
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    // 验证JWT
    const decoded = verifyJWT(token);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const { id, role } = decoded;

    // 根据角色获取用户信息
    let user;
    if (role === "student") {
      user = await prisma.student.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          name: true,
          graduationYear: true,
          gpa: true,
          satScore: true,
          actScore: true,
          targetCountries: true,
          intendedMajors: true
        }
      });
      // 添加角色信息
      if (user) {
        user = { ...user, role: "student" };
      }
    } else if (role === "parent") {
      user = await prisma.parent.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          name: true,
          phone: true,
          createdAt: true
        }
      });
      // 添加角色信息
      if (user) {
        user = { ...user, role: "parent" };
      }
    } else if (role === "admin") {
      user = await prisma.admin.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          permissions: true,
          createdAt: true,
          lastLoginAt: true
        }
      });
      // 确保角色信息正确
      if (user) {
        user = { ...user, role: "admin" };
      }
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error getting user info:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
