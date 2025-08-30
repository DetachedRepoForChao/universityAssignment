import jwt, { SignOptions, Secret } from "jsonwebtoken";
import bcrypt from "bcryptjs";

export type AppRole = "student" | "parent" | "admin";

export interface JwtPayload {
  id: string;
  role: AppRole;
  email: string;
}

const getJwtSecret = (): Secret => {
  // 使用固定的开发密钥，确保一致性
  const secret = process.env.JWT_SECRET || "dev_secret_key_for_university_tracker_2024";
  console.log("Using JWT secret:", secret.substring(0, 10) + "...");
  return secret as Secret;
};

export const signJWT = (payload: JwtPayload, expiresIn: string = "30d"): string => {
  const options: SignOptions = { expiresIn: expiresIn as any };
  return jwt.sign(payload as object, getJwtSecret(), options);
};

export const verifyJWT = (token: string): JwtPayload | null => {
  try {
    const secret = getJwtSecret();
    const secretStr = typeof secret === 'string' ? secret : secret.toString();
    console.log("Verifying JWT with secret:", secretStr.substring(0, 10) + "...");
    console.log("Token to verify:", token.substring(0, 20) + "...");
    
    const decoded = jwt.verify(token, secret) as JwtPayload;
    console.log("JWT decoded successfully:", { id: decoded.id, role: decoded.role, email: decoded.email });
    
    // 验证必要字段
    if (!decoded.id || !decoded.role || !decoded.email) {
      console.log("JWT payload missing required fields:", decoded);
      return null;
    }
    return decoded;
  } catch (error) {
    console.log("JWT verification failed:", error);
    if (error instanceof jwt.JsonWebTokenError) {
      console.log("JWT error type:", error.name);
      console.log("JWT error message:", error.message);
    }
    return null;
  }
};

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function requireRole<T extends JwtPayload>(user: T | null, roles: AppRole[]): asserts user is T {
  if (!user || !roles.includes(user.role)) {
    const error = new Error("Unauthorized");
    // @ts-expect-error augment
    error.status = 403;
    throw error;
  }
}


