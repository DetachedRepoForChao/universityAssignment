import path from "path";
import fs from "fs";
import { ensureDir, localPathFor } from "../upload";

test("ensureDir creates directory", () => {
  const dir = path.join(process.cwd(), "uploads", "__test__");
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  ensureDir(dir);
  expect(fs.existsSync(dir)).toBe(true);
});

test("localPathFor returns path under uploads/appId", () => {
  const p = localPathFor("app123", "file.txt");
  expect(p.includes(path.join("uploads", "app123"))).toBe(true);
});




