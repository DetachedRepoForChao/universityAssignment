require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('./src/generated/prisma');

async function testDirectConnection() {
  console.log('🔍 测试Supabase直接连接 (端口5432)...');
  console.log('📊 数据库URL:', process.env.DATABASE_URL || '未设置');
  
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

  try {
    // 测试连接
    await prisma.$connect();
    console.log('✅ 数据库连接成功!');
    
    // 测试简单查询
    console.log('🔍 测试简单查询...');
    try {
      const result = await prisma.$queryRaw`SELECT 1 as test`;
      console.log('✅ 查询测试成功:', result);
    } catch (error) {
      console.log('⚠️ 查询测试失败:', error.message);
      if (error.code === 'P2010') {
        console.log('💡 这是prepared statement冲突错误');
      }
    }
    
    // 检查数据库版本
    console.log('🔍 检查数据库版本...');
    try {
      const version = await prisma.$queryRaw`SELECT version()`;
      console.log('✅ 数据库版本:', version[0]?.version);
    } catch (error) {
      console.log('⚠️ 获取版本失败:', error.message);
    }
    
    // 检查连接信息
    const dbUrl = process.env.DATABASE_URL || '';
    if (dbUrl.includes(':5432/')) {
      console.log('✅ 使用直接连接模式 (端口5432)');
    } else if (dbUrl.includes(':6543/')) {
      console.log('⚠️ 仍在使用连接池器模式 (端口6543)');
    }
    
  } catch (error) {
    console.error('❌ 数据库连接失败:', error.message);
    
    if (error.code === 'P1001') {
      console.log('💡 建议: 检查数据库是否运行，以及连接字符串是否正确');
    } else if (error.code === 'P1002') {
      console.log('💡 建议: 检查数据库连接超时设置');
    } else if (error.code === 'P2010') {
      console.log('💡 这是prepared statement冲突错误');
      console.log('💡 建议: 使用端口5432直接连接');
    }
    
  } finally {
    await prisma.$disconnect();
    console.log('🔌 数据库连接已关闭');
  }
  
  console.log('🎯 直接连接测试完成!');
}

// 运行测试
testDirectConnection()
  .catch(console.error)
  .finally(() => process.exit(0));
