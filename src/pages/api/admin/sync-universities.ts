import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { verifyJWT, requireRole } from "../../../services/auth";
import { fetchCommonAppUniversities, normalizeCommonApp } from "../../../services/integrations/commonApp";
import { fetchOpenDataUniversities, normalizeOpenData } from "../../../services/integrations/openData";
import { upsertUniversityFromSource } from "../../../services/universityIngest";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;
  const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  const token = tokenFromHeader ?? cookies["auth_token"];
  const user = token ? verifyJWT(token) : null;
  try { requireRole(user, ["admin"]); } catch { return res.status(403).json({ error: "Unauthorized" }); }

  if (req.method !== "POST") { res.setHeader("Allow", ["POST"]); return res.status(405).end("Method Not Allowed"); }

  const results: { source: string; count: number }[] = [];

  // Common App
  if (process.env.COMMON_APP_TOKEN) {
    const log = await prisma.syncLog.create({ data: { source: "COMMON_APP", status: "running" } });
    let count = 0;
    
    try {
      const page = await fetchCommonAppUniversities({ accessToken: process.env.COMMON_APP_TOKEN });
      for (const item of page.data) {
        const uni = normalizeCommonApp(item);
        await upsertUniversityFromSource(uni, "COMMON_APP");
        count++;
      }
      await prisma.syncLog.update({ where: { id: log.id }, data: { status: "success", finishedAt: new Date(), stats: { count } } });
    } catch (e: any) {
      await prisma.syncLog.update({ where: { id: log.id }, data: { status: "failed", finishedAt: new Date(), error: String(e?.message ?? e) } });
      throw e;
    }
    
    results.push({ source: "COMMON_APP", count });
  }

  // Open Data
  if (process.env.OPEN_DATA_KEY) {
    const log = await prisma.syncLog.create({ data: { source: "OPEN_DATA", status: "running" } });
    let page: number | undefined = 1;
    let count = 0;
    try {
      do {
        const resp = await fetchOpenDataUniversities({ apiKey: process.env.OPEN_DATA_KEY, page });
        for (const item of resp.data) {
          const uni = normalizeOpenData(item);
          await upsertUniversityFromSource(uni, "OPEN_DATA");
          count++;
        }
        page = resp.nextPage;
      } while (page);
      await prisma.syncLog.update({ where: { id: log.id }, data: { status: "success", finishedAt: new Date(), stats: { count } } });
    } catch (e: any) {
      await prisma.syncLog.update({ where: { id: log.id }, data: { status: "failed", finishedAt: new Date(), error: String(e?.message ?? e) } });
      throw e;
    }
    results.push({ source: "OPEN_DATA", count });
  }

  return res.status(200).json({ ok: true, results });
}


