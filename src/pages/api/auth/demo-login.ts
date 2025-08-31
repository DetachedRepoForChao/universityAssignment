import type { NextApiRequest, NextApiResponse } from "next";
import { signJWT, AppRole } from "../../../services/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { role = "student" } = req.query;
  const validRole = (role === "parent" || role === "admin") ? role : "student";
  const id = validRole === "parent" ? "demo-parent" : "demo-student";
  const email = validRole === "parent" ? "parent@example.com" : "student@example.com";
  const token = signJWT({ id, role: validRole as AppRole, email }, "7d");
  res.status(200).json({ token });
}



