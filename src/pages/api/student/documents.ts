import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import cookie from "cookie";
import { verifyJWT, requireRole } from "../../../services/auth";
import { prisma } from "../../../lib/prisma";
import { localPathFor } from "../../../services/upload";

export const config = { api: { bodyParser: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;
  const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  const token = tokenFromHeader ?? cookies["auth_token"];
  const user = token ? verifyJWT(token) : null;
  try { requireRole(user, ["student"]); } catch { return res.status(403).json({ error: "Unauthorized" }); }

  if (req.method === "GET") {
    const { applicationId } = req.query;
    if (typeof applicationId !== "string") return res.status(400).json({ error: "applicationId required" });
    const docs = await prisma.applicationDocument.findMany({ where: { applicationId } });
    return res.status(200).json(docs);
  }

  if (req.method === "POST") {
    const form = formidable({ multiples: false });
    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(400).json({ error: "Invalid form" });
      const applicationId = String(fields.applicationId ?? "");
      const docType = String(fields.docType ?? "");
      const file = files.file as formidable.File | undefined;
      if (!applicationId || !docType || !file) return res.status(400).json({ error: "applicationId, docType, file required" });

      // verify ownership
      const app = await prisma.application.findUnique({ where: { id: applicationId }, select: { studentId: true } });
      if (!app || app.studentId !== user!.id) return res.status(403).json({ error: "No access" });

      const dest = localPathFor(applicationId, file.originalFilename ?? file.newFilename);
      await fs.promises.copyFile(file.filepath, dest);
      const saved = await prisma.applicationDocument.create({
        data: {
          applicationId,
          docType,
          filename: file.originalFilename ?? file.newFilename,
          mimeType: file.mimetype ?? "application/octet-stream",
          sizeBytes: file.size,
          storagePath: dest,
        },
      });
      return res.status(201).json(saved);
    });
    return;
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end("Method Not Allowed");
}




