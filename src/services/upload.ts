import path from "path";
import fs from "fs";

export function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export function localPathFor(appId: string, originalName: string) {
  const base = path.join(process.cwd(), "uploads", appId);
  ensureDir(base);
  const filename = `${Date.now()}_${originalName}`;
  return path.join(base, filename);
}




