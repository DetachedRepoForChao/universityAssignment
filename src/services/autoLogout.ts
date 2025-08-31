export class AutoLogoutService {
  private timeoutId: NodeJS.Timeout | null = null;
  private warningTimeoutId: NodeJS.Timeout | null = null;
  private countdownIntervalId: NodeJS.Timeout | null = null;
  private isWarningShown = false;
  private countdown = 30;
  
  // 配置参数
  private readonly IDLE_TIMEOUT = 10 * 60 * 1000; // 10分钟
  private readonly WARNING_DURATION = 30 * 1000; // 30秒警告
  
  constructor() {
    // 检查是否已登录
    if (this.isLoggedIn()) {
      this.setupEventListeners();
    }
  }
  
  private isLoggedIn(): boolean {
    // 检查是否存在认证cookie
    return document.cookie.includes('auth_token=');
  }
  
  private setupEventListeners() {
    // 监听用户活动事件
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    events.forEach(event => {
      document.addEventListener(event, () => this.resetTimer(), true);
    });
    
    // 页面可见性变化时重置计时器
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.resetTimer();
      }
    });
  }
  
  private resetTimer() {
    if (this.isWarningShown) {
      return; // 如果警告已经显示，不重置计时器
    }
    
    // 清除之前的计时器
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    
    // 设置新的空闲计时器
    this.timeoutId = setTimeout(() => {
      this.showWarning();
    }, this.IDLE_TIMEOUT);
  }
  
  private showWarning() {
    this.isWarningShown = true;
    
    // 创建警告弹窗
    const warningModal = this.createWarningModal();
    document.body.appendChild(warningModal);
    
    // 开始倒计时
    this.startCountdown();
    
    // 设置自动登出
    this.warningTimeoutId = setTimeout(() => {
      this.logout();
    }, this.WARNING_DURATION);
  }
  
  private createWarningModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <div class="flex items-center mb-4">
          <div class="flex-shrink-0">
            <svg class="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-medium text-gray-900">会话即将超时</h3>
          </div>
        </div>
        
        <div class="mb-4">
          <p class="text-sm text-gray-500">
            由于长时间未操作，您的会话将在 <span id="countdown" class="font-semibold text-red-600">30</span> 秒后自动登出。
          </p>
        </div>
        
        <div class="flex justify-end space-x-3">
          <button
            id="extendSession"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            继续使用
          </button>
        </div>
      </div>
    `;
    
    // 绑定继续使用按钮事件
    const extendButton = modal.querySelector('#extendSession');
    if (extendButton) {
      extendButton.addEventListener('click', () => {
        this.extendSession();
        document.body.removeChild(modal);
      });
    }
    
    return modal;
  }
  
  private startCountdown() {
    this.countdown = 30;
    const countdownElement = document.getElementById('countdown');
    
    this.countdownIntervalId = setInterval(() => {
      this.countdown--;
      
      if (countdownElement) {
        countdownElement.textContent = this.countdown.toString();
      }
      
      if (this.countdown <= 0) {
        if (this.countdownIntervalId) {
          clearInterval(this.countdownIntervalId);
        }
      }
    }, 1000);
  }
  
  private extendSession() {
    this.isWarningShown = false;
    this.countdown = 30;
    
    // 清除所有计时器
    if (this.warningTimeoutId) {
      clearTimeout(this.warningTimeoutId);
      this.warningTimeoutId = null;
    }
    
    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
      this.countdownIntervalId = null;
    }
    
    // 重置空闲计时器
    this.resetTimer();
  }
  
  private logout() {
    // 清除所有计时器
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.warningTimeoutId) {
      clearTimeout(this.warningTimeoutId);
    }
    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
    }
    
    // 清除认证状态
    document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    // 重定向到登录页面
    window.location.href = '/login';
  }
  
  // 公共方法：手动启动服务
  public start() {
    this.resetTimer();
  }
  
  // 公共方法：手动停止服务
  public stop() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.warningTimeoutId) {
      clearTimeout(this.warningTimeoutId);
    }
    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
    }
    this.isWarningShown = false;
  }
  
  // 公共方法：手动重置计时器
  public reset() {
    this.resetTimer();
  }
}


