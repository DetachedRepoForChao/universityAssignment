import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { verifyJWT, requireRole } from "../../../services/auth";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;
  const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  const token = tokenFromHeader ?? cookies["auth_token"];
  const user = token ? verifyJWT(token) : null;
  
  try { 
    requireRole(user, ["parent"]); 
  } catch { 
    return res.status(403).json({ error: "Unauthorized" }); 
  }

  if (req.method === "GET") {
    // 获取备注历史
    const { applicationId } = req.query;
    if (!applicationId || typeof applicationId !== "string") {
      return res.status(400).json({ error: "applicationId is required" });
    }

    // 验证家长是否有权限查看该申请的备注
    const app = await prisma.application.findUnique({ 
      where: { id: applicationId }, 
      select: { studentId: true } 
    });
    if (!app) {
      return res.status(404).json({ error: "Application not found" });
    }
    
    const link = await prisma.studentParent.findFirst({ 
      where: { parentId: user!.id, studentId: app.studentId } 
    });
    if (!link) {
      return res.status(403).json({ error: "No access to this application" });
    }

    const notes = await prisma.applicationNote.findMany({
      where: { applicationId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        content: true,
        authorType: true,
        authorId: true,
        createdAt: true,
      }
    });

    return res.status(200).json(notes);
  }

  if (req.method === "POST") {
    // 创建新备注
    const { applicationId, content } = req.body ?? {};
    if (!applicationId || !content) {
      return res.status(400).json({ error: "applicationId, content required" });
    }

    // 验证家长是否有权限为该申请添加备注
    const app = await prisma.application.findUnique({ 
      where: { id: applicationId }, 
      select: { studentId: true } 
    });
    if (!app) {
      return res.status(404).json({ error: "Application not found" });
    }
    
    const link = await prisma.studentParent.findFirst({ 
      where: { parentId: user!.id, studentId: app.studentId } 
    });
    if (!link) {
      return res.status(403).json({ error: "No access to this application" });
    }

    const note = await prisma.applicationNote.create({
      data: { 
        applicationId, 
        authorType: "parent", 
        authorId: user!.id, 
        content 
      },
    });
    
    return res.status(201).json(note);
  }

  if (req.method === "PUT") {
    // 更新备注
    const { noteId, content } = req.body ?? {};
    if (!noteId || !content) {
      return res.status(400).json({ error: "noteId, content required" });
    }

    // 验证备注是否存在且属于该家长
    const existingNote = await prisma.applicationNote.findUnique({
      where: { id: noteId },
      select: { 
        id: true, 
        authorId: true, 
        authorType: true,
        applicationId: true 
      }
    });

    if (!existingNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    if (existingNote.authorId !== user!.id || existingNote.authorType !== "parent") {
      return res.status(403).json({ error: "Can only edit your own notes" });
    }

    // 验证家长是否有权限访问该申请
    const app = await prisma.application.findUnique({ 
      where: { id: existingNote.applicationId }, 
      select: { studentId: true } 
    });
    
    const link = await prisma.studentParent.findFirst({ 
      where: { parentId: user!.id, studentId: app!.studentId } 
    });
    if (!link) {
      return res.status(403).json({ error: "No access to this application" });
    }

    const updatedNote = await prisma.applicationNote.update({
      where: { id: noteId },
      data: { content },
      select: {
        id: true,
        content: true,
        authorType: true,
        authorId: true,
        createdAt: true,
      }
    });

    return res.status(200).json(updatedNote);
  }

  if (req.method === "DELETE") {
    // 删除备注
    const { noteId } = req.query;
    if (!noteId || typeof noteId !== "string") {
      return res.status(400).json({ error: "noteId is required" });
    }

    // 验证备注是否存在且属于该家长
    const existingNote = await prisma.applicationNote.findUnique({
      where: { id: noteId },
      select: { 
        id: true, 
        authorId: true, 
        authorType: true,
        applicationId: true 
      }
    });

    if (!existingNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    if (existingNote.authorId !== user!.id || existingNote.authorType !== "parent") {
      return res.status(403).json({ error: "Can only delete your own notes" });
    }

    // 验证家长是否有权限访问该申请
    const app = await prisma.application.findUnique({ 
      where: { id: existingNote.applicationId }, 
      select: { studentId: true } 
    });
    
    const link = await prisma.studentParent.findFirst({ 
      where: { parentId: user!.id, studentId: app!.studentId } 
    });
    if (!link) {
      return res.status(403).json({ error: "No access to this application" });
    }

    await prisma.applicationNote.delete({
      where: { id: noteId }
    });

    return res.status(204).end();
  }

  res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
  return res.status(405).end("Method Not Allowed");
}




