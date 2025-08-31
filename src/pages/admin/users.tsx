import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  // 学生特有字段
  graduationYear?: number;
  gpa?: number;
  // 家长特有字段
  phone?: string;
}

export default function AdminUsers() {
  const { user, loading: authLoading, logout } = useAuth('admin');
  
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'students' | 'parents'>('all');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin/users');
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        } else {
          throw new Error('Failed to fetch users');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载失败');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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

  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    return user.role === filter;
  });

  const getRoleBadge = (role: string) => {
    const roleConfig = {
      student: { label: '学生', color: 'bg-blue-100 text-blue-800' },
      parent: { label: '家长', color: 'bg-green-100 text-green-800' },
      admin: { label: '管理员', color: 'bg-purple-100 text-purple-800' }
    };
    
    const config = roleConfig[role as keyof typeof roleConfig] || { label: role, color: 'bg-gray-100 text-gray-800' };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold text-gray-900">大学申请追踪系统 - 管理后台</h1>
              <nav className="flex space-x-6">
                <Link href="/admin/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  仪表板
                </Link>
                <Link href="/admin/users" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">
                  用户管理
                </Link>
                <Link href="/admin/universities" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  大学管理
                </Link>
                <Link href="/admin/sync" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  数据同步
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">欢迎，{user.name}</span>
              <button
                onClick={logout}
                className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
              >
                退出登录
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">用户管理</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                全部用户
              </button>
              <button
                onClick={() => setFilter('students')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  filter === 'students' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                学生
              </button>
              <button
                onClick={() => setFilter('parents')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  filter === 'parents' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                家长
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">加载中...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                重试
              </button>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <li key={user.id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-700">
                              {user.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-sm font-medium text-gray-900">{user.name}</h3>
                            {getRoleBadge(user.role)}
                          </div>
                          <p className="text-sm text-gray-500">{user.email}</p>
                          {user.role === 'student' && user.graduationYear && (
                            <p className="text-xs text-gray-400">毕业年份: {user.graduationYear}</p>
                          )}
                          {user.role === 'parent' && user.phone && (
                            <p className="text-xs text-gray-400">电话: {user.phone}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">
                          创建时间: {new Date(user.createdAt).toLocaleDateString('zh-CN')}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              {filteredUsers.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">没有找到符合条件的用户</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


