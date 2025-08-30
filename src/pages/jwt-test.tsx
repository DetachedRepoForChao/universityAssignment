import { useState } from "react";

export default function JwtTest() {
  const [testResult, setTestResult] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const testJWT = async () => {
    try {
      // 测试登录获取token
      const loginRes = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "alice@example.com",
          password: "student123",
          role: "student"
        }),
      });

      if (!loginRes.ok) {
        const error = await loginRes.json();
        setTestResult(`登录失败: ${error.error}`);
        return;
      }

      // 获取Cookie中的token
      const cookies = document.cookie;
      const authToken = cookies
        .split(';')
        .find(cookie => cookie.trim().startsWith('auth_token='))
        ?.split('=')[1];

      if (!authToken) {
        setTestResult("未找到auth_token cookie");
        return;
      }

      setToken(authToken);
      setTestResult(`登录成功！Token: ${authToken.substring(0, 50)}...`);

      // 测试访问受保护的路由
      setTimeout(async () => {
        try {
          const dashboardRes = await fetch("/dashboard");
          if (dashboardRes.ok) {
            setTestResult(prev => prev + "\n✅ 成功访问dashboard页面");
          } else {
            setTestResult(prev => prev + `\n❌ 访问dashboard失败: ${dashboardRes.status}`);
          }
        } catch (error) {
          setTestResult(prev => prev + `\n❌ 访问dashboard出错: ${error}`);
        }
      }, 1000);

    } catch (error) {
      setTestResult(`测试失败: ${error}`);
    }
  };

  const clearToken = async () => {
    try {
      await fetch("/api/auth/logout");
      setToken("");
      setTestResult("已清除token");
    } catch (error) {
      setTestResult(`清除token失败: ${error}`);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">JWT 测试工具</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">JWT 测试</h2>
          <div className="space-x-4">
            <button
              onClick={testJWT}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              测试JWT流程
            </button>
            
            <button
              onClick={clearToken}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              清除Token
            </button>
          </div>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">测试结果</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
            {testResult || "点击测试按钮开始测试..."}
          </pre>
        </div>

        {token && (
          <div className="p-4 border rounded">
            <h2 className="font-semibold mb-2">当前Token</h2>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Token长度: {token.length}</p>
              <p className="text-sm text-gray-600">Token预览:</p>
              <pre className="bg-gray-100 p-2 rounded text-xs break-all">
                {token}
              </pre>
            </div>
          </div>
        )}

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">调试信息</h2>
          <p className="text-sm text-gray-600">
            1. 点击"测试JWT流程"按钮<br/>
            2. 查看控制台日志<br/>
            3. 检查Cookie设置<br/>
            4. 验证中间件行为
          </p>
        </div>
      </div>
    </div>
  );
}
