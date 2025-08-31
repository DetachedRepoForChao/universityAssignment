import { PrismaClient } from "../generated/prisma";

// 连接管理器 - 解决prepared statement冲突
class PrismaManager {
  private static instance: PrismaManager;
  private clients: Map<string, PrismaClient> = new Map();
  private maxClients = 5;

  private constructor() {}

  static getInstance(): PrismaManager {
    if (!PrismaManager.instance) {
      PrismaManager.instance = new PrismaManager();
    }
    return PrismaManager.instance;
  }

  // 获取Prisma客户端实例
  getClient(requestId?: string): PrismaClient {
    const key = requestId || 'default';
    
    // 如果客户端不存在或已断开，创建新的
    if (!this.clients.has(key) || !this.isClientHealthy(key)) {
      this.createClient(key);
    }
    
    return this.clients.get(key)!;
  }

  // 创建新的客户端实例
  private createClient(key: string): void {
    // 如果客户端数量超过限制，清理旧的
    if (this.clients.size >= this.maxClients) {
      this.cleanupOldClients();
    }

    const client = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['error'] : ['error'],
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
      // 使用单连接模式避免prepared statement冲突
      __internal: {
        engine: {
          connectionLimit: 1,
          pool: {
            min: 1,
            max: 1,
          },
        },
      },
    });

    // 添加错误处理
    client.$on('error', (e) => {
      console.error(`Prisma Client ${key} Error:`, e);
      // 移除有问题的客户端
      this.removeClient(key);
    });

    this.clients.set(key, client);
    console.log(`Created new Prisma client: ${key}`);
  }

  // 检查客户端是否健康
  private isClientHealthy(key: string): boolean {
    const client = this.clients.get(key);
    if (!client) return false;
    
    try {
      // 尝试执行简单查询检查连接状态
      return true; // 简化检查，实际可以添加ping查询
    } catch {
      return false;
    }
  }

  // 清理旧的客户端
  private cleanupOldClients(): void {
    const keys = Array.from(this.clients.keys());
    if (keys.length > 0) {
      const oldestKey = keys[0];
      this.removeClient(oldestKey);
    }
  }

  // 移除客户端
  private removeClient(key: string): void {
    const client = this.clients.get(key);
    if (client) {
      try {
        client.$disconnect();
      } catch (error) {
        console.error(`Failed to disconnect client ${key}:`, error);
      }
      this.clients.delete(key);
      console.log(`Removed Prisma client: ${key}`);
    }
  }

  // 关闭所有客户端
  async closeAll(): Promise<void> {
    const closePromises = Array.from(this.clients.keys()).map(key => 
      this.removeClient(key)
    );
    
    await Promise.all(closePromises);
    console.log('All Prisma clients closed');
  }

  // 获取客户端数量
  getClientCount(): number {
    return this.clients.size;
  }
}

// 导出单例实例
export const prismaManager = PrismaManager.getInstance();

// 导出便捷函数
export const getPrismaClient = (requestId?: string) => prismaManager.getClient(requestId);

// 优雅关闭处理
process.on('beforeExit', async () => {
  await prismaManager.closeAll();
});

process.on('SIGINT', async () => {
  await prismaManager.closeAll();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prismaManager.closeAll();
  process.exit(0);
});
