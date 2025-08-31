import { PrismaClient } from "../src/generated/prisma";
import { hashPassword } from "../src/services/auth";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

async function main() {
  console.log("开始创建增强测试数据...");

  // 清理现有数据（按正确的外键依赖顺序）
  try {
    await prisma.applicationRequirement.deleteMany({});
    await prisma.applicationDocument.deleteMany({});
    await prisma.application.deleteMany({});
    await prisma.studentParent.deleteMany({});
    await prisma.parent.deleteMany({});
    await prisma.student.deleteMany({});
    await prisma.admin.deleteMany({});
    await prisma.university.deleteMany({});
    console.log("✅ 现有数据清理完成");
  } catch (error) {
    console.log("⚠️ 数据清理时出现错误（可能是首次运行）:", error instanceof Error ? error.message : String(error));
  }

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
      permissions: ["user_management", "data_sync", "system_monitoring"]
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
    }),
    prisma.university.create({ 
      data: { 
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

  console.log("创建申请数据...");
  const applications = await Promise.all([
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
    }),
    prisma.application.create({
      data: {
        studentId: students[0].id,
        universityId: universities[3].id, // UC Berkeley
        applicationType: "REGULAR_DECISION",
        status: "IN_PROGRESS",
        deadline: new Date("2024-12-01"),
        syncedAt: new Date(),
      },
    })
  ]);

  console.log("创建申请要求数据...");
  const requirementTypes = [
    "成绩单",
    "推荐信",
    "个人陈述",
    "SAT成绩",
    "ACT成绩",
    "课外活动记录",
    "奖项证书",
    "作品集"
  ];

  for (const app of applications) {
    // 为每个申请创建3-6个要求
    const numRequirements = Math.floor(Math.random() * 4) + 3;
    const selectedTypes = requirementTypes
      .sort(() => 0.5 - Math.random())
      .slice(0, numRequirements);

    for (const reqType of selectedTypes) {
      const status = Math.random() > 0.7 ? "completed" : 
                    Math.random() > 0.5 ? "in_progress" : "not_started";
      
      await prisma.applicationRequirement.create({
        data: {
          applicationId: app.id,
          requirementType: reqType,
          status: status,
          deadline: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000), // 随机30天内
          notes: `${reqType}要求`,
        },
      });
    }
  }

  console.log("创建示例文档数据...");
  // 为一些已完成的要求创建示例文档
  const completedRequirements = await prisma.applicationRequirement.findMany({
    where: { status: "completed" },
    take: 5
  });

  for (const req of completedRequirements) {
    await prisma.applicationDocument.create({
      data: {
        applicationId: req.applicationId,
        filename: `示例_${req.requirementType}_${Date.now()}.pdf`,
        docType: req.requirementType,
        mimeType: "application/pdf",
        sizeBytes: Math.floor(Math.random() * 1000000) + 100000, // 100KB - 1MB
        storagePath: `/uploads/sample_${req.requirementType}.pdf`,
      },
    });
  }

  console.log("✅ 增强测试数据创建完成！");
  console.log(`- 1个管理员账号`);
  console.log(`- ${students.length}个学生账号`);
  console.log(`- ${parents.length}个家长账号`);
  console.log(`- ${universities.length}所大学`);
  console.log(`- ${applications.length}个申请`);
  console.log(`- 多个申请要求（支持进度条）`);
  console.log(`- 示例文档（支持上传功能）`);
  
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
    console.error("❌ 创建增强测试数据失败:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
