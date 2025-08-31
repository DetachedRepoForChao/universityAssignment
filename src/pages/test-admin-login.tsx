import { useState } from 'react';
import { useRouter } from 'next/router';

export default function TestAdminLogin() {
  const [status, setStatus] = useState<string>('准备测试');
  const [userInfo, setUserInfo] = useState<any>(null);
  const router = useRouter();

  const testAdminLogin = async () => {
    setStatus('正在测试管理员登录...');
    
    try {
      // 1. 登录
      const loginRes = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'admin@example.com',
          password: 'admin123',
          role: 'admin'
        }),
      });
      
      if (!loginRes.ok) {
        const error = await loginRes.json();
        setStatus(`❌ 登录失败: ${JSON.stringify(error)}`);
        return;
      }
      
      setStatus('✅ 登录成功！正在获取用户信息...');
      
      // 2. 获取用户信息
      const meRes = await fetch('/api/auth/me');
      if (meRes.ok) {
        const userData = await meRes.json();
        setUserInfo(userData);
        setStatus(`✅ 用户信息获取成功！角色: ${userData.role}`);
      } else {
        const errorText = await meRes.text();
        setStatus(`❌ 获取用户信息失败: ${errorText}`);
      }
    } catch (error) {
      setStatus(`❌ 测试出错: ${error}`);
    }
  };

  const goToAdminDashboard = () => {
    router.push('/admin/dashboard');
  };

  const goToDebugPage = () => {
    router.push('/debug-admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">管理员登录测试</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">测试状态</h2>
          <div className="p-4 bg-gray-100 rounded mb-4">
            <div className="font-medium">状态:</div>
            <div className="text-sm">{status}</div>
          </div>
          
          {userInfo && (
            <div className="p-4 bg-blue-50 rounded mb-4">
              <div className="font-medium">用户信息:</div>
              <pre className="text-sm mt-2 bg-white p-2 rounded overflow-auto">
                {JSON.stringify(userInfo, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">操作</h2>
          <div className="space-x-4">
            <button
              onClick={testAdminLogin}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              测试管理员登录
            </button>
            
            <button
              onClick={goToAdminDashboard}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              前往管理员仪表板
            </button>
            
            <button
              onClick={goToDebugPage}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              前往调试页面
            </button>
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
  );
}

