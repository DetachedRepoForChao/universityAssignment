import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

type Requirement = { status: string | null; deadline?: string | null };
type AppItem = {
  id: string;
  status: string | null;
  university: { name: string };
  requirements?: Requirement[];
  deadline?: string | null;
  lastSyncedAt?: string | null;
};

export default function Dashboard() {
  // 权限验证 - 只允许学生访问
  const { user, loading: authLoading, logout } = useAuth('student');
  
  const [apps, setApps] = useState<AppItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<{ submitted: number; pending: number; withDecision: number }>({ submitted: 0, pending: 0, withDecision: 0 });
  const [urgent, setUrgent] = useState<number>(0);
  


  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/student/applications")
      .then(async r => {
        if (!r.ok) {
          const t = await r.text();
          throw new Error(t || "Failed to load");
        }
        return r.json();
      })
      .then(setApps)
      .catch((e) => { setError(e.message || "加载失败"); setApps([]); })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const submitted = apps.filter(a => a.status?.toLowerCase() === "submitted").length;
    const withDecision = apps.filter(a => ["accepted","rejected","waitlisted"].includes((a.status ?? "").toLowerCase())).length;
    const pending = apps.length - submitted - withDecision;
    setStats({ submitted, pending, withDecision });
    
    // urgent: any requirement due within 7 days
    const now = Date.now();
    const in7 = 7 * 24 * 60 * 60 * 1000;
    const urgentCount = apps.reduce((acc, a) => {
      const reqs = a.requirements || [];
      const hasUrgent = reqs.some(r => {
        if (!r.deadline) return false;
        const d = new Date(r.deadline).getTime();
        return d - now > 0 && d - now < in7 && (r.status ?? "").toLowerCase() !== "completed";
      });
      return acc + (hasUrgent ? 1 : 0);
    }, 0);
    setUrgent(urgentCount);
  }, [apps]);

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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold text-gray-900">大学申请追踪系统</h1>
              <nav className="flex space-x-6">
                <Link href="/dashboard" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">
                  仪表板
                </Link>
                <Link href="/university/search" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  大学搜索
                </Link>
                <Link href="/profile" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  个人资料
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">欢迎，{user.name}</span>
              <button 
                onClick={logout}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                注销
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">申请追踪仪表板</h2>
          <p className="text-gray-600">自动同步您的大学申请状态和进度</p>
        </div>

        {/* Sync Status Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                自动同步说明
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                系统会自动从Common App、大学官网等渠道同步您的申请状态，无需手动更新。数据每4小时自动刷新一次。
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <div className="text-sm font-medium text-gray-500">已提交</div>
            <div className="text-2xl font-bold text-blue-600">{stats.submitted}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
            <div className="text-sm font-medium text-gray-500">待处理</div>
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <div className="text-sm font-medium text-gray-500">已有决定</div>
            <div className="text-2xl font-bold text-green-600">{stats.withDecision}</div>
          </div>
        </div>

        {/* Urgent Alerts */}
        {urgent > 0 && (
          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  紧急提醒
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  有 <span className="font-semibold">{urgent}</span> 个申请包含 7 天内到期的任务，请及时处理
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Deadline Calendar */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">截止日期日历</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
              {['日', '一', '二', '三', '四', '五', '六'].map(day => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
              
              {(() => {
                const today = new Date();
                const currentMonth = today.getMonth();
                const currentYear = today.getFullYear();
                const firstDay = new Date(currentYear, currentMonth, 1);
                const lastDay = new Date(currentYear, currentMonth + 1, 0);
                const startDate = new Date(firstDay);
                startDate.setDate(startDate.getDate() - firstDay.getDay());
                
                const calendarDays = [];
                const currentDate = new Date(startDate);
                
                while (currentDate <= lastDay || calendarDays.length < 42) {
                  const isCurrentMonth = currentDate.getMonth() === currentMonth;
                  const isToday = currentDate.toDateString() === today.toDateString();
                  
                  // 检查是否有截止日期
                  const hasDeadline = apps.some(app => {
                    if (!app.deadline) return false;
                    const deadline = new Date(app.deadline);
                    return deadline.toDateString() === currentDate.toDateString();
                  });
                  
                  // 检查是否紧急（7天内）
                  const isUrgent = apps.some(app => {
                    if (!app.deadline) return false;
                    const deadline = new Date(app.deadline);
                    const diffTime = deadline.getTime() - today.getTime();
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    return diffDays >= 0 && diffDays <= 7;
                  });
                  
                  calendarDays.push(
                    <div
                      key={currentDate.toISOString()}
                      className={`
                        p-2 text-center text-sm border border-gray-100 min-h-[60px] flex flex-col items-center justify-center
                        ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
                        ${isToday ? 'bg-blue-50 border-blue-200' : ''}
                        ${hasDeadline ? 'bg-yellow-50 border-yellow-200' : ''}
                        ${isUrgent ? 'bg-red-50 border-red-200' : ''}
                      `}
                    >
                      <span className={`${isToday ? 'font-bold' : ''}`}>
                        {currentDate.getDate()}
                      </span>
                      {hasDeadline && (
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1"></div>
                      )}
                      {isUrgent && (
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-1"></div>
                      )}
                    </div>
                  );
                  
                  currentDate.setDate(currentDate.getDate() + 1);
                }
                
                return calendarDays;
              })()}
            </div>
            
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-50 border border-blue-200 rounded"></div>
                <span>今天</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>有截止日期</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>紧急（7天内）</span>
              </div>
            </div>
          </div>
        </div>

        {/* Applications Overview with Progress Bars */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">申请概览</h3>
          </div>
          
          {loading && (
            <div className="px-6 py-8 text-center">
              <div className="text-gray-600">加载中...</div>
            </div>
          )}
          
          {error && (
            <div className="px-6 py-8 text-center">
              <div className="text-red-600">{error}</div>
            </div>
          )}
          
          {!loading && !error && apps.length === 0 && (
            <div className="px-6 py-8 text-center">
              <div className="text-gray-600 mb-4">暂无申请记录</div>
              <div className="text-sm text-gray-500">
                系统正在同步您的申请数据，请稍后再来查看
              </div>
            </div>
          )}
          
          {!loading && !error && apps.length > 0 && (
            <div className="p-6">
              {/* Progress Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{stats.pending}</div>
                  <div className="text-sm text-gray-600">待处理</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${apps.length > 0 ? (stats.pending / apps.length) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">{stats.submitted}</div>
                  <div className="text-sm text-gray-600">已提交</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-yellow-600 h-2 rounded-full" 
                      style={{ width: `${apps.length > 0 ? (stats.submitted / apps.length) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.withDecision}</div>
                  <div className="text-sm text-gray-600">已有决定</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${apps.length > 0 ? (stats.withDecision / apps.length) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{apps.length}</div>
                  <div className="text-sm text-gray-600">总申请数</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              {/* Applications List with Enhanced Status */}
              <div className="space-y-4">
                {apps.map(app => {
                  const getStatusColor = (status: string | null) => {
                    switch (status?.toLowerCase()) {
                      case 'submitted': return 'bg-blue-100 text-blue-800 border-blue-200';
                      case 'in_progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
                      case 'accepted': return 'bg-green-100 text-green-800 border-green-200';
                      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
                      case 'waitlisted': return 'bg-purple-100 text-purple-800 border-purple-200';
                      case 'not_started': return 'bg-gray-100 text-gray-800 border-gray-200';
                      default: return 'bg-gray-100 text-gray-800 border-gray-200';
                    }
                  };

                  const getStatusText = (status: string | null) => {
                    switch (status?.toLowerCase()) {
                      case 'submitted': return '已提交';
                      case 'in_progress': return '进行中';
                      case 'accepted': return '已录取';
                      case 'rejected': return '已拒绝';
                      case 'waitlisted': return '候补';
                      case 'not_started': return '未开始';
                      default: return status || '未开始';
                    }
                  };

                  const getProgressPercentage = (status: string | null) => {
                    switch (status?.toLowerCase()) {
                      case 'submitted': return 60;
                      case 'in_progress': return 30;
                      case 'accepted': case 'rejected': case 'waitlisted': return 100;
                      case 'not_started': return 10;
                      default: return 10;
                    }
                  };

                  return (
                    <div key={app.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-lg font-medium text-gray-900">
                              {app.university?.name ?? "Unknown"}
                            </h4>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(app.status)}`}>
                              {getStatusText(app.status)}
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                            <div 
                              className={`h-3 rounded-full transition-all duration-300 ${
                                app.status === 'accepted' ? 'bg-green-500' :
                                app.status === 'rejected' ? 'bg-red-500' :
                                app.status === 'waitlisted' ? 'bg-purple-500' :
                                app.status === 'submitted' ? 'bg-blue-500' :
                                app.status === 'in_progress' ? 'bg-yellow-500' :
                                app.status === 'not_started' ? 'bg-gray-400' :
                                'bg-gray-400'
                              }`}
                              style={{ width: `${getProgressPercentage(app.status)}%` }}
                            ></div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            {app.deadline && (
                              <div>
                                <span className="text-gray-500">截止日期:</span>
                                <span className="ml-2 font-medium">
                                  {new Date(app.deadline).toLocaleDateString('zh-CN')}
                                </span>
                              </div>
                            )}
                            {app.lastSyncedAt && (
                              <div>
                                <span className="text-gray-500">最后同步:</span>
                                <span className="ml-2 font-medium">
                                  {new Date(app.lastSyncedAt).toLocaleString('zh-CN')}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Link 
                            href={`/application/${app.id}`}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 border border-blue-300 rounded hover:bg-blue-50"
                          >
                            查看详情
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* University Comparison Tool */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">大学比较工具</h3>
            <p className="text-sm text-gray-600">选择最多3所大学进行并排比较</p>
          </div>
          <div className="p-6">
            {apps.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[0, 1, 2].map(index => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">大学 {index + 1}</h4>
                      <select 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        onChange={(e) => {
                          // 这里可以添加比较逻辑
                        }}
                      >
                        <option value="">选择大学</option>
                        {apps.map(app => (
                          <option key={app.id} value={app.id}>
                            {app.university?.name}
                          </option>
                        ))}
                      </select>
                      
                      <div className="mt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">状态:</span>
                          <span className="font-medium">-</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">截止日期:</span>
                          <span className="font-medium">-</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">排名:</span>
                          <span className="font-medium">-</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">录取率:</span>
                          <span className="font-medium">-</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    开始比较
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                暂无申请记录，无法进行比较
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
