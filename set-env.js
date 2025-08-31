const fs = require('fs');
const path = require('path');

// 设置环境变量
function setEnvironmentVariables() {
  console.log('🔧 设置环境变量...');
  
  // 新的Supabase连接字符串 (端口5432，直接连接)
  const newDatabaseUrl = "postgresql://postgres.tgjegehscsxxglucujre:0213Wasd!!@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres";
  
  // 环境变量内容
  const envContent = `# Supabase PostgreSQL连接 (直接连接，避免连接池器问题)
DATABASE_URL="${newDatabaseUrl}"

# JWT认证密钥
JWT_SECRET="dev_secret_key_for_university_tracker_2024"

# 环境配置
NODE_ENV="development"
`;
  
  try {
    // 写入.env.local文件
    const envPath = path.join(__dirname, '.env.local');
    fs.writeFileSync(envPath, envContent, 'utf8');
    console.log('✅ 环境变量已写入 .env.local 文件');
    console.log('📊 数据库URL:', newDatabaseUrl);
    console.log('🔍 连接模式: 直接连接 (端口5432)');
    
    // 验证文件内容
    const fileContent = fs.readFileSync(envPath, 'utf8');
    if (fileContent.includes(':5432/')) {
      console.log('✅ 确认使用端口5432 (直接连接)');
    } else {
      console.log('⚠️ 警告: 可能仍在使用连接池器端口');
    }
    
  } catch (error) {
    console.error('❌ 写入环境变量文件失败:', error.message);
    console.log('💡 请手动创建 .env.local 文件并设置以下内容:');
    console.log('DATABASE_URL="' + newDatabaseUrl + '"');
  }
  
  console.log('🎯 环境变量设置完成!');
}

// 运行设置
setEnvironmentVariables();
