import { PrismaClient } from "../generated/prisma";

// 专门针对Supabase的Prisma客户端配置 (直接连接模式)
class SupabasePrismaClient {
  private static instance: SupabasePrismaClient;
  private client: PrismaClient | null = null;
  private isConnecting = false;

  private constructor() {}

  static getInstance(): SupabasePrismaClient {
    if (!SupabasePrismaClient.instance) {
      SupabasePrismaClient.instance = new SupabasePrismaClient();
    }
    return SupabasePrismaClient.instance;
  }

  // 获取Prisma客户端实例
  async getClient(): Promise<PrismaClient> {
    if (this.client && !this.isConnecting) {
      return this.client;
    }

    if (this.isConnecting) {
      // 等待连接完成
      while (this.isConnecting) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      return this.client!;
    }

    this.isConnecting = true;
    
    try {
      // 创建新的客户端实例 - 使用直接连接模式
      this.client = new PrismaClient({
        datasources: {
          db: {
            url: process.env.DATABASE_URL,
          },
        },
      });

      // 连接数据库
      await this.client.$connect();
      console.log('✅ Supabase Prisma客户端连接成功 (直接连接模式)');
      console.log('📊 连接信息:', this.getConnectionInfo());
      
      return this.client;
    } catch (error) {
      console.error('❌ Supabase Prisma客户端连接失败:', error);
      this.resetClient();
      throw error;
    } finally {
      this.isConnecting = false;
    }
  }

  // 重置客户端
  private resetClient(): void {
    if (this.client) {
      try {
        this.client.$disconnect();
      } catch (error) {
        console.error('关闭Prisma客户端失败:', error);
      }
      this.client = null;
    }
  }

  // 关闭客户端
  async close(): Promise<void> {
    if (this.client) {
      try {
        await this.client.$disconnect();
        console.log('🔌 Supabase Prisma客户端已关闭');
      } catch (error) {
        console.error('关闭Prisma客户端失败:', error);
      }
      this.client = null;
    }
  }

  // 健康检查
  async healthCheck(): Promise<boolean> {
    try {
      const client = await this.getClient();
      // 执行简单查询检查连接
      await client.$queryRaw`SELECT 1 as health_check`;
      return true;
    } catch (error) {
      console.error('健康检查失败:', error);
      return false;
    }
  }

  // 获取连接信息
  getConnectionInfo(): string {
    const url = process.env.DATABASE_URL || '';
    if (url.includes(':5432/')) {
      return '直接连接模式 (端口5432)';
    } else if (url.includes(':6543/')) {
      return '连接池器模式 (端口6543)';
    }
    return '未知连接模式';
  }
}

// 导出单例实例
export const supabasePrisma = SupabasePrismaClient.getInstance();

// 导出便捷函数
export const getSupabasePrisma = () => supabasePrisma.getClient();

// 优雅关闭处理
process.on('beforeExit', async () => {
  await supabasePrisma.close();
});

process.on('SIGINT', async () => {
  await supabasePrisma.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await supabasePrisma.close();
  process.exit(0);
});
