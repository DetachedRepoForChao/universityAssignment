import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { hashPassword, signJWT } from "../../../services/auth";
import cookie from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end("Method Not Allowed");
  }

  const { name, email, password, role } = req.body ?? {};
  if (!name || !email || !password || !role) return res.status(400).json({ error: "name, email, password, role required" });

  const passwordHash = await hashPassword(password);
  let user:
    | { id: string; email: string }
    | null = null;

  if (role === "student") {
    user = await prisma.student.create({
      data: { name, email, passwordHash, graduationYear: 2026 },
      select: { id: true, email: true },
    });
  } else if (role === "parent") {
    user = await prisma.parent.create({
      data: { name, email, passwordHash },
      select: { id: true, email: true },
    });
  } else {
    return res.status(400).json({ error: "invalid role" });
  }

  const token = signJWT({ id: user.id, role, email });
  const serialized = cookie.serialize("auth_token", token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
  });

  res.setHeader("Set-Cookie", serialized);
  return res.status(201).json({ ok: true });
}



