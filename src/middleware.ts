import { NextRequest, NextResponse } from "next/server";

// 简化的认证中间件，不依赖JWT验证
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // 定义受保护的路由
  const protectedRoutes = [
    "/dashboard",
    "/profile", 
    "/parent",
    "/admin",
    "/api/student",
    "/api/parent",
    "/api/admin"
  ];
  
  // 检查是否是受保护的路由
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname === route || pathname.startsWith(route + "/")
  );
  
  // 如果不是受保护的路由，直接放行
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // 检查认证token
  const token = req.cookies.get("auth_token")?.value;
  
  if (!token || token.length < 10) {
    console.log("No valid token found, redirecting to login");
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    url.searchParams.set("error", "请先登录");
    return NextResponse.redirect(url);
  }

  // 简单的token存在性检查（不进行JWT验证）
  console.log("Token found, allowing access to:", pathname);
  return NextResponse.next();
}

export const config = {
  matcher: [
    // 学生路由
    "/dashboard",
    "/profile",
    "/api/student/:path*",
    // 家长路由
    "/parent/:path*",
    "/api/parent/:path*",
    // 管理员路由
    "/admin/:path*",
    "/api/admin/:path*",
    // 通用路由
    "/api/auth/logout"
  ],
  // 使用Node.js运行时
  runtime: 'nodejs'
};


