import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { AutoLogoutService } from '../services/autoLogout';

interface AutoLogoutProviderProps {
  children: React.ReactNode;
}

export const AutoLogoutProvider: React.FC<AutoLogoutProviderProps> = ({ children }) => {
  const router = useRouter();
  const autoLogoutRef = useRef<AutoLogoutService | null>(null);

  useEffect(() => {
    // 只在客户端渲染时创建服务
    if (typeof window !== 'undefined') {
      // 检查是否已登录
      const isLoggedIn = document.cookie.includes('auth_token=');
      
      if (isLoggedIn) {
        autoLogoutRef.current = new AutoLogoutService();
        autoLogoutRef.current.start();
      }
    }

    return () => {
      if (autoLogoutRef.current) {
        autoLogoutRef.current.stop();
      }
    };
  }, []);

  // 路由变化时重置计时器
  useEffect(() => {
    if (autoLogoutRef.current) {
      autoLogoutRef.current.reset();
    }
  }, [router.asPath]);

  return <>{children}</>;
};


