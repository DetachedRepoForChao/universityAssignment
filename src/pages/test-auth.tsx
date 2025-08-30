import { useEffect, useState } from "react";

export default function TestAuth() {
  const [authStatus, setAuthStatus] = useState<string>("检查中...");
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const user = await res.json();
        setUserInfo(user);
        setAuthStatus("已认证");
      } else {
        setAuthStatus("未认证");
      }
    } catch (error) {
      setAuthStatus("检查失败: " + error);
    }
  };

  const testLogin = async () => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "student@example.com",
          password: "student123",
          role: "student"
        }),
      });
      
      if (res.ok) {
        setAuthStatus("登录成功，正在检查状态...");
        setTimeout(checkAuthStatus, 1000);
      } else {
        const error = await res.json();
        setAuthStatus("登录失败: " + error.error);
      }
    } catch (error) {
      setAuthStatus("登录请求失败: " + error);
    }
  };

  const testLogout = async () => {
    try {
      await fetch("/api/auth/logout");
      setAuthStatus("已登出");
      setUserInfo(null);
    } catch (error) {
      setAuthStatus("登出失败: " + error);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">认证状态测试</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">当前状态</h2>
          <p>认证状态: <span className="font-mono">{authStatus}</span></p>
          {userInfo && (
            <div className="mt-2">
              <p>用户信息:</p>
              <pre className="bg-gray-100 p-2 rounded text-sm">
                {JSON.stringify(userInfo, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div className="space-x-4">
          <button
            onClick={testLogin}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            测试登录
          </button>
          
          <button
            onClick={checkAuthStatus}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            检查状态
          </button>
          
          <button
            onClick={testLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            测试登出
          </button>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">Cookie 信息</h2>
          <p className="text-sm text-gray-600">
            在浏览器开发者工具的 Application/Storage 标签页中查看 Cookie
          </p>
        </div>
      </div>
    </div>
  );
}
