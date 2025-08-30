import type { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT, requireRole } from "../../../services/auth";
import cookie from "cookie";
import { getParentStudents } from "../../../services/studentService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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
      const rows = await getParentStudents(user!.id);
      const students = rows.map(r => ({
        student_id: r.student.id,
        student_name: r.student.name,
        relationship: r.relationship,
      }));
      return res.status(200).json(students);
    }

    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  } catch (err: any) {
    console.error("/api/parent/students error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


