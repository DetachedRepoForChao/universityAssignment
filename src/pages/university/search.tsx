import { useEffect, useState } from "react";
import Link from "next/link";
import UniversityDetailModal, { UniversityDetail } from "../../components/UniversityDetailModal";

type Uni = UniversityDetail;

export default function UniversitySearch() {
  const [q, setQ] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [minRank, setMinRank] = useState("");
  const [maxRank, setMaxRank] = useState("");
  const [minAcceptance, setMinAcceptance] = useState("");
  const [maxAcceptance, setMaxAcceptance] = useState("");
  const [items, setItems] = useState<Uni[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedUniversity, setSelectedUniversity] = useState<Uni | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  


  const search = async () => {
    setLoading(true);
    setError(null);
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (country) params.set("country", country);
    if (state) params.set("state", state);
    if (city) params.set("city", city);
    if (minRank) params.set("minRank", minRank);
    if (maxRank) params.set("maxRank", maxRank);
    if (minAcceptance) params.set("minAcceptance", minAcceptance);
    if (maxAcceptance) params.set("maxAcceptance", maxAcceptance);
    try {
      const res = await fetch(`/api/universities/search?${params.toString()}`);
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setItems(data);
    } catch (e: any) {
      setError(e.message || '加载失败');
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const handleUniversityClick = (university: Uni) => {
    setSelectedUniversity(university);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUniversity(null);
  };

  useEffect(() => { search(); }, []);

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
                <Link href="/university/search" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">
                  大学搜索
                </Link>
              </nav>
            </div>
            <form method="post" action="/api/auth/logout">
              <button className="text-sm text-gray-500 hover:text-gray-700 underline">
                注销
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">大学搜索</h2>
          <p className="text-gray-600">搜索和筛选大学信息，了解各大学的录取要求和特点</p>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <input 
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="关键词搜索" 
              value={q} 
              onChange={e => setQ(e.target.value)} 
            />
            <input 
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="国家" 
              value={country} 
              onChange={e => setCountry(e.target.value)} 
            />
            <input 
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="州/省" 
              value={state} 
              onChange={e => setState(e.target.value)} 
            />
            <input 
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="城市" 
              value={city} 
              onChange={e => setCity(e.target.value)} 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <input 
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="最小排名" 
              value={minRank} 
              onChange={e => setMinRank(e.target.value)} 
            />
            <input 
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="最大排名" 
              value={maxRank} 
              onChange={e => setMaxRank(e.target.value)} 
            />
            <input 
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="最低录取率 (%)" 
              value={minAcceptance} 
              onChange={e => setMinAcceptance(e.target.value)} 
            />
            <input 
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="最高录取率 (%)" 
              value={maxAcceptance} 
              onChange={e => setMaxAcceptance(e.target.value)} 
            />
          </div>
          <button 
            className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            onClick={search}
          >
            搜索
          </button>
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">搜索结果</h3>
          </div>
          
          {loading && (
            <div className="px-6 py-8 text-center">
              <div className="text-gray-600">搜索中...</div>
            </div>
          )}
          
          {error && (
            <div className="px-6 py-8 text-center">
              <div className="text-red-600">{error}</div>
            </div>
          )}
          
          {!loading && !error && items.length === 0 && (
            <div className="px-6 py-8 text-center">
              <div className="text-gray-600">没有找到匹配的大学</div>
            </div>
          )}
          
          {!loading && !error && items.length > 0 && (
            <div className="divide-y divide-gray-200">
              {items.map(u => (
                <div 
                  key={u.id} 
                  className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                  onClick={() => handleUniversityClick(u)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                        {u.name}
                      </h4>
                      <div className="text-sm text-gray-600 mt-1">
                        {[u.country, u.state, u.city].filter(Boolean).join(" • ")}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        排名: {u.usNewsRanking ? `#${u.usNewsRanking}` : "未排名"} • 
                        录取率: {u.acceptanceRate ? `${(u.acceptanceRate * 100).toFixed(1)}%` : "未知"}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        点击查看详情
                      </span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* University Detail Modal */}
      <UniversityDetailModal
        university={selectedUniversity}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
