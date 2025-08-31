const { PrismaClient } = require('./src/generated/prisma');

async function testDatabaseConnection() {
  const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

  try {
    console.log('🔍 测试数据库连接...');
    console.log('📊 数据库URL:', process.env.DATABASE_URL || '未设置');
    
    // 测试基本连接
    await prisma.$connect();
    console.log('✅ 数据库连接成功!');
    
    // 测试简单查询
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ 查询测试成功:', result);
    
    // 检查数据库版本
    const version = await prisma.$queryRaw`SELECT version()`;
    console.log('📋 数据库版本:', version[0]?.version);
    
    // 检查表是否存在
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `;
    console.log('📋 数据库表:', tables.map(t => t.table_name));
    
  } catch (error) {
    console.error('❌ 数据库连接失败:', error);
    
    if (error.code === 'P1001') {
      console.log('💡 建议: 检查数据库是否运行，以及连接字符串是否正确');
    } else if (error.code === 'P1002') {
      console.log('💡 建议: 检查数据库连接超时设置');
    } else if (error.code === 'P1003') {
      console.log('💡 建议: 检查数据库是否存在');
    } else if (error.code === 'P1008') {
      console.log('💡 建议: 检查数据库连接池设置');
    }
    
  } finally {
    await prisma.$disconnect();
    console.log('🔌 数据库连接已关闭');
  }
}

// 运行测试
testDatabaseConnection()
  .catch(console.error)
  .finally(() => process.exit(0));
