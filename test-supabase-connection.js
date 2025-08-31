const { getSupabasePrisma } = require('./src/lib/prisma-supabase');

async function testSupabaseConnection() {
  console.log('🔍 测试Supabase Prisma连接...');
  console.log('📊 数据库URL:', process.env.DATABASE_URL ? '已设置' : '未设置');
  
  try {
    // 获取Supabase Prisma客户端
    const prisma = await getSupabasePrisma();
    console.log('✅ Supabase Prisma客户端获取成功');
    
    // 测试健康检查
    console.log('🔍 执行健康检查...');
    const isHealthy = await prisma.healthCheck();
    if (isHealthy) {
      console.log('✅ 健康检查通过');
    } else {
      console.log('⚠️ 健康检查失败');
    }
    
    // 测试简单查询
    console.log('🔍 测试简单查询...');
    try {
      const result = await prisma.$queryRaw`SELECT 1 as test`;
      console.log('✅ 查询测试成功:', result);
    } catch (error) {
      console.log('⚠️ 查询测试失败:', error.message);
    }
    
    // 测试数据库版本
    console.log('🔍 检查数据库版本...');
    try {
      const version = await prisma.$queryRaw`SELECT version()`;
      console.log('✅ 数据库版本:', version[0]?.version);
    } catch (error) {
      console.log('⚠️ 获取版本失败:', error.message);
    }
    
    // 测试使用Prisma ORM查询
    console.log('🔍 测试Prisma ORM查询...');
    try {
      // 尝试查询一个表（如果存在）
      const tables = await prisma.$queryRaw`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
        LIMIT 5
      `;
      console.log('✅ 表查询成功:', tables.map(t => t.table_name));
    } catch (error) {
      console.log('⚠️ 表查询失败:', error.message);
    }
    
  } catch (error) {
    console.error('❌ Supabase连接测试失败:', error);
    
    if (error.code === 'P1001') {
      console.log('💡 建议: 检查数据库是否运行，以及连接字符串是否正确');
    } else if (error.code === 'P1002') {
      console.log('💡 建议: 检查数据库连接超时设置');
    } else if (error.code === 'P2010') {
      console.log('💡 这是prepared statement冲突错误');
      console.log('💡 建议: 使用新的Supabase客户端配置');
    }
    
  }
  
  console.log('🎯 Supabase连接测试完成!');
}

// 运行测试
testSupabaseConnection()
  .catch(console.error)
  .finally(() => process.exit(0));
