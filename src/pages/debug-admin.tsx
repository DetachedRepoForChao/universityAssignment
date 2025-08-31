import { useState, useEffect } from 'react';

export default function DebugAdmin() {
  const [debugInfo, setDebugInfo] = useState<string>('正在收集调试信息...');
  const [step, setStep] = useState(1);

  useEffect(() => {
    runDebugSequence();
  }, []);

  const runDebugSequence = async () => {
    setDebugInfo('开始调试管理员登录问题...\n');
    
    // 步骤1: 检查Cookie
    await step1_checkCookie();
    
    // 步骤2: 测试JWT token
    await step2_testJWT();
    
    // 步骤3: 测试用户信息API
    await step3_testUserAPI();
    
    // 步骤4: 测试管理员权限
    await step4_testAdminAccess();
    
    setDebugInfo(prev => prev + '\n✅ 调试完成！请查看上面的信息。');
  };

  const step1_checkCookie = async () => {
    setStep(1);
    setDebugInfo(prev => prev + '\n=== 步骤1: 检查Cookie ===\n');
    
    const cookies = document.cookie;
    setDebugInfo(prev => prev + `所有Cookie: ${cookies}\n`);
    
    const authToken = cookies
      .split(';')
      .find(cookie => cookie.trim().startsWith('auth_token='))
      ?.split('=')[1];
    
    if (authToken) {
      setDebugInfo(prev => prev + `✅ 找到auth_token: ${authToken.substring(0, 50)}...\n`);
      setDebugInfo(prev => prev + `Token长度: ${authToken.length}\n`);
    } else {
      setDebugInfo(prev => prev + `❌ 未找到auth_token cookie\n`);
    }
  };

  const step2_testJWT = async () => {
    setStep(2);
    setDebugInfo(prev => prev + '\n=== 步骤2: 测试JWT Token ===\n');
    
    try {
      const cookies = document.cookie;
      const authToken = cookies
        .split(';')
        .find(cookie => cookie.trim().startsWith('auth_token='))
        ?.split('=')[1];
      
      if (!authToken) {
        setDebugInfo(prev => prev + `❌ 无法测试JWT，没有token\n`);
        return;
      }
      
      // 测试JWT API
      const res = await fetch('/api/test-jwt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: authToken })
      });
      
      if (res.ok) {
        const data = await res.json();
        setDebugInfo(prev => prev + `✅ JWT测试成功: ${JSON.stringify(data, null, 2)}\n`);
      } else {
        const errorText = await res.text();
        setDebugInfo(prev => prev + `❌ JWT测试失败: ${res.status} - ${errorText}\n`);
      }
    } catch (error) {
      setDebugInfo(prev => prev + `❌ JWT测试出错: ${error}\n`);
    }
  };

  const step3_testUserAPI = async () => {
    setStep(3);
    setDebugInfo(prev => prev + '\n=== 步骤3: 测试用户信息API ===\n');
    
    try {
      const res = await fetch('/api/auth/me');
      setDebugInfo(prev => prev + `API响应状态: ${res.status}\n`);
      
      if (res.ok) {
        const userData = await res.json();
        setDebugInfo(prev => prev + `✅ 用户信息获取成功:\n${JSON.stringify(userData, null, 2)}\n`);
        
        // 检查角色
        if (userData.role === 'admin') {
          setDebugInfo(prev => prev + `✅ 用户角色正确: admin\n`);
        } else {
          setDebugInfo(prev => prev + `❌ 用户角色错误: ${userData.role} (应该是admin)\n`);
        }
      } else {
        const errorText = await res.text();
        setDebugInfo(prev => prev + `❌ 用户信息获取失败: ${errorText}\n`);
      }
    } catch (error) {
      setDebugInfo(prev => prev + `❌ 用户信息API测试出错: ${error}\n`);
    }
  };

  const step4_testAdminAccess = async () => {
    setStep(4);
    setDebugInfo(prev => prev + '\n=== 步骤4: 测试管理员权限 ===\n');
    
    try {
      const res = await fetch('/api/admin/stats');
      setDebugInfo(prev => prev + `管理员API响应状态: ${res.status}\n`);
      
      if (res.ok) {
        const data = await res.json();
        setDebugInfo(prev => prev + `✅ 管理员权限验证成功:\n${JSON.stringify(data, null, 2)}\n`);
      } else {
        const errorText = await res.text();
        setDebugInfo(prev => prev + `❌ 管理员权限验证失败: ${errorText}\n`);
      }
    } catch (error) {
      setDebugInfo(prev => prev + `❌ 管理员权限测试出错: ${error}\n`);
    }
  };

  const testLogin = async () => {
    setDebugInfo(prev => prev + '\n=== 测试管理员登录 ===\n');
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'admin@example.com',
          password: 'admin123',
          role: 'admin'
        }),
      });
      
      setDebugInfo(prev => prev + `登录API响应状态: ${res.status}\n`);
      
      if (res.ok) {
        setDebugInfo(prev => prev + `✅ 登录成功！\n`);
        // 重新运行调试序列
        setTimeout(() => {
          runDebugSequence();
        }, 1000);
      } else {
        const error = await res.json();
        setDebugInfo(prev => prev + `❌ 登录失败: ${JSON.stringify(error)}\n`);
      }
    } catch (error) {
      setDebugInfo(prev => prev + `❌ 登录测试出错: ${error}\n`);
    }
  };

  const clearDebug = () => {
    setDebugInfo('调试信息已清除');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">管理员登录问题调试</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左侧：调试信息 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">调试信息</h2>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">
                {debugInfo}
              </div>
            </div>
          </div>
          
          {/* 右侧：操作按钮 */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">操作</h3>
              <div className="space-y-3">
                <button
                  onClick={runDebugSequence}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  重新运行调试
                </button>
                
                <button
                  onClick={testLogin}
                  className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  测试管理员登录
                </button>
                
                <button
                  onClick={clearDebug}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  清除调试信息
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">进度</h3>
              <div className="space-y-2">
                <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
                  <span>{step >= 1 ? '✅' : '⏳'}</span>
                  <span>检查Cookie</span>
                </div>
                <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
                  <span>{step >= 2 ? '✅' : '⏳'}</span>
                  <span>测试JWT</span>
                </div>
                <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
                  <span>{step >= 3 ? '✅' : '⏳'}</span>
                  <span>测试用户API</span>
                </div>
                <div className={`flex items-center space-x-2 ${step >= 4 ? 'text-green-600' : 'text-gray-400'}`}>
                  <span>{step >= 4 ? '✅' : '⏳'}</span>
                  <span>测试管理员权限</span>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">测试账号</h3>
              <p className="text-sm text-yellow-700">
                管理员: <code>admin@example.com</code><br/>
                密码: <code>admin123</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


