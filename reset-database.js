const { PrismaClient } = require('./src/generated/prisma');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function resetDatabase() {
  console.log('🔄 开始重置数据库...');
  
  try {
    // 1. 删除现有的Prisma生成文件
    console.log('🗑️ 清理Prisma生成文件...');
    const generatedDir = path.join(__dirname, 'src/generated');
    if (fs.existsSync(generatedDir)) {
      fs.rmSync(generatedDir, { recursive: true, force: true });
      console.log('✅ 已删除生成的Prisma文件');
    }
    
    // 2. 重新生成Prisma客户端
    console.log('🔧 重新生成Prisma客户端...');
    try {
      execSync('npx prisma generate', { stdio: 'inherit', cwd: __dirname });
      console.log('✅ Prisma客户端生成成功');
    } catch (error) {
      console.error('❌ Prisma客户端生成失败:', error.message);
      return;
    }
    
    // 3. 测试数据库连接
    console.log('🔍 测试数据库连接...');
    const prisma = new PrismaClient({
      log: ['error'],
    });
    
    try {
      await prisma.$connect();
      console.log('✅ 数据库连接成功');
      
      // 4. 运行数据库迁移
      console.log('📊 运行数据库迁移...');
      try {
        execSync('npx prisma migrate deploy', { stdio: 'inherit', cwd: __dirname });
        console.log('✅ 数据库迁移成功');
      } catch (migrationError) {
        console.log('⚠️ 迁移失败，尝试重置数据库...');
        try {
          execSync('npx prisma migrate reset --force', { stdio: 'inherit', cwd: __dirname });
          console.log('✅ 数据库重置成功');
        } catch (resetError) {
          console.error('❌ 数据库重置失败:', resetError.message);
        }
      }
      
    } catch (dbError) {
      console.error('❌ 数据库连接失败:', dbError.message);
      console.log('💡 请检查以下项目:');
      console.log('   1. 数据库服务是否运行');
      console.log('   2. DATABASE_URL环境变量是否正确');
      console.log('   3. 数据库用户权限是否足够');
    } finally {
      await prisma.$disconnect();
    }
    
  } catch (error) {
    console.error('❌ 重置过程失败:', error);
  }
  
  console.log('🎯 数据库重置完成!');
}

// 运行重置
resetDatabase()
  .catch(console.error)
  .finally(() => process.exit(0));
