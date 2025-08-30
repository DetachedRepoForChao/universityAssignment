import type { NextApiRequest, NextApiResponse } from "next";
import { signJWT, verifyJWT } from "../../services/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 测试JWT生成
    const testPayload = {
      id: "test-user-123",
      role: "student" as const,
      email: "test@example.com"
    };

    console.log("=== JWT 测试开始 ===");
    console.log("测试载荷:", testPayload);

    // 生成JWT
    const token = signJWT(testPayload);
    console.log("生成的JWT:", token);
    console.log("JWT长度:", token.length);

    // 立即验证JWT
    console.log("=== 开始验证JWT ===");
    const decoded = verifyJWT(token);
    console.log("验证结果:", decoded);

    if (decoded) {
      console.log("✅ JWT验证成功");
      return res.status(200).json({
        success: true,
        message: "JWT测试成功",
        token: token,
        decoded: decoded,
        tokenLength: token.length
      });
    } else {
      console.log("❌ JWT验证失败");
      return res.status(400).json({
        success: false,
        message: "JWT验证失败",
        token: token,
        tokenLength: token.length
      });
    }

  } catch (error) {
    console.error("JWT测试出错:", error);
    return res.status(500).json({
      success: false,
      message: "JWT测试出错",
      error: error instanceof Error ? error.message : String(error)
    });
  }
}
