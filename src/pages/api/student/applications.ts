import type { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT, requireRole } from "../../../services/auth";
import cookie from "cookie";
import { getStudentApplications, createApplication } from "../../../services/applicationService";
import { getSupabasePrisma } from "../../../lib/prisma-supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let prisma;
  
  try {
    // 获取Supabase Prisma客户端
    prisma = await getSupabasePrisma();
    
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
      try {
        const apps = await getStudentApplications(user!.id);
        return res.status(200).json(apps);
      } catch (queryError: any) {
        console.error("查询学生申请失败:", queryError);
        
        // 检查是否是连接相关错误
        if (queryError.code === 'P1001' || queryError.code === 'P1002' || queryError.code === 'P1008') {
          return res.status(503).json({ 
            error: "数据库连接问题，请稍后重试",
            details: process.env.NODE_ENV === 'development' ? queryError.message : undefined
          });
        }
        
        return res.status(500).json({ 
          error: "查询失败，请稍后重试",
          details: process.env.NODE_ENV === 'development' ? queryError.message : undefined
        });
      }
    }

    if (req.method === "POST") {
      const { universityId, applicationType, deadline } = req.body ?? {};
      if (!universityId) return res.status(400).json({ error: "universityId required" });
      
      try {
        const created = await createApplication({
          studentId: user!.id,
          universityId,
          applicationType: applicationType ?? null,
          deadline: deadline ? new Date(deadline) : null,
        });
        return res.status(201).json(created);
      } catch (createError: any) {
        console.error("创建申请失败:", createError);
        return res.status(500).json({ 
          error: "创建申请失败，请稍后重试",
          details: process.env.NODE_ENV === 'development' ? createError.message : undefined
        });
      }
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end("Method Not Allowed");
  } catch (err: any) {
    console.error("/api/student/applications error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


