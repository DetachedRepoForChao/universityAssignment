import { PrismaClient } from "../src/generated/prisma";
import { hashPassword } from "../src/services/auth";

async function main() {
  console.log("🚀 开始直接插入测试数据...");
  
  // 创建新的 Prisma 实例
  const prisma = new PrismaClient();

  try {
    // 创建密码哈希
    const studentPwd = await hashPassword("student123");
    const parentPwd = await hashPassword("parent123");
    const adminPwd = await hashPassword("admin123");

    console.log("👨‍💼 创建管理员账号...");
    // 使用原生 SQL 避免 prepared statement 冲突
    await prisma.$executeRaw`
      INSERT INTO "Admin" (id, name, email, "passwordHash", role, permissions, "createdAt")
      VALUES (gen_random_uuid(), '系统管理员', 'admin@example.com', ${adminPwd}, 'super_admin', '["user_management", "data_sync", "system_monitoring"]', NOW())
      ON CONFLICT (email) DO NOTHING
    `;

    console.log("👨‍🎓 创建学生账号...");
    await prisma.$executeRaw`
      INSERT INTO "Student" (id, name, email, "passwordHash", "graduationYear", gpa, "satScore", "actScore", "targetCountries", "intendedMajors", "createdAt")
      VALUES 
        (gen_random_uuid(), 'Alice Zhang', 'alice@example.com', ${studentPwd}, 2025, 3.95, 1550, 35, '["USA", "Canada"]', '["Computer Science", "Mathematics"]', NOW()),
        (gen_random_uuid(), 'David Chen', 'david@example.com', ${studentPwd}, 2025, 3.88, 1480, 33, '["USA", "UK"]', '["Engineering", "Physics"]', NOW()),
        (gen_random_uuid(), 'Emma Wilson', 'emma@example.com', ${studentPwd}, 2025, 3.92, 1520, 34, '["USA"]', '["Biology", "Chemistry"]', NOW())
      ON CONFLICT (email) DO NOTHING
    `;

    console.log("👨‍👩‍👧‍👦 创建家长账号...");
    await prisma.$executeRaw`
      INSERT INTO "Parent" (id, name, email, "passwordHash", phone, "createdAt")
      VALUES 
        (gen_random_uuid(), 'Li Wei', 'parent1@example.com', ${parentPwd}, '1234567890', NOW()),
        (gen_random_uuid(), 'John Smith', 'parent2@example.com', ${parentPwd}, '0987654321', NOW()),
        (gen_random_uuid(), 'Maria Garcia', 'parent3@example.com', ${parentPwd}, '5551234567', NOW())
      ON CONFLICT (email) DO NOTHING
    `;

    console.log("🏫 创建大学数据...");
    await prisma.$executeRaw`
      INSERT INTO "University" (id, "externalId", name, country, state, city, "usNewsRanking", "acceptanceRate", raw, "createdAt")
      VALUES 
        (gen_random_uuid(), 'mit-001', 'MIT', 'USA', 'MA', 'Cambridge', 1, 6.7, '{"website": "https://mit.edu", "description": "Massachusetts Institute of Technology"}', NOW()),
        (gen_random_uuid(), 'stanford-001', 'Stanford University', 'USA', 'CA', 'Stanford', 2, 4.3, '{"website": "https://stanford.edu", "description": "Stanford University"}', NOW()),
        (gen_random_uuid(), 'harvard-001', 'Harvard University', 'USA', 'MA', 'Cambridge', 3, 4.6, '{"website": "https://harvard.edu", "description": "Harvard University"}', NOW()),
        (gen_random_uuid(), 'ucb-001', 'UC Berkeley', 'USA', 'CA', 'Berkeley', 4, 14.5, '{"website": "https://berkeley.edu", "description": "University of California, Berkeley"}', NOW())
      ON CONFLICT ("externalId") DO NOTHING
    `;

    console.log("✅ 测试数据创建完成！");
    console.log("\n📋 测试账号信息：");
    console.log("👨‍💼 管理员: admin@example.com / admin123");
    console.log("👨‍🎓 学生: alice@example.com / student123");
    console.log("👨‍🎓 学生: david@example.com / student123");
    console.log("👨‍🎓 学生: emma@example.com / student123");
    console.log("👨‍👩‍👧‍👦 家长: parent1@example.com / parent123");
    console.log("👨‍👩‍👧‍👦 家长: parent2@example.com / parent123");
    console.log("👨‍👩‍👧‍👦 家长: parent3@example.com / parent123");

  } catch (error) {
    console.error("❌ 创建测试数据失败:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error("❌ 脚本执行失败:", e);
  process.exit(1);
});
