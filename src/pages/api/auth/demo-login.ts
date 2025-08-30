import type { NextApiRequest, NextApiResponse } from "next";
import { signJWT } from "../../../services/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { role = "student" } = req.query;
  const id = role === "parent" ? "demo-parent" : "demo-student";
  const email = role === "parent" ? "parent@example.com" : "student@example.com";
  const token = signJWT({ id, role: role as any, email }, "7d");
  res.status(200).json({ token });
}



