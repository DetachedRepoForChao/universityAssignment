import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Requirement = { id: string; requirementType: string; status: string | null; deadline?: string | null };
type App = {
  id: string;
  status: string | null;
  applicationType: string | null;
  deadline?: string | null;
  submittedDate?: string | null;
  decisionDate?: string | null;
  decisionType?: string | null;
  notes?: string | null;
  university: { name: string };
  requirements: Requirement[];
  syncedAt?: string | null;
};

export default function ApplicationDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [app, setApp] = useState<App | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const [uploading, setUploading] = useState<string | null>(null);
  const [documents, setDocuments] = useState<any[]>([]);
  


  useEffect(() => {
    if (!id || typeof id !== "string") return;
    setLoading(true);
    setError(null);
    fetch(`/api/student/applications`)
      .then(async r => { if (!r.ok) throw new Error(await r.text()); return r.json(); })
      .then((list: App[]) => setApp(list.find(a => a.id === id) ?? null))
      .catch((e) => { setError(e.message || "加载失败"); setApp(null); })
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (app) {
      fetchDocuments();
    }
  }, [app]);

  const progress = useMemo(() => {
    if (!app) return 0;
    const total = app.requirements.length || 1;
    const done = app.requirements.filter(r => r.status === "completed").length;
    const inProgress = app.requirements.filter(r => r.status === "in_progress").length;
    // 计算进度：已完成 + 进行中的一半
    const progressValue = done + (inProgress * 0.5);
    return Math.round((progressValue / total) * 100);
  }, [app]);

  const updateRequirementStatus = async (requirementId: string, newStatus: string) => {
    if (!app) return;
    
    setUpdating(requirementId);
    try {
      // 这里应该调用API来更新状态，暂时直接更新本地状态
      const updatedRequirements = app.requirements.map(r => 
        r.id === requirementId ? { ...r, status: newStatus } : r
      );
      
      setApp({
        ...app,
        requirements: updatedRequirements
      });
    } catch (err) {
      console.error('Failed to update requirement status:', err);
    } finally {
      setUpdating(null);
    }
  };

  const fetchDocuments = async () => {
    if (!app) return;
    try {
      const response = await fetch(`/api/student/documents?applicationId=${app.id}`);
      if (response.ok) {
        const docs = await response.json();
        setDocuments(docs);
      }
    } catch (err) {
      console.error('Failed to fetch documents:', err);
    }
  };

  const uploadDocument = async (requirementId: string, file: File, docType: string) => {
    if (!app) return;
    
    setUploading(requirementId);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('applicationId', app.id);
      formData.append('docType', docType);
      
      const response = await fetch('/api/student/documents', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        await fetchDocuments();
        // 自动更新要求状态为已完成
        updateRequirementStatus(requirementId, 'completed');
      } else {
        throw new Error('Upload failed');
      }
    } catch (err) {
      console.error('Failed to upload document:', err);
      alert('文档上传失败，请重试');
    } finally {
      setUploading(null);
    }
  };

  const imminent = useMemo(() => {
    if (!app) return false;
    const now = new Date();
    return app.requirements.some(r => {
      if (!r.deadline) return false;
      const d = new Date(r.deadline);
      const diff = d.getTime() - now.getTime();
      return diff > 0 && diff < 1000 * 60 * 60 * 24 * 7; // 7 days
    });
  }, [app]);

  if (loading) return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600">加载中...</div>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-red-600">{error}</div>
      </div>
    </div>
  );
  
  if (!app) return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600">未找到申请</div>
      </div>
    </div>
  );

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
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{app.university.name}</h2>
              <p className="text-gray-600 mt-1">
                申请类型: {app.applicationType === "REGULAR_DECISION" ? "常规决定" :
                          app.applicationType === "EARLY_DECISION" ? "提前决定" :
                          app.applicationType === "EARLY_ACTION" ? "提前行动" :
                          app.applicationType === "ROLLING_ADMISSION" ? "滚动录取" : app.applicationType} • 
                状态: {app.status === "SUBMITTED" ? "已提交" :
                       app.status === "IN_PROGRESS" ? "进行中" :
                       app.status === "UNDER_REVIEW" ? "审核中" :
                       app.status === "ACCEPTED" ? "已录取" :
                       app.status === "REJECTED" ? "已拒绝" :
                       app.status === "WAITLISTED" ? "候补" :
                       app.status === "NOT_STARTED" ? "未开始" : app.status}
              </p>
              {app.syncedAt && (
                <p className="text-sm text-gray-500 mt-1">
                  最后同步: {new Date(app.syncedAt).toLocaleString('zh-CN')}
                </p>
              )}
            </div>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              返回仪表板
            </Link>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">申请进度</span>
              <span className="text-sm font-medium text-gray-900">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }} 
              />
            </div>
          </div>
        </div>

        {/* Urgent Alert */}
        {imminent && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
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
                  部分任务 7 天内到期，请尽快完成。
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Timeline */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">申请时间线</h3>
          <div className="space-y-3">
            {app.deadline && (
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-700">截止日期: {new Date(app.deadline).toLocaleDateString('zh-CN')}</span>
              </div>
            )}
            {app.submittedDate && (
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">已提交: {new Date(app.submittedDate).toLocaleDateString('zh-CN')}</span>
              </div>
            )}
            {app.decisionDate && (
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">
                  决定日期: {new Date(app.decisionDate).toLocaleDateString('zh-CN')} 
                  ({app.decisionType === "ACCEPTED" ? "录取" :
                    app.decisionType === "REJECTED" ? "拒绝" :
                    app.decisionType === "WAITLISTED" ? "候补" : app.decisionType})
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Documents Management */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">文档管理</h3>
          {documents.length === 0 ? (
            <div className="text-gray-600 text-center py-4">暂无上传的文档</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map(doc => (
                <div key={doc.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">{doc.filename}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        类型: {doc.docType} • 大小: {Math.round(doc.sizeBytes / 1024)}KB
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        上传时间: {new Date(doc.uploadedAt).toLocaleString('zh-CN')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Requirements Checklist */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">申请要求清单</h3>
          {app.requirements.length === 0 ? (
            <div className="text-gray-600 text-center py-8">暂无要求</div>
          ) : (
            <div className="space-y-3">
              {app.requirements.map(r => {
                const requirementDocs = documents.filter(d => d.docType === r.requirementType);
                return (
                  <div key={r.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{r.requirementType}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          状态: {r.status === "completed" ? "已完成" :
                                 r.status === "in_progress" ? "进行中" :
                                 r.status === "not_started" ? "未开始" : r.status}
                          {r.deadline && ` • 截止: ${new Date(r.deadline).toLocaleDateString('zh-CN')}`}
                        </div>
                        
                        {/* 已上传的文档 */}
                        {requirementDocs.length > 0 && (
                          <div className="mt-2">
                            <div className="text-xs text-gray-500 mb-1">已上传文档:</div>
                            <div className="space-y-1">
                              {requirementDocs.map(doc => (
                                <div key={doc.id} className="flex items-center space-x-2 text-xs">
                                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <span className="text-blue-600">{doc.filename}</span>
                                  <span className="text-gray-400">({Math.round(doc.sizeBytes / 1024)}KB)</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="ml-4 flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          r.status === "completed" ? "bg-green-100 text-green-800" :
                          r.status === "in_progress" ? "bg-yellow-100 text-yellow-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {r.status === "completed" ? "已完成" :
                           r.status === "in_progress" ? "进行中" : "未开始"}
                        </span>
                        
                        {/* 文件上传 */}
                        <div className="flex items-center space-x-2">
                          <input
                            type="file"
                            id={`file-${r.id}`}
                            className="hidden"
                            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                uploadDocument(r.id, file, r.requirementType);
                              }
                            }}
                            disabled={uploading === r.id}
                          />
                          <label
                            htmlFor={`file-${r.id}`}
                            className={`px-3 py-1 text-xs rounded cursor-pointer transition-colors ${
                              uploading === r.id
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            }`}
                          >
                            {uploading === r.id ? '上传中...' : '上传文档'}
                          </label>
                        </div>
                        
                        {/* Status Update Buttons */}
                        <div className="flex space-x-1">
                          {r.status !== "not_started" && (
                            <button
                              onClick={() => updateRequirementStatus(r.id, "not_started")}
                              disabled={updating === r.id}
                              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50"
                            >
                              重置
                            </button>
                          )}
                          {r.status !== "in_progress" && (
                            <button
                              onClick={() => updateRequirementStatus(r.id, "in_progress")}
                              disabled={updating === r.id}
                              className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 disabled:opacity-50"
                            >
                              开始
                            </button>
                          )}
                          {r.status !== "completed" && (
                            <button
                              onClick={() => updateRequirementStatus(r.id, "completed")}
                              disabled={updating === r.id}
                              className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 disabled:opacity-50"
                            >
                              完成
                            </button>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
