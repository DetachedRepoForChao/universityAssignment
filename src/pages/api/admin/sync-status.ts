import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { parse } from "cookie";
import { verifyJWT, requireRole } from "../../../services/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;
  const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const token = tokenFromHeader ?? cookies["auth_token"];
  const user = token ? verifyJWT(token) : null;
  try { requireRole(user, ["admin"]); } catch { return res.status(403).json({ error: "Unauthorized" }); }

  if (req.method !== "GET") { res.setHeader("Allow", ["GET"]); return res.status(405).end("Method Not Allowed"); }

  const logs = await prisma.syncLog.findMany({ orderBy: { startedAt: "desc" }, take: 20 });
  return res.status(200).json(logs);
}



