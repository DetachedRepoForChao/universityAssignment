import { PrismaClient } from "../generated/prisma";

declare global {
  var __prismaClient: PrismaClient | undefined;
}

// 创建Prisma客户端实例
const createPrismaClient = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });
};

// 在开发环境中，每次请求都创建新的客户端实例
export const prisma: PrismaClient = 
  process.env.NODE_ENV === "production" 
    ? (global.__prismaClient ?? createPrismaClient())
    : createPrismaClient();

// 在开发环境中使用全局实例
if (process.env.NODE_ENV !== "production") {
  global.__prismaClient = prisma;
}

// 添加优雅关闭处理
process.on('beforeExit', async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error('关闭Prisma连接失败:', error);
  }
});



