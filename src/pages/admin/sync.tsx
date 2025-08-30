import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminSync() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [logs, setLogs] = useState<any[]>([]);
  

  useEffect(() => {
    const tick = async () => {
      const r = await fetch("/api/admin/sync-status");
      if (r.ok) setLogs(await r.json());
    };
    tick();
    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, []);
  const onSync = async () => {
    setLoading(true);
    setResult(null);
    const res = await fetch("/api/admin/sync-universities", { method: "POST" });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  };
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">大学数据同步</h1>
          <Link 
            href="/admin/dashboard"
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            ← 返回仪表板
          </Link>
        </div>
        <form method="post" action="/api/auth/logout">
          <button className="text-sm underline">注销</button>
        </form>
      </div>
      <p className="text-sm text-gray-700">需要 admin 角色。配置 `.env` 中的 `COMMON_APP_TOKEN` 或 `OPEN_DATA_KEY` 后点击同步。</p>
      <button disabled={loading} onClick={onSync} className="bg-black text-white rounded px-4 py-2 disabled:opacity-50">
        {loading ? "同步中..." : "开始同步"}
      </button>
      {result && (
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">{JSON.stringify(result, null, 2)}</pre>
      )}
      <div>
        <h2 className="font-semibold mt-4 mb-2">最近同步日志</h2>
        <ul className="text-sm space-y-2">
          {logs.map((l) => (
            <li key={l.id} className="border rounded p-2">
              <div>来源: {l.source} | 状态: {l.status}</div>
              <div>开始: {new Date(l.startedAt).toLocaleString()} {l.finishedAt ? `| 结束: ${new Date(l.finishedAt).toLocaleString()}` : ""}</div>
              {l.error && <div className="text-red-600">错误: {l.error}</div>}
              {l.stats && <pre className="bg-gray-50 p-2 mt-1 rounded">{JSON.stringify(l.stats, null, 2)}</pre>}
            </li>
          ))}
          {logs.length === 0 && <li className="text-gray-600">暂无日志</li>}
        </ul>
      </div>
    </div>
  );
}


