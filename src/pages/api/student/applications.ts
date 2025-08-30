import type { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT, requireRole } from "../../../services/auth";
import cookie from "cookie";
import { getStudentApplications, createApplication } from "../../../services/applicationService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const authHeader = req.headers.authorization;
    const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
    const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
    const token = tokenFromHeader ?? cookies["auth_token"];
    const user = token ? verifyJWT(token) : null;

    try {
      requireRole(user, ["student"]);
    } catch {
      return res.status(403).json({ error: "Unauthorized" });
    }

    if (req.method === "GET") {
      const apps = await getStudentApplications(user!.id);
      return res.status(200).json(apps);
    }

    if (req.method === "POST") {
      const { universityId, applicationType, deadline } = req.body ?? {};
      if (!universityId) return res.status(400).json({ error: "universityId required" });
      const created = await createApplication({
        studentId: user!.id,
        universityId,
        applicationType: applicationType ?? null,
        deadline: deadline ? new Date(deadline) : null,
      });
      return res.status(201).json(created);
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end("Method Not Allowed");
  } catch (err: any) {
    console.error("/api/student/applications error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


