import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function TestAutoLogout() {
  const [timeLeft, setTimeLeft] = useState(600); // 10分钟倒计时
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setTimeLeft(600);
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resumeTimer = () => {
    setIsActive(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/dashboard" className="text-blue-600 hover:text-blue-800 underline">
            ← 返回仪表板
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">自动登出功能测试</h1>
          
          <div className="text-center mb-8">
            <div className="text-6xl font-mono font-bold text-blue-600 mb-4">
              {formatTime(timeLeft)}
            </div>
            <p className="text-gray-600">
              剩余时间：{timeLeft > 0 ? `${Math.floor(timeLeft / 60)} 分 ${timeLeft % 60} 秒` : '时间到！'}
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={resetTimer}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              重置计时器
            </button>
            <button
              onClick={pauseTimer}
              disabled={!isActive}
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors disabled:opacity-50"
            >
              暂停
            </button>
            <button
              onClick={resumeTimer}
              disabled={isActive}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              继续
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">测试说明</h2>
            <div className="space-y-3 text-blue-700">
              <p>• 此页面用于测试自动登出功能</p>
              <p>• 当您10分钟不操作时，系统会弹出警告弹窗</p>
              <p>• 警告弹窗会显示30秒倒计时</p>
              <p>• 您可以点击"继续使用"按钮延长会话</p>
              <p>• 如果30秒内没有操作，系统会自动登出</p>
              <p>• 用户活动（鼠标移动、点击、键盘输入等）会重置计时器</p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">注意事项</h3>
            <p className="text-yellow-700">
              请确保您已经登录系统，否则自动登出功能不会启动。您可以通过点击"返回仪表板"来检查登录状态。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


