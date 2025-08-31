const { PrismaClient } = require('./src/generated/prisma');

async function testSimpleConnection() {
  console.log('🔍 测试简单数据库连接...');
  console.log('📊 数据库URL:', process.env.DATABASE_URL ? '已设置' : '未设置');
  
  const prisma = new PrismaClient({
    log: ['error'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    // 使用单连接模式
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

  try {
    // 测试连接
    await prisma.$connect();
    console.log('✅ 数据库连接成功!');
    
    // 测试简单查询
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ 查询测试成功:', result);
    
    // 检查数据库版本
    const version = await prisma.$queryRaw`SELECT version()`;
    console.log('📋 数据库版本:', version[0]?.version);
    
  } catch (error) {
    console.error('❌ 数据库连接失败:', error.message);
    
    if (error.code === 'P2010') {
      console.log('💡 这是prepared statement冲突错误');
      console.log('💡 建议: 重启应用或使用新的连接管理器');
    } else if (error.code === 'P1001') {
      console.log('💡 建议: 检查数据库是否运行，以及连接字符串是否正确');
    } else if (error.code === 'P1002') {
      console.log('💡 建议: 检查数据库连接超时设置');
    }
    
  } finally {
    await prisma.$disconnect();
    console.log('🔌 数据库连接已关闭');
  }
}

// 运行测试
testSimpleConnection()
  .catch(console.error)
  .finally(() => process.exit(0));
