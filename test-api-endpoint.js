require('dotenv').config({ path: '.env.local' });

async function testAPIEndpoint() {
  console.log('🔍 测试API端点...');
  
  try {
    // 测试认证端点
    console.log('📡 测试 /api/auth/me...');
    const meResponse = await fetch('http://localhost:3000/api/auth/me');
    console.log('状态码:', meResponse.status);
    
    if (meResponse.status === 401) {
      console.log('✅ 认证端点正常工作 (需要登录)');
    } else {
      console.log('⚠️ 认证端点状态异常:', meResponse.status);
    }
    
    // 测试学生申请端点
    console.log('📡 测试 /api/student/applications...');
    const appsResponse = await fetch('http://localhost:3000/api/student/applications');
    console.log('状态码:', appsResponse.status);
    
    if (appsResponse.status === 401 || appsResponse.status === 403) {
      console.log('✅ 学生申请端点正常工作 (需要认证)');
    } else if (appsResponse.status === 500) {
      console.log('❌ 学生申请端点有错误 (可能是数据库问题)');
    } else {
      console.log('⚠️ 学生申请端点状态异常:', appsResponse.status);
    }
    
  } catch (error) {
    console.error('❌ API测试失败:', error.message);
    console.log('💡 请确保开发服务器正在运行 (npm run dev)');
  }
  
  console.log('🎯 API端点测试完成!');
}

// 运行测试
testAPIEndpoint()
  .catch(console.error)
  .finally(() => process.exit(0));
