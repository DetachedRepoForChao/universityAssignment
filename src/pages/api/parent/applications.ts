import type { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT, requireRole } from "../../../services/auth";
import { parse } from "cookie";
import { getParentApplications } from "../../../services/applicationService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const authHeader = req.headers.authorization;
    const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    const token = tokenFromHeader ?? cookies["auth_token"];
    const user = token ? verifyJWT(token) : null;

    try {
      requireRole(user, ["parent"]);
    } catch {
      return res.status(403).json({ error: "Unauthorized" });
    }

    if (req.method === "GET") {
      const studentId = typeof req.query.studentId === "string" ? req.query.studentId : undefined;
      const apps = await getParentApplications(user!.id, studentId);
      return res.status(200).json(apps);
    }

    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  } catch (err: any) {
    console.error("/api/parent/applications error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


