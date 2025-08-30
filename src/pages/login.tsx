import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState<string | null>(null);

  // 从URL参数获取错误信息和重定向路径
  const urlError = router.query.error as string;
  const nextPath = router.query.next as string;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });
    if (!res.ok) {
      const msg = await res.json().catch(() => ({ error: "Login failed" }));
      setError(msg.error ?? "Login failed");
      return;
    }
    let defaultPath = "/dashboard";
    if (role === "parent") {
      defaultPath = "/parent/view";
    } else if (role === "admin") {
      defaultPath = "/admin/dashboard";
    }
    const next = nextPath || defaultPath;
    router.push(next);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4 border rounded p-6">
        <h1 className="text-xl font-semibold">登录</h1>
        {(error || urlError) && (
          <div className="text-red-600 text-sm p-3 bg-red-50 border border-red-200 rounded">
            {error || urlError}
          </div>
        )}
        <div>
          <label className="block text-sm mb-1">角色</label>
          <select className="border rounded w-full p-2" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">学生</option>
            <option value="parent">家长</option>
            <option value="admin">管理员</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">邮箱</label>
          <input className="border rounded w-full p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">密码</label>
          <input type="password" className="border rounded w-full p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="w-full bg-black text-white rounded p-2" type="submit">登录</button>
      </form>
    </div>
  );
}



