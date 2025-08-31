import { PrismaClient } from "../src/generated/prisma";
import { hashPassword } from "../src/services/auth";

// 创建新的 Prisma 实例，避免连接冲突
const prisma = new PrismaClient();

async function main() {
  console.log("🚀 开始创建测试数据...");

  // 创建密码哈希
  const studentPwd = await hashPassword("student123");
  const parentPwd = await hashPassword("parent123");
  const adminPwd = await hashPassword("admin123");

  console.log("👨‍💼 创建管理员账号...");
  const admin = await prisma.admin.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      name: "系统管理员",
      email: "admin@example.com",
      passwordHash: adminPwd,
      role: "super_admin",
      permissions: ["user_management", "data_sync", "system_monitoring"]
    },
  });

  console.log("🏫 创建大学数据...");
  const universities = await Promise.all([
    prisma.university.upsert({
      where: { name: "MIT" },
      update: {},
      create: {
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
    prisma.university.upsert({
      where: { name: "Stanford University" },
      update: {},
      create: {
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
    prisma.university.upsert({
      where: { name: "Harvard University" },
      update: {},
      create: {
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
    }),
    prisma.university.upsert({
      where: { name: "UC Berkeley" },
      update: {},
      create: {
        name: "UC Berkeley", 
        country: "USA", 
        state: "CA",
        city: "Berkeley",
        usNewsRanking: 4,
        acceptanceRate: 14.5,
        raw: {
          website: "https://berkeley.edu",
          description: "University of California, Berkeley"
        }
      }
    })
  ]);

  console.log("👨‍🎓 创建学生账号...");
  const students = await Promise.all([
    prisma.student.upsert({
      where: { email: "alice@example.com" },
      update: {},
      create: {
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
    prisma.student.upsert({
      where: { email: "david@example.com" },
      update: {},
      create: {
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
    prisma.student.upsert({
      where: { email: "emma@example.com" },
      update: {},
      create: {
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

  console.log("👨‍👩‍👧‍👦 创建家长账号...");
  const parents = await Promise.all([
    prisma.parent.upsert({
      where: { email: "parent1@example.com" },
      update: {},
      create: {
        name: "Li Wei",
        email: "parent1@example.com",
        passwordHash: parentPwd,
        phone: "1234567890",
      },
    }),
    prisma.parent.upsert({
      where: { email: "parent2@example.com" },
      update: {},
      create: {
        name: "John Smith",
        email: "parent2@example.com",
        passwordHash: parentPwd,
        phone: "0987654321",
      },
    }),
    prisma.parent.upsert({
      where: { email: "parent3@example.com" },
      update: {},
      create: {
        name: "Maria Garcia",
        email: "parent3@example.com",
        passwordHash: parentPwd,
        phone: "5551234567",
      },
    })
  ]);

  console.log("🔗 创建学生-家长关联...");
  for (let i = 0; i < students.length && i < parents.length; i++) {
    await prisma.studentParent.upsert({
      where: {
        studentId_parentId: {
          studentId: students[i].id,
          parentId: parents[i].id
        }
      },
      update: {},
      create: {
        studentId: students[i].id,
        parentId: parents[i].id,
        relationship: i === 0 ? "mother" : i === 1 ? "father" : "mother"
      }
    });
  }

  console.log("📝 创建申请数据...");
  const applications = [];
  
  // Alice 的申请
  const aliceApps = await Promise.all([
    prisma.application.upsert({
      where: {
        studentId_universityId: {
          studentId: students[0].id,
          universityId: universities[0].id
        }
      },
      update: {},
      create: {
        studentId: students[0].id,
        universityId: universities[0].id,
        applicationType: "EARLY_DECISION",
        status: "SUBMITTED",
        deadline: new Date("2024-11-01"),
        submittedDate: new Date("2024-10-15"),
        syncedAt: new Date(),
      },
    }),
    prisma.application.upsert({
      where: {
        studentId_universityId: {
          studentId: students[0].id,
          universityId: universities[1].id
        }
      },
      update: {},
      create: {
        studentId: students[0].id,
        universityId: universities[1].id,
        applicationType: "EARLY_ACTION",
        status: "IN_PROGRESS",
        deadline: new Date("2024-11-01"),
        syncedAt: new Date(),
      },
    })
  ]);

  applications.push(...aliceApps);

  console.log("✅ 测试数据创建完成！");
  console.log(`- 1个管理员账号`);
  console.log(`- ${students.length}个学生账号`);
  console.log(`- ${parents.length}个家长账号`);
  console.log(`- ${universities.length}所大学`);
  console.log(`- ${applications.length}个申请`);
  
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