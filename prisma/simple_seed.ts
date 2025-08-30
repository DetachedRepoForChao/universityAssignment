import { PrismaClient } from "../src/generated/prisma";
import { hashPassword } from "../src/services/auth";

const prisma = new PrismaClient();

async function main() {
  console.log("开始创建测试数据...");

  // 清理现有数据
  await prisma.applicationRequirement.deleteMany({});
  await prisma.application.deleteMany({});
  await prisma.studentParent.deleteMany({});
  await prisma.parent.deleteMany({});
  await prisma.student.deleteMany({});
  await prisma.admin.deleteMany({});
  await prisma.university.deleteMany({});

  // 创建密码哈希
  const studentPwd = await hashPassword("student123");
  const parentPwd = await hashPassword("parent123");
  const adminPwd = await hashPassword("admin123");

  console.log("创建管理员账号...");
  const admin = await prisma.admin.create({
    data: {
      name: "系统管理员",
      email: "admin@example.com",
      passwordHash: adminPwd,
      role: "super_admin",
      permissions: {
        canManageUsers: true,
        canManageUniversities: true,
        canViewAllApplications: true,
        canSyncExternalData: true
      }
    },
  });

  console.log("创建学生账号...");
  const students = await Promise.all([
    prisma.student.create({
      data: {
        name: "Alice Zhang",
        email: "alice@example.com",
        passwordHash: studentPwd,
        graduationYear: 2025,
        gpa: 3.95,
        satScore: 1550,
        actScore: 35,
        targetCountries: { set: ["USA", "Canada"] },
        intendedMajors: { set: ["Computer Science", "Mathematics"] },
      },
    }),
    prisma.student.create({
      data: {
        name: "David Chen",
        email: "david@example.com",
        passwordHash: studentPwd,
        graduationYear: 2025,
        gpa: 3.88,
        satScore: 1480,
        actScore: 33,
        targetCountries: { set: ["USA", "UK"] },
        intendedMajors: { set: ["Engineering", "Physics"] },
      },
    }),
    prisma.student.create({
      data: {
        name: "Emma Wilson",
        email: "emma@example.com",
        passwordHash: studentPwd,
        graduationYear: 2025,
        gpa: 3.92,
        satScore: 1520,
        actScore: 34,
        targetCountries: { set: ["USA"] },
        intendedMajors: { set: ["Biology", "Chemistry"] },
      },
    })
  ]);

  console.log("创建家长账号...");
  const parents = await Promise.all([
    prisma.parent.create({
      data: {
        name: "Li Wei",
        email: "parent1@example.com",
        passwordHash: parentPwd,
        phone: "1234567890",
      },
    }),
    prisma.parent.create({
      data: {
        name: "John Smith",
        email: "parent2@example.com",
        passwordHash: parentPwd,
        phone: "0987654321",
      },
    }),
    prisma.parent.create({
      data: {
        name: "Maria Garcia",
        email: "parent3@example.com",
        passwordHash: parentPwd,
        phone: "5551234567",
      },
    })
  ]);

  console.log("创建学生-家长关联...");
  await Promise.all([
    prisma.studentParent.create({
      data: { studentId: students[0].id, parentId: parents[0].id, relationship: "mother" },
    }),
    prisma.studentParent.create({
      data: { studentId: students[1].id, parentId: parents[1].id, relationship: "father" },
    }),
    prisma.studentParent.create({
      data: { studentId: students[2].id, parentId: parents[2].id, relationship: "mother" },
    })
  ]);

  console.log("创建大学数据...");
  const universities = await Promise.all([
    prisma.university.create({ 
      data: { 
        name: "MIT", 
        country: "USA", 
        state: "MA",
        city: "Cambridge",
        usNewsRanking: 1,
        acceptanceRate: 6.7,

        raw: {
          website: "https://mit.edu",
          description: "Massachusetts Institute of Technology"
        }
      } 
    }),
    prisma.university.create({ 
      data: { 
        name: "Stanford University", 
        country: "USA", 
        state: "CA",
        city: "Stanford",
        usNewsRanking: 2,
        acceptanceRate: 4.3,

        raw: {
          website: "https://stanford.edu",
          description: "Stanford University"
        }
      } 
    }),
    prisma.university.create({ 
      data: { 
        name: "Harvard University", 
        country: "USA", 
        state: "MA",
        city: "Cambridge",
        usNewsRanking: 3,
        acceptanceRate: 4.6,

        raw: {
          website: "https://harvard.edu",
          description: "Harvard University"
        }
      } 
    })
  ]);

  console.log("创建申请数据...");
  await Promise.all([
    prisma.application.create({
      data: {
        studentId: students[0].id,
        universityId: universities[0].id, // MIT
        applicationType: "EARLY_DECISION",
        status: "SUBMITTED",
        deadline: new Date("2024-11-01"),
        submittedDate: new Date("2024-10-15"),
        syncedAt: new Date(),
      },
    }),
    prisma.application.create({
      data: {
        studentId: students[0].id,
        universityId: universities[1].id, // Stanford
        applicationType: "EARLY_ACTION",
        status: "IN_PROGRESS",
        deadline: new Date("2024-11-01"),
        syncedAt: new Date(),
      },
    }),
    prisma.application.create({
      data: {
        studentId: students[1].id,
        universityId: universities[2].id, // Harvard
        applicationType: "REGULAR_DECISION",
        status: "NOT_STARTED",
        deadline: new Date("2025-01-01"),
        syncedAt: new Date(),
      },
    })
  ]);

  console.log("✅ 测试数据创建完成！");
  console.log(`- 1个管理员账号`);
  console.log(`- ${students.length}个学生账号`);
  console.log(`- ${parents.length}个家长账号`);
  console.log(`- ${universities.length}所大学`);
  console.log("\n📋 测试账号信息：");
  console.log("👨‍💼 管理员: admin@example.com / admin123");
  console.log("👨‍🎓 学生: alice@example.com / student123");
  console.log("👨‍🎓 学生: david@example.com / student123");
  console.log("👨‍🎓 学生: emma@example.com / student123");
  console.log("👨‍👩‍👧‍👦 家长: parent1@example.com / parent123");
  console.log("👨‍👩‍👧‍👦 家长: parent2@example.com / parent123");
  console.log("👨‍👩‍👧‍👦 家长: parent3@example.com / parent123");
}

main()
  .catch((e) => {
    console.error("❌ 创建测试数据失败:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
