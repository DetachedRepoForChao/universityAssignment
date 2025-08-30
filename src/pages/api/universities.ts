import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const universities = await prisma.university.findMany({
      where: {
        isActive: true
      },
      select: {
        id: true,
        name: true,
        country: true,
        state: true,
        city: true,
        usNewsRanking: true,
        acceptanceRate: true,
        source: true
      },
      orderBy: [
        { usNewsRanking: 'asc' },
        { name: 'asc' }
      ]
    });

    res.status(200).json(universities);
  } catch (error) {
    console.error("Error fetching universities:", error);
    res.status(500).json({ error: "Failed to fetch universities" });
  }
}
