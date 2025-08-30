import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Link from "next/link";

interface StudentProfile {
  id: string;
  name: string;
  email: string;
  graduationYear: number;
  gpa?: number;
  satScore?: number;
  actScore?: number;
  targetCountries?: string[];
  intendedMajors?: string[];
}

export default function Profile() {
  const { user, loading: authLoading, logout } = useAuth('student');
  
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // 编辑模式状态
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Partial<StudentProfile>>({});
  
  // 密码修改状态
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch('/api/student/profile');
      if (res.ok) {
        const data = await res.json();
        setProfile(data);
        setEditData(data);
      } else {
        throw new Error('Failed to fetch profile');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '加载失败');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    setSuccess(null);
    
    try {
      const res = await fetch('/api/student/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData)
      });
      
      if (res.ok) {
        setSuccess('个人资料更新成功！');
        setIsEditing(false);
        await fetchProfile(); // 重新获取最新数据
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || '更新失败');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '更新失败');
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('新密码与确认密码不匹配');
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      setError('新密码长度至少6位');
      return;
    }

    setSaving(true);
    setError(null);
    setSuccess(null);
    
    try {
      const res = await fetch('/api/student/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        })
      });
      
      if (res.ok) {
        setSuccess('密码修改成功！');
        setShowPasswordForm(false);
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || '密码修改失败');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '密码修改失败');
    } finally {
      setSaving(false);
    }
  };

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">无法加载个人资料</p>
          <button 
            onClick={fetchProfile} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            重试
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
                <Link href="/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  仪表板
                </Link>
                <Link href="/university/search" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  大学搜索
                </Link>
                <Link href="/profile" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">个人资料管理</h2>
          <p className="text-gray-600">管理您的个人信息和账户设置</p>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">{success}</p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Profile Information */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">基本信息</h3>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                >
                  编辑资料
                </button>
              )}
            </div>
          </div>
          
          <div className="px-6 py-4">
            {isEditing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                    <input
                      type="text"
                      value={editData.name || ''}
                      onChange={(e) => setEditData({...editData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                    <input
                      type="email"
                      value={editData.email || ''}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">邮箱地址不可修改</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">毕业年份</label>
                    <input
                      type="number"
                      value={editData.graduationYear || ''}
                      onChange={(e) => setEditData({...editData, graduationYear: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="4.0"
                      value={editData.gpa || ''}
                      onChange={(e) => setEditData({...editData, gpa: parseFloat(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">SAT分数</label>
                    <input
                      type="number"
                      min="400"
                      max="1600"
                      value={editData.satScore || ''}
                      onChange={(e) => setEditData({...editData, satScore: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ACT分数</label>
                    <input
                      type="number"
                      min="1"
                      max="36"
                      value={editData.actScore || ''}
                      onChange={(e) => setEditData({...editData, actScore: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">目标国家</label>
                  <input
                    type="text"
                    value={editData.targetCountries?.join(', ') || ''}
                    onChange={(e) => setEditData({...editData, targetCountries: e.target.value.split(',').map(s => s.trim()).filter(Boolean)})}
                    placeholder="例如: USA, Canada, UK"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">用逗号分隔多个国家</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">意向专业</label>
                  <input
                    type="text"
                    value={editData.intendedMajors?.join(', ') || ''}
                    onChange={(e) => setEditData({...editData, intendedMajors: e.target.value.split(',').map(s => s.trim()).filter(Boolean)})}
                    placeholder="例如: Computer Science, Mathematics"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">用逗号分隔多个专业</p>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {saving ? '保存中...' : '保存'}
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setEditData(profile);
                      setError(null);
                    }}
                    className="px-4 py-2 bg-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-400"
                  >
                    取消
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">姓名</h4>
                  <p className="text-gray-900">{profile.name}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">邮箱</h4>
                  <p className="text-gray-900">{profile.email}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">毕业年份</h4>
                  <p className="text-gray-900">{profile.graduationYear}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">GPA</h4>
                  <p className="text-gray-900">{profile.gpa || '未设置'}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">SAT分数</h4>
                  <p className="text-gray-900">{profile.satScore || '未设置'}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">ACT分数</h4>
                  <p className="text-gray-900">{profile.actScore || '未设置'}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">目标国家</h4>
                  <p className="text-gray-900">
                    {profile.targetCountries && profile.targetCountries.length > 0 
                      ? profile.targetCountries.join(', ') 
                      : '未设置'}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">意向专业</h4>
                  <p className="text-gray-900">
                    {profile.intendedMajors && profile.intendedMajors.length > 0 
                      ? profile.intendedMajors.join(', ') 
                      : '未设置'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Password Change */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">账户安全</h3>
              <button
                onClick={() => setShowPasswordForm(!showPasswordForm)}
                className="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700"
              >
                {showPasswordForm ? '取消' : '修改密码'}
              </button>
            </div>
          </div>
          
          {showPasswordForm && (
            <div className="px-6 py-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">当前密码</label>
                  <input
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">新密码</label>
                  <input
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">确认新密码</label>
                  <input
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    onClick={handlePasswordChange}
                    disabled={saving}
                    className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 disabled:opacity-50"
                  >
                    {saving ? '修改中...' : '修改密码'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
