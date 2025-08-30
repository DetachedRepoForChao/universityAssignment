import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { verifyJWT } from "../../../services/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  }

  // 验证管理员权限
  const token = req.cookies.auth_token;
  if (!token) {
    return res.status(401).json({ error: "未授权访问" });
  }

  try {
    const user = verifyJWT(token);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ error: "权限不足" });
    }

    // 获取所有用户数据
    const [students, parents, admins] = await Promise.all([
      prisma.student.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          graduationYear: true,
          gpa: true,
        },
        orderBy: { id: 'desc' }
      }),
      prisma.parent.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          createdAt: true,
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.admin.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
        orderBy: { createdAt: 'desc' }
      })
    ]);

    // 格式化用户数据，添加角色标识
    const users = [
      ...students.map(student => ({ ...student, role: 'student', createdAt: new Date().toISOString() })),
      ...parents.map(parent => ({ ...parent, role: 'parent' })),
      ...admins.map(admin => ({ ...admin, role: 'admin' }))
    ];

    res.status(200).json(users);
  } catch (error) {
    console.error('Admin users API error:', error);
    res.status(500).json({ error: "服务器内部错误" });
  }
}
