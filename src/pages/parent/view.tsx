import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

type Student = { student_id: string; student_name: string; relationship: string | null };
type AppItem = { 
  id: string; 
  status: string | null; 
  university: { name: string };
  appNotes?: Array<{
    id: string;
    content: string;
    authorType: string;
    createdAt: string;
  }>;
};

export default function ParentView() {
  // 权限验证 - 只允许家长访问
  const { user, loading: authLoading, logout } = useAuth('parent');
  
  const [students, setStudents] = useState<Student[]>([]);
  const [apps, setApps] = useState<AppItem[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  


  useEffect(() => {
    fetch("/api/parent/students")
      .then(r => (r.ok ? r.json() : []))
      .then(setStudents)
      .catch(() => setStudents([]));
  }, []);

  useEffect(() => {
    if (!selected) return;
    const q = new URLSearchParams({ studentId: selected }).toString();
    setLoading(true);
    setError(null);
    fetch(`/api/parent/applications?${q}`)
      .then(async r => { if (!r.ok) throw new Error(await r.text()); return r.json(); })
      .then(setApps)
      .catch(e => { setError(e.message || "加载失败"); setApps([]); })
      .finally(() => setLoading(false));
  }, [selected]);

  // 权限验证加载中
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">验证权限中...</p>
        </div>
      </div>
    );
  }

  // 权限验证失败，显示错误信息
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">权限验证失败</p>
          <button 
            onClick={() => logout()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            重新登录
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">家长仪表板</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">关联学生</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">欢迎，{user.name}</span>
              <button 
                onClick={logout}
                className="text-sm underline hover:text-gray-700"
              >
                注销
              </button>
            </div>
          </div>
          <ul className="space-y-2">
            {students.map(s => (
              <li key={s.student_id}>
                <button className="underline" onClick={() => setSelected(s.student_id)}>
                  {s.student_name} ({s.relationship ?? "guardian"})
                </button>
              </li>
            ))}
            {students.length === 0 && <li className="text-gray-600">暂无关联学生</li>}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="font-semibold mb-2">申请列表</h2>
          {loading && <div className="text-gray-600">加载中...</div>}
          {error && <div className="text-red-600">{error}</div>}
          
          {/* 财务概览 */}
          {apps.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h3 className="font-medium text-blue-900 mb-3">财务概览</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    ${apps.reduce((total, app) => {
                      // 这里应该从大学数据获取实际学费，暂时使用估算
                      return total + (app.university?.name ? 50000 : 0);
                    }, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-blue-700">预估总费用</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    ${apps.reduce((total, app) => {
                      // 申请费用估算
                      return total + 75;
                    }, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-green-700">申请费用</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {apps.length}
                  </div>
                  <div className="text-sm text-purple-700">申请数量</div>
                </div>
              </div>
            </div>
          )}
          
          <div className="space-y-3">
            {apps.map(a => (
              <div key={a.id} className="border rounded p-3">
                <div className="font-medium">{a.university?.name ?? "Unknown"}</div>
                <div className="text-sm text-gray-600">状态: {a.status ?? "not_started"}</div>
                
                {/* 财务信息 */}
                <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-600">预估学费:</span>
                      <span className="ml-2 font-medium">$50,000/年</span>
                    </div>
                    <div>
                      <span className="text-gray-600">申请费:</span>
                      <span className="ml-2 font-medium">$75</span>
                    </div>
                  </div>
                </div>
                
                {/* 备注列表 */}
                {a.appNotes && a.appNotes.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">备注历史</h4>
                    {a.appNotes.map(noteItem => (
                      <div key={noteItem.id} className="bg-gray-50 rounded p-2">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            {editingNote === noteItem.id ? (
                              <div className="space-y-2">
                                <textarea
                                  value={editContent}
                                  onChange={(e) => setEditContent(e.target.value)}
                                  className="w-full px-2 py-1 border rounded text-sm"
                                  rows={2}
                                />
                                <div className="flex space-x-2">
                                  <button
                                    onClick={async () => {
                                      try {
                                        await fetch('/api/parent/notes', {
                                          method: 'PUT',
                                          headers: { 'Content-Type': 'application/json' },
                                          body: JSON.stringify({ noteId: noteItem.id, content: editContent })
                                        });
                                        setEditingNote(null);
                                        setEditContent("");
                                        // 重新加载申请数据
                                        const q = new URLSearchParams({ studentId: selected }).toString();
                                        const res = await fetch(`/api/parent/applications?${q}`);
                                        if (res.ok) {
                                          const updatedApps = await res.json();
                                          setApps(updatedApps);
                                        }
                                      } catch (err) {
                                        console.error('Failed to update note:', err);
                                      }
                                    }}
                                    className="text-xs bg-blue-600 text-white rounded px-2 py-1"
                                  >
                                    保存
                                  </button>
                                  <button
                                    onClick={() => {
                                      setEditingNote(null);
                                      setEditContent("");
                                    }}
                                    className="text-xs bg-gray-500 text-white rounded px-2 py-1"
                                  >
                                    取消
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <p className="text-sm text-gray-800">{noteItem.content}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {new Date(noteItem.createdAt).toLocaleString('zh-CN')}
                                </p>
                              </div>
                            )}
                          </div>
                          {noteItem.authorType === 'parent' && !editingNote && (
                            <div className="flex space-x-1 ml-2">
                              <button
                                onClick={() => {
                                  setEditingNote(noteItem.id);
                                  setEditContent(noteItem.content);
                                }}
                                className="text-xs bg-blue-500 text-white rounded px-2 py-1"
                              >
                                编辑
                              </button>
                              <button
                                onClick={async () => {
                                  if (confirm('确定要删除这条备注吗？')) {
                                    try {
                                      await fetch(`/api/parent/notes?noteId=${noteItem.id}`, {
                                        method: 'DELETE'
                                      });
                                      // 重新加载申请数据
                                      const q = new URLSearchParams({ studentId: selected }).toString();
                                      const res = await fetch(`/api/parent/applications?${q}`);
                                      if (res.ok) {
                                        const updatedApps = await res.json();
                                        setApps(updatedApps);
                                      }
                                    } catch (err) {
                                      console.error('Failed to delete note:', err);
                                    }
                                  }
                                }}
                                className="text-xs bg-red-500 text-white rounded px-2 py-1"
                              >
                                删除
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 添加新备注 */}
                <div className="mt-2 flex gap-2">
                  <input 
                    className="border rounded p-1 flex-1" 
                    placeholder="添加备注" 
                    value={note} 
                    onChange={e => setNote(e.target.value)} 
                  />
                  <button 
                    className="text-sm bg-black text-white rounded px-3" 
                    onClick={async () => {
                      if (!note.trim()) return;
                      try {
                        await fetch('/api/parent/notes', { 
                          method: 'POST', 
                          headers: { 'Content-Type': 'application/json' }, 
                          body: JSON.stringify({ applicationId: a.id, content: note }) 
                        });
                        setNote("");
                        // 重新加载申请数据
                        const q = new URLSearchParams({ studentId: selected }).toString();
                        const res = await fetch(`/api/parent/applications?${q}`);
                        if (res.ok) {
                          const updatedApps = await res.json();
                          setApps(updatedApps);
                        }
                      } catch (err) {
                        console.error('Failed to add note:', err);
                      }
                    }}
                  >
                    提交备注
                  </button>
                </div>
              </div>
            ))}
            {apps.length === 0 && <div className="text-gray-600">请选择学生以查看申请</div>}
          </div>
        </div>
      </div>
      
      {/* 沟通记录和观察 */}
      {selected && (
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">沟通记录与观察</h3>
            <p className="text-sm text-gray-600">记录与学生的沟通情况和重要观察</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 沟通记录 */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">沟通记录</h4>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">申请进度讨论</span>
                      <span className="text-xs text-gray-500">2024-01-15</span>
                    </div>
                    <p className="text-sm text-gray-600">与学生讨论了MIT和Stanford的申请进度，确认所有材料已提交。</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">财务规划</span>
                      <span className="text-xs text-gray-500">2024-01-10</span>
                    </div>
                    <p className="text-sm text-gray-600">讨论了学费预算和奖学金申请策略。</p>
                  </div>
                </div>
                
                <button className="mt-3 w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  添加沟通记录
                </button>
              </div>
              
              {/* 重要观察 */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">重要观察</h4>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">申请压力</span>
                      <span className="text-xs text-gray-500">2024-01-12</span>
                    </div>
                    <p className="text-sm text-gray-600">学生表现出一定的申请压力，需要关注心理健康。</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">时间管理</span>
                      <span className="text-xs text-gray-500">2024-01-08</span>
                    </div>
                    <p className="text-sm text-gray-600">学生时间管理能力有所提升，能够按时完成申请任务。</p>
                  </div>
                </div>
                
                <button className="mt-3 w-full px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700">
                  添加观察记录
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


