import { NextApiRequest, NextApiResponse } from "next";
import { universityDataService, SearchFilters } from "../../../services/universityDataService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { q, country, state, city, minRank, maxRank, minAcceptance, maxAcceptance } = req.query;

    // Build search filters
    const filters: SearchFilters = {};

    if (q && typeof q === "string") {
      filters.q = q;
    }
    if (country && typeof country === "string") {
      filters.country = country;
    }
    if (state && typeof state === "string") {
      filters.state = state;
    }
    if (city && typeof city === "string") {
      filters.city = city;
    }
    if (minRank && typeof minRank === "string") {
      const minRankNum = parseInt(minRank);
      if (!isNaN(minRankNum)) {
        filters.minRank = minRankNum;
      }
    }
    if (maxRank && typeof maxRank === "string") {
      const maxRankNum = parseInt(maxRank);
      if (!isNaN(maxRankNum)) {
        filters.maxRank = maxRankNum;
      }
    }
    if (minAcceptance && typeof minAcceptance === "string") {
      const minAcceptanceNum = parseFloat(minAcceptance);
      if (!isNaN(minAcceptanceNum)) {
        filters.minAcceptance = minAcceptanceNum;
      }
    }
    if (maxAcceptance && typeof maxAcceptance === "string") {
      const maxAcceptanceNum = parseFloat(maxAcceptance);
      if (!isNaN(maxAcceptanceNum)) {
        filters.maxAcceptance = maxAcceptanceNum;
      }
    }

    // 使用混合数据服务（数据库 + 实时API）
    const universities = await universityDataService.searchUniversities(filters);

    res.status(200).json(universities);
  } catch (error) {
    console.error("Error searching universities:", error);
    res.status(500).json({ error: "Failed to search universities" });
  }
}
