import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface User {
  id: string;
  email: string;
  role: 'student' | 'parent' | 'admin';
  name: string;
}

export function useAuth(requiredRole?: 'student' | 'parent' | 'admin') {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
          
          // 如果指定了必需角色，检查权限
          if (requiredRole && userData.role !== requiredRole) {
            router.push(`/login?error=权限不足：需要${getRoleName(requiredRole)}权限`);
            return;
          }
        } else {
          // 未登录，重定向到登录页
          const currentPath = router.asPath;
          router.push(`/login?next=${encodeURIComponent(currentPath)}&error=请先登录`);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/login?error=认证检查失败');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [requiredRole, router]);

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return { user, loading, logout };
}

function getRoleName(role: string): string {
  const roleNames = {
    student: '学生',
    parent: '家长',
    admin: '管理员'
  };
  return roleNames[role as keyof typeof roleNames] || role;
}



