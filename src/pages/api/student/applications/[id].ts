import type { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT, requireRole } from "../../../../services/auth";
import cookie from "cookie";
import { updateApplication, deleteApplication } from "../../../../services/applicationService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    if (typeof id !== "string") return res.status(400).json({ error: "Invalid id" });

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

    if (req.method === "PUT") {
      const updated = await updateApplication(id, req.body ?? {});
      return res.status(200).json(updated);
    }

    if (req.method === "DELETE") {
      await deleteApplication(id);
      return res.status(204).end();
    }

    res.setHeader("Allow", ["PUT", "DELETE"]);
    return res.status(405).end("Method Not Allowed");
  } catch (err: any) {
    console.error("/api/student/applications/[id] error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


