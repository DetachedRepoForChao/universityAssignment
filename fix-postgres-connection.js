const { PrismaClient } = require('./src/generated/prisma');

async function fixPostgresConnection() {
  console.log('🔧 修复PostgreSQL连接问题...');
  
  // 创建多个Prisma客户端实例来测试
  const clients = [];
  
  try {
    // 创建第一个客户端
    console.log('📡 创建第一个客户端...');
    const client1 = new PrismaClient({
      log: ['error'],
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
    clients.push(client1);
    
    await client1.$connect();
    console.log('✅ 第一个客户端连接成功');
    
    // 尝试查询
    try {
      const result1 = await client1.$queryRaw`SELECT 1 as test`;
      console.log('✅ 第一个客户端查询成功:', result1);
    } catch (error) {
      console.log('⚠️ 第一个客户端查询失败:', error.message);
    }
    
    // 创建第二个客户端
    console.log('📡 创建第二个客户端...');
    const client2 = new PrismaClient({
      log: ['error'],
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
    clients.push(client2);
    
    await client2.$connect();
    console.log('✅ 第二个客户端连接成功');
    
    // 尝试查询
    try {
      const result2 = await client2.$queryRaw`SELECT 2 as test`;
      console.log('✅ 第二个客户端查询成功:', result2);
    } catch (error) {
      console.log('⚠️ 第二个客户端查询失败:', error.message);
    }
    
    // 测试使用不同的查询名称
    console.log('🔍 测试使用不同的查询名称...');
    try {
      const result3 = await client1.$queryRaw`SELECT 'client1' as client, 3 as test`;
      console.log('✅ 客户端1新查询成功:', result3);
    } catch (error) {
      console.log('⚠️ 客户端1新查询失败:', error.message);
    }
    
    try {
      const result4 = await client2.$queryRaw`SELECT 'client2' as client, 4 as test`;
      console.log('✅ 客户端2新查询成功:', result4);
    } catch (error) {
      console.log('⚠️ 客户端2新查询失败:', error.message);
    }
    
    // 测试使用executeRaw而不是queryRaw
    console.log('🔍 测试使用executeRaw...');
    try {
      const result5 = await client1.$executeRaw`SELECT 5 as test`;
      console.log('✅ 客户端1 executeRaw成功:', result5);
    } catch (error) {
      console.log('⚠️ 客户端1 executeRaw失败:', error.message);
    }
    
    // 测试使用Prisma的findFirst而不是raw query
    console.log('🔍 测试使用Prisma ORM查询...');
    try {
      // 这里需要有一个实际的表，我们先跳过
      console.log('ℹ️ 跳过ORM查询测试（需要现有表）');
    } catch (error) {
      console.log('⚠️ ORM查询失败:', error.message);
    }
    
  } catch (error) {
    console.error('❌ 连接测试失败:', error);
  } finally {
    // 关闭所有客户端
    console.log('🔌 关闭所有客户端...');
    for (const client of clients) {
      try {
        await client.$disconnect();
      } catch (error) {
        console.error('关闭客户端失败:', error);
      }
    }
    console.log('✅ 所有客户端已关闭');
  }
  
  console.log('🎯 连接测试完成!');
}

// 运行修复
fixPostgresConnection()
  .catch(console.error)
  .finally(() => process.exit(0));
