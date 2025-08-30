import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminTest() {
  const [authStatus, setAuthStatus] = useState<string>('检查中...');
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      setLoading(true);
      setAuthStatus('正在检查认证状态...');
      
      // 检查Cookie
      const cookies = document.cookie;
      const authToken = cookies
        .split(';')
        .find(cookie => cookie.trim().startsWith('auth_token='))
        ?.split('=')[1];
      
      if (!authToken) {
        setAuthStatus('❌ 未找到auth_token cookie');
        setLoading(false);
        return;
      }
      
      setAuthStatus(`✅ 找到auth_token: ${authToken.substring(0, 30)}...`);
      
      // 调用/api/auth/me
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const userData = await res.json();
        setUserInfo(userData);
        setAuthStatus(`✅ 认证成功！用户: ${userData.name} (${userData.role})`);
      } else {
        const errorText = await res.text();
        setAuthStatus(`❌ /api/auth/me 失败: ${res.status} - ${errorText}`);
      }
    } catch (error) {
      setAuthStatus(`❌ 检查认证状态时出错: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const testAdminAccess = async () => {
    try {
      setAuthStatus('正在测试管理员访问权限...');
      
      const res = await fetch('/api/admin/stats');
      if (res.ok) {
        const data = await res.json();
        setAuthStatus(`✅ 管理员API访问成功！统计信息: ${JSON.stringify(data)}`);
      } else {
        const errorText = await res.text();
        setAuthStatus(`❌ 管理员API访问失败: ${res.status} - ${errorText}`);
      }
    } catch (error) {
      setAuthStatus(`❌ 测试管理员访问时出错: ${error}`);
    }
  };

  const goToAdminDashboard = () => {
    router.push('/admin/dashboard');
  };

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">管理员权限测试页面</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">认证状态</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded">
              <div className="font-medium">状态:</div>
              <div className="text-sm">{authStatus}</div>
            </div>
            
            {userInfo && (
              <div className="p-4 bg-blue-50 rounded">
                <div className="font-medium">用户信息:</div>
                <pre className="text-sm mt-2 bg-white p-2 rounded">
                  {JSON.stringify(userInfo, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">测试操作</h2>
          <div className="space-x-4">
            <button
              onClick={checkAuthStatus}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? '检查中...' : '重新检查认证状态'}
            </button>
            
            <button
              onClick={testAdminAccess}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              测试管理员API访问
            </button>
            
            <button
              onClick={goToAdminDashboard}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              前往管理员仪表板
            </button>
            
            <button
              onClick={goToLogin}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              前往登录页面
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">测试说明</h2>
          <div className="text-sm text-gray-600 space-y-2">
            <p>1. <strong>检查认证状态</strong>: 验证Cookie和用户信息</p>
            <p>2. <strong>测试管理员API访问</strong>: 验证管理员权限</p>
            <p>3. <strong>前往管理员仪表板</strong>: 测试页面访问权限</p>
            <p>4. <strong>前往登录页面</strong>: 重新登录</p>
          </div>
          
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <h3 className="font-medium text-yellow-800 mb-2">测试账号</h3>
            <p className="text-sm text-yellow-700">
              管理员: <code>admin@example.com</code> / <code>admin123</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
