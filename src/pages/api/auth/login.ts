import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { comparePassword, signJWT } from "../../../services/auth";
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end("Method Not Allowed");
  }

  const { email, password, role } = req.body ?? {};
  if (!email || !password || !role) return res.status(400).json({ error: "email, password, role required" });

  const isStudent = role === "student";
  const isParent = role === "parent";
  const isAdmin = role === "admin";
  if (!isStudent && !isParent && !isAdmin) return res.status(400).json({ error: "invalid role" });

  let user;
  if (isStudent) {
    user = await prisma.student.findUnique({ where: { email } });
  } else if (isParent) {
    user = await prisma.parent.findUnique({ where: { email } });
  } else if (isAdmin) {
    user = await prisma.admin.findUnique({ where: { email } });
  }
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const ok = await comparePassword(password, (user as any).passwordHash);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });

  const token = signJWT({ id: user.id, role, email });
  console.log("Generated token for user:", { id: user.id, role, email });
  console.log("Token length:", token.length);
  console.log("Token preview:", token.substring(0, 50) + "...");
  
  const serialized = serialize("auth_token", token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, // 30天
  });

  res.setHeader("Set-Cookie", serialized);
  console.log("Set cookie:", serialized);
  return res.status(200).json({ ok: true });
}



