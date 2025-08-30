import { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT, requireRole } from "../../../services/auth";
import { universityDataService } from "../../../services/universityDataService";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 验证管理员权限
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
    const user = token ? verifyJWT(token) : null;
    
    try {
      requireRole(user, ["admin"]);
    } catch {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // 创建同步日志
    const log = await prisma.syncLog.create({
      data: {
        source: "UNIVERSITY_DATA",
        status: "running"
      }
    });

    try {
      // 强制刷新大学数据
      await universityDataService.refreshFromExternalAPIs();
      
      // 更新同步日志为成功
      await prisma.syncLog.update({
        where: { id: log.id },
        data: {
          status: "success",
          finishedAt: new Date(),
          stats: { message: "University data refreshed successfully" }
        }
      });

      res.status(200).json({
        message: "University data refreshed successfully",
        logId: log.id
      });

    } catch (error) {
      // 更新同步日志为失败
      await prisma.syncLog.update({
        where: { id: log.id },
        data: {
          status: "failed",
          finishedAt: new Date(),
          error: String(error)
        }
      });

      throw error;
    }

  } catch (error) {
    console.error("Error syncing university data:", error);
    res.status(500).json({ error: "Failed to sync university data" });
  }
}

