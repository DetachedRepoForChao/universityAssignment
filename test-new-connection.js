const { PrismaClient } = require('./src/generated/prisma');

async function testNewConnection() {
  console.log('🔌 测试新的Supabase连接...');
  
  const connectionString = 'postgresql://postgres.tgjegehscsxxglucujre:0213Wasd!!@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres';
  console.log('📍 新连接字符串:', connectionString);
  
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: connectionString
      }
    }
  });

  try {
    console.log('🔄 正在连接...');
    
    // 测试连接
    await prisma.$connect();
    console.log('✅ 数据库连接成功！');
    
    // 测试简单查询
    console.log('🔄 测试查询...');
    const result = await prisma.$queryRaw`SELECT version() as version`;
    console.log('✅ 查询测试成功:', result);
    
    await prisma.$disconnect();
    console.log('✅ 连接已关闭');
    
  } catch (error) {
    console.error('❌ 连接失败');
    console.error('错误类型:', error.constructor.name);
    console.error('错误代码:', error.code);
    console.error('错误消息:', error.message);
    
    if (error.code === 'P1001') {
      console.log('\n💡 网络连接问题，请检查:');
      console.log('   - 网络连接是否正常');
      console.log('   - 防火墙设置');
      console.log('   - 代理设置');
    } else if (error.code === 'P1017') {
      console.log('\n💡 认证问题，请检查:');
      console.log('   - 数据库密码是否正确');
      console.log('   - 项目引用ID是否正确');
      console.log('   - 数据库用户权限');
    } else if (error.code === 'P1009') {
      console.log('\n💡 数据库不存在，请检查:');
      console.log('   - 项目是否已创建');
      console.log('   - 数据库是否已启动');
    }
    
    console.log('\n🔍 详细错误信息:');
    console.error(error);
  }
}

testNewConnection();
