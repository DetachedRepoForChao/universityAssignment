import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, MapPinIcon, AcademicCapIcon, DocumentTextIcon, ClockIcon } from '@heroicons/react/24/outline';

export interface UniversityDetail {
  id: string;
  name: string;
  country?: string;
  state?: string;
  city?: string;
  usNewsRanking?: number;
  acceptanceRate?: number;
  applicationSystem?: string;
  tuitionInState?: number;
  tuitionOutState?: number;
  applicationFee?: number;
  deadlines?: Record<string, any>;
  requirements?: string[];
  description?: string;
}

interface UniversityDetailModalProps {
  university: UniversityDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function UniversityDetailModal({ university, isOpen, onClose }: UniversityDetailModalProps) {
  if (!university) return null;

  const formatAcceptanceRate = (rate?: number) => {
    if (rate === undefined || rate === null) return '暂无数据';
    return `${(rate * 100).toFixed(1)}%`;
  };

  const formatTuition = (tuition?: number) => {
    if (tuition === undefined || tuition === null) return '暂无数据';
    return `$${tuition.toLocaleString()}`;
  };

  const formatDeadlines = (deadlines?: Record<string, any>) => {
    if (!deadlines || Object.keys(deadlines).length === 0) return '暂无数据';
    
    return Object.entries(deadlines).map(([type, date]) => (
      <div key={type} className="flex justify-between py-1">
        <span className="text-gray-600 capitalize">{type.replace('_', ' ')}:</span>
        <span className="font-medium">{new Date(date as string).toLocaleDateString('zh-CN')}</span>
      </div>
    ));
  };

  const formatRequirements = (requirements?: string[]) => {
    if (!requirements || requirements.length === 0) return '暂无数据';
    
    return requirements.map((req, index) => (
      <div key={index} className="flex items-center space-x-2 py-1">
        <DocumentTextIcon className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700 capitalize">{req.replace('_', ' ')}</span>
      </div>
    ));
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Dialog.Title as="h3" className="text-xl font-semibold text-white">
                        {university.name}
                      </Dialog.Title>
                      {university.description && (
                        <p className="text-blue-100 mt-1 text-sm">{university.description}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      className="rounded-md bg-white bg-opacity-20 text-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                      onClick={onClose}
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* 基本信息 */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                          <AcademicCapIcon className="w-5 h-5 text-blue-500 mr-2" />
                          基本信息
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">US News排名:</span>
                            <span className="font-medium">
                              {university.usNewsRanking ? `#${university.usNewsRanking}` : '暂无数据'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">录取率:</span>
                            <span className="font-medium">{formatAcceptanceRate(university.acceptanceRate)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">申请系统:</span>
                            <span className="font-medium">{university.applicationSystem || '暂无数据'}</span>
                          </div>
                        </div>
                      </div>

                      {/* 地理位置 */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                          <MapPinIcon className="w-5 h-5 text-green-500 mr-2" />
                          地理位置
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">国家:</span>
                            <span className="font-medium">{university.country || '暂无数据'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">州/省:</span>
                            <span className="font-medium">{university.state || '暂无数据'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">城市:</span>
                            <span className="font-medium">{university.city || '暂无数据'}</span>
                          </div>
                        </div>
                      </div>

                      {/* 费用信息 */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-lg font-medium text-gray-900 mb-3">费用信息</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">州内学费:</span>
                            <span className="font-medium">{formatTuition(university.tuitionInState)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">州外学费:</span>
                            <span className="font-medium">{formatTuition(university.tuitionOutState)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">申请费:</span>
                            <span className="font-medium">{formatTuition(university.applicationFee)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* 申请要求 */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                          <DocumentTextIcon className="w-5 h-5 text-purple-500 mr-2" />
                          申请要求
                        </h4>
                        <div className="space-y-2">
                          {formatRequirements(university.requirements)}
                        </div>
                      </div>

                      {/* 截止日期 */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                          <ClockIcon className="w-5 h-5 text-red-500 mr-2" />
                          重要截止日期
                        </h4>
                        <div className="space-y-2">
                          {formatDeadlines(university.deadlines)}
                        </div>
                      </div>

                      {/* 申请建议 */}
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="text-lg font-medium text-blue-900 mb-3">申请建议</h4>
                        <div className="text-sm text-blue-800 space-y-2">
                          {university.usNewsRanking && university.usNewsRanking <= 10 && (
                            <p>• 这是一所顶尖大学，建议提前准备，确保所有材料都达到最高标准</p>
                          )}
                          {university.usNewsRanking && university.usNewsRanking > 10 && university.usNewsRanking <= 30 && (
                            <p>• 这是一所优秀大学，建议认真准备申请材料，突出个人优势</p>
                          )}
                          {university.acceptanceRate && university.acceptanceRate < 0.1 && (
                            <p>• 录取率较低，建议准备备选方案</p>
                          )}
                          {university.applicationSystem === 'Common App' && (
                            <p>• 支持Common App申请，可以简化申请流程</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 底部操作按钮 */}
                  <div className="mt-8 flex justify-end space-x-3">
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={onClose}
                    >
                      关闭
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={() => {
                        // 这里可以添加申请该大学的逻辑
                        alert('申请功能开发中...');
                      }}
                    >
                      申请这所大学
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}


