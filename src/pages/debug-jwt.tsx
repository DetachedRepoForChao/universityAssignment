import { useState } from "react";

export default function DebugJWT() {
  const [debugInfo, setDebugInfo] = useState<string>("");

  const testLogin = async () => {
    setDebugInfo("正在测试登录...");
    
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "alice@example.com",
          password: "student123",
          role: "student"
        }),
      });

      if (res.ok) {
        setDebugInfo("✅ 登录成功！");
        
        // 检查Cookie
        const cookies = document.cookie;
        const authToken = cookies
          .split(';')
          .find(cookie => cookie.trim().startsWith('auth_token='))
          ?.split('=')[1];

        if (authToken) {
          setDebugInfo(prev => prev + `\n✅ 找到auth_token cookie: ${authToken.substring(0, 30)}...`);
          
          // 测试访问dashboard
          setTimeout(async () => {
            try {
              const dashboardRes = await fetch("/dashboard");
              if (dashboardRes.ok) {
                setDebugInfo(prev => prev + "\n✅ 成功访问dashboard页面");
              } else {
                setDebugInfo(prev => prev + `\n❌ 访问dashboard失败: ${dashboardRes.status}`);
              }
            } catch (error) {
              setDebugInfo(prev => prev + `\n❌ 访问dashboard出错: ${error}`);
            }
          }, 1000);
        } else {
          setDebugInfo(prev => prev + "\n❌ 未找到auth_token cookie");
        }
      } else {
        const error = await res.json();
        setDebugInfo(`❌ 登录失败: ${error.error}`);
      }
    } catch (error) {
      setDebugInfo(`❌ 请求失败: ${error}`);
    }
  };

  const testDirectAccess = async () => {
    setDebugInfo("正在测试直接访问dashboard...");
    
    try {
      const res = await fetch("/dashboard");
      if (res.ok) {
        setDebugInfo("✅ 直接访问dashboard成功");
      } else {
        setDebugInfo(`❌ 直接访问dashboard失败: ${res.status}`);
      }
    } catch (error) {
      setDebugInfo(`❌ 直接访问出错: ${error}`);
    }
  };

  const clearDebug = () => {
    setDebugInfo("");
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">JWT 调试工具</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">测试操作</h2>
          <div className="space-x-4">
            <button
              onClick={testLogin}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              测试登录流程
            </button>
            
            <button
              onClick={testDirectAccess}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              测试直接访问
            </button>
            
            <button
              onClick={clearDebug}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              清除信息
            </button>
          </div>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">调试信息</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
            {debugInfo || "点击测试按钮开始调试..."}
          </pre>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">测试账号</h2>
          <p className="text-sm text-gray-600">
            <strong>学生账号:</strong> alice@example.com / student123<br/>
            <strong>家长账号:</strong> parent1@example.com / parent123<br/>
            <strong>管理员账号:</strong> admin@example.com / admin123
          </p>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">调试步骤</h2>
          <ol className="text-sm text-gray-600 list-decimal list-inside space-y-1">
            <li>点击"测试登录流程"按钮</li>
            <li>查看调试信息</li>
            <li>检查浏览器控制台日志</li>
            <li>在开发者工具中查看Cookie</li>
            <li>如果登录成功，测试访问dashboard</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

