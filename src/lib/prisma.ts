import { PrismaClient } from "../generated/prisma";

declare global {
  // eslint-disable-next-line no-var
  var __prismaClient: PrismaClient | undefined;
}

// 创建Prisma客户端实例，解决prepared statement冲突
const createPrismaClient = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
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

// 在开发环境中使用全局实例（但每次请求都重新创建）
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

// 添加错误处理
prisma.$on('error', (e) => {
  console.error('Prisma Error:', e);
});

// 添加查询日志（仅开发环境）
if (process.env.NODE_ENV === 'development') {
  prisma.$on('query', (e) => {
    console.log('Query: ' + e.query);
    console.log('Params: ' + e.params);
    console.log('Duration: ' + e.duration + 'ms');
  });
}



