import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { verifyJWT, requireRole } from "../../../services/auth";
import { prisma } from "../../../lib/prisma";
import { sendMail } from "../../../services/mailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;
  const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const token = tokenFromHeader ?? cookies["auth_token"];
  const user = token ? verifyJWT(token) : null;
  try { requireRole(user, ["admin"]); } catch { return res.status(403).json({ error: "Unauthorized" }); }

  if (req.method !== "POST") { res.setHeader("Allow", ["POST"]); return res.status(405).end("Method Not Allowed"); }

  const now = new Date();
  const soon = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Find requirements due in 7 days where status != completed
  const reqs = await prisma.applicationRequirement.findMany({
    where: {
      deadline: { gte: now, lte: soon },
      NOT: { status: "completed" },
    },
    include: { application: { include: { student: true, university: true } } },
    take: 200,
  });

  let sent = 0;
  for (const r of reqs) {
    const to = r.application.student.email;
    if (!to) continue;
    await sendMail({
      to,
      subject: `提醒：即将到期 - ${r.requirementType}`,
      text: `您的 ${r.requirementType} 将在 ${r.deadline?.toISOString().slice(0,10)} 到期（学校：${r.application.university.name}）。请尽快完成。`,
    });
    sent++;
  }

  return res.status(200).json({ ok: true, due: reqs.length, sent });
}




