import { useState } from "react";

export default function SimpleJwtTest() {
  const [testResult, setTestResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const testJWT = async () => {
    setIsLoading(true);
    setTestResult("正在测试JWT...");
    
    try {
      const res = await fetch("/api/test-jwt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      
      if (res.ok && data.success) {
        setTestResult(`✅ JWT测试成功！
        
生成的Token: ${data.token.substring(0, 50)}...
Token长度: ${data.tokenLength}
解码结果: ${JSON.stringify(data.decoded, null, 2)}`);
      } else {
        setTestResult(`❌ JWT测试失败: ${data.message}
        
Token: ${data.token?.substring(0, 50) || 'N/A'}...
Token长度: ${data.tokenLength || 'N/A'}`);
      }
    } catch (error) {
      setTestResult(`❌ 请求失败: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testLogin = async () => {
    setIsLoading(true);
    setTestResult("正在测试登录...");
    
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
        setTestResult("✅ 登录成功！");
        
        // 检查Cookie
        const cookies = document.cookie;
        const authToken = cookies
          .split(';')
          .find(cookie => cookie.trim().startsWith('auth_token='))
          ?.split('=')[1];

        if (authToken) {
          setTestResult(prev => prev + `\n✅ 找到auth_token cookie: ${authToken.substring(0, 30)}...`);
        } else {
          setTestResult(prev => prev + "\n❌ 未找到auth_token cookie");
        }
      } else {
        const error = await res.json();
        setTestResult(`❌ 登录失败: ${error.error}`);
      }
    } catch (error) {
      setTestResult(`❌ 登录请求失败: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const clearResult = () => {
    setTestResult("");
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">简化JWT测试</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">测试操作</h2>
          <div className="space-x-4">
            <button
              onClick={testJWT}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? "测试中..." : "测试JWT生成/验证"}
            </button>
            
            <button
              onClick={testLogin}
              disabled={isLoading}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
              {isLoading ? "测试中..." : "测试登录"}
            </button>
            
            <button
              onClick={clearResult}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              清除结果
            </button>
          </div>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">测试结果</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
            {testResult || "点击测试按钮开始测试..."}
          </pre>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">测试说明</h2>
          <p className="text-sm text-gray-600">
            1. <strong>测试JWT生成/验证</strong>: 直接测试JWT的生成和验证逻辑<br/>
            2. <strong>测试登录</strong>: 测试完整的登录流程<br/>
            3. 查看控制台日志了解详细过程
          </p>
        </div>
      </div>
    </div>
  );
}
