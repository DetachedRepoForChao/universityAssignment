import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Link from "next/link";

interface University {
  id: string;
  name: string;
  country: string;
  state: string;
  city: string;
  usNewsRanking: number;
  acceptanceRate: number;
  applicationSystem: string;
  isActive: boolean;
  lastSyncedAt: string;
  applications: any[];
}

export default function AdminUniversities() {
  const { user, loading: authLoading, logout } = useAuth('admin');
  
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const res = await fetch('/api/universities');
        if (res.ok) {
          const data = await res.json();
          setUniversities(data);
        } else {
          throw new Error('Failed to fetch universities');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载失败');
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
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

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = !countryFilter || uni.country === countryFilter;
    return matchesSearch && matchesCountry;
  });

  const countries = [...new Set(universities.map(uni => uni.country))].filter(Boolean).sort();

  const getRankingBadge = (ranking: number) => {
    if (ranking <= 10) return 'bg-red-100 text-red-800';
    if (ranking <= 25) return 'bg-orange-100 text-orange-800';
    if (ranking <= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getAcceptanceRateBadge = (rate: number) => {
    if (rate <= 10) return 'bg-red-100 text-red-800';
    if (rate <= 25) return 'bg-orange-100 text-orange-800';
    if (rate <= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
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
                <Link href="/admin/users" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  用户管理
                </Link>
                <Link href="/admin/universities" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">
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
            <h2 className="text-2xl font-bold text-gray-900">大学管理</h2>
            <div className="flex space-x-4">
              <Link
                href="/admin/sync"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
              >
                同步数据
              </Link>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="搜索大学名称或城市..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">所有国家</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
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
                {filteredUniversities.map((university) => (
                  <li key={university.id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                            <span className="text-lg font-bold text-blue-600">
                              {university.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-medium text-gray-900">{university.name}</h3>
                            {university.isActive ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                活跃
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                非活跃
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">
                            {university.city}, {university.state}, {university.country}
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            {university.usNewsRanking && (
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRankingBadge(university.usNewsRanking)}`}>
                                US News: #{university.usNewsRanking}
                              </span>
                            )}
                            {university.acceptanceRate && (
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getAcceptanceRateBadge(university.acceptanceRate)}`}>
                                录取率: {university.acceptanceRate}%
                              </span>
                            )}
                            {university.applicationSystem && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {university.applicationSystem}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">
                          申请数量: {university.applications?.length || 0}
                        </p>
                        {university.lastSyncedAt && (
                          <p className="text-xs text-gray-400">
                            最后同步: {new Date(university.lastSyncedAt).toLocaleDateString('zh-CN')}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              {filteredUniversities.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">没有找到符合条件的大学</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
