import { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT, requireRole } from "../../../services/auth";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 验证管理员权限
    const token = req.cookies.auth_token;
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const decoded = verifyJWT(token);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid token" });
    }

    try {
      requireRole(decoded, ["admin"]);
    } catch {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // 获取系统统计数据
    const [
      totalStudents,
      totalParents,
      totalUniversities,
      totalApplications,
      pendingApplications,
      recentSyncLogs
    ] = await Promise.all([
      prisma.student.count(),
      prisma.parent.count(),
      prisma.university.count(),
      prisma.application.count(),
      prisma.application.count({
        where: {
          status: {
            in: ["NOT_STARTED", "IN_PROGRESS", "SUBMITTED", "UNDER_REVIEW"]
          }
        }
      }),
      prisma.syncLog.findMany({
        take: 10,
        orderBy: { startedAt: "desc" }
      })
    ]);

    res.status(200).json({
      totalStudents,
      totalParents,
      totalUniversities,
      totalApplications,
      pendingApplications,
      recentSyncLogs
    });

  } catch (error) {
    console.error("Error getting admin stats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}



