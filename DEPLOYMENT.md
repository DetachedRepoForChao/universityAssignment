# 🚀 在线部署指南

## 🌐 部署平台选择

### 推荐平台
- **Vercel** (推荐) - Next.js 官方平台，自动部署
- **Netlify** - 静态站点部署，支持 SSR
- **Railway** - 全栈应用部署，包含数据库
- **Heroku** - 传统 PaaS 平台
- **AWS/GCP/Azure** - 云服务提供商

## 🎯 Vercel 部署 (推荐)

### 1. 准备工作
```bash
# 确保项目可以正常构建
npm run build

# 检查构建输出
npm start
```

### 2. 部署步骤

#### 方法1: Vercel CLI
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署项目
vercel

# 生产环境部署
vercel --prod
```

#### 方法2: GitHub 集成
1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "New Project"
4. 导入 GitHub 仓库
5. 配置环境变量
6. 自动部署

### 3. 环境变量配置
在 Vercel 项目设置中添加：
```bash
# 数据库配置
DATABASE_URL="your-production-database-url"

# JWT 配置
JWT_SECRET="your-production-jwt-secret"

# 外部集成
COMMON_APP_TOKEN="your_common_app_token"
OPEN_DATA_KEY="your_open_data_key"

# 邮件服务
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

### 4. 自定义域名
1. 在 Vercel 项目设置中添加域名
2. 配置 DNS 记录
3. 启用 HTTPS

## 🗄️ 数据库部署

### 1. PostgreSQL (推荐)

#### Railway 部署
```bash
# 访问 railway.app
# 创建新项目
# 添加 PostgreSQL 服务
# 获取连接字符串
```

#### Supabase 部署
```bash
# 访问 supabase.com
# 创建新项目
# 获取数据库连接信息
# 运行迁移脚本
```

#### PlanetScale 部署
```bash
# 访问 planetscale.com
# 创建新数据库
# 获取连接字符串
# 运行迁移脚本
```

### 2. 数据库迁移
```bash
# 更新环境变量
export DATABASE_URL="your-production-database-url"

# 运行迁移
npx prisma migrate deploy

# 生成客户端
npx prisma generate

# 验证连接
npx prisma db pull
```

### 3. 数据填充
```bash
# 生产环境数据填充
NODE_ENV=production npx tsx prisma/simple_seed.ts
```

## 🔧 生产环境配置

### 1. 环境变量
```bash
# 生产环境配置
NODE_ENV=production
DATABASE_URL="postgresql://..."
JWT_SECRET="your-super-secure-jwt-secret"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-nextauth-secret"
```

### 2. 安全配置
```typescript
// next.config.ts
const nextConfig = {
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### 3. 性能优化
```typescript
// next.config.ts
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
    }
    return config;
  },
};
```

## 📱 移动端优化

### 1. PWA 配置
```json
// public/manifest.json
{
  "name": "大学申请追踪系统",
  "short_name": "申请追踪",
  "description": "智能大学申请管理平台",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

### 2. Service Worker
```typescript
// public/sw.js
const CACHE_NAME = 'university-tracker-v1';
const urlsToCache = [
  '/',
  '/dashboard',
  '/static/js/bundle.js',
  '/static/css/main.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

## 🔍 监控和分析

### 1. 性能监控
```typescript
// 使用 Next.js Analytics
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

### 2. 错误监控
```typescript
// 集成 Sentry
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

### 3. 日志管理
```typescript
// 结构化日志
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty',
  },
});
```

## 🚨 部署检查清单

### 预部署检查
- [ ] 代码通过所有测试
- [ ] 构建成功 (`npm run build`)
- [ ] 环境变量配置完整
- [ ] 数据库连接正常
- [ ] 安全配置检查

### 部署后检查
- [ ] 网站正常访问
- [ ] 所有功能正常工作
- [ ] 数据库连接正常
- [ ] 错误监控正常
- [ ] 性能指标正常

### 生产环境检查
- [ ] HTTPS 证书正常
- [ ] 域名解析正确
- [ ] 备份策略配置
- [ ] 监控告警设置
- [ ] 灾难恢复计划

## 📊 部署状态

### 当前部署状态
- **状态**: 开发中
- **版本**: 1.0.0
- **最后更新**: 2024年1月15日
- **部署平台**: 待定

### 部署链接
- **开发环境**: `http://localhost:3000`
- **测试环境**: 待部署
- **生产环境**: 待部署

## 🔄 持续部署 (CI/CD)

### GitHub Actions 配置
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### 自动化测试
```yaml
# 测试配置
- name: Run Tests
  run: |
    npm run test:ci
    npm run test:coverage
```

## 📈 性能优化

### 1. 图片优化
```typescript
import Image from 'next/image';

<Image
  src="/university-logo.png"
  alt="University Logo"
  width={200}
  height={100}
  priority
  placeholder="blur"
/>
```

### 2. 代码分割
```typescript
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
```

### 3. 缓存策略
```typescript
// API 路由缓存
export async function getStaticProps() {
  return {
    props: {
      data: await fetchData(),
    },
    revalidate: 3600, // 1小时重新验证
  };
}
```

## 🛡️ 安全配置

### 1. 内容安全策略
```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          },
        ],
      },
    ];
  },
};
```

### 2. 环境变量验证
```typescript
// lib/env.ts
export function validateEnv() {
  const required = ['DATABASE_URL', 'JWT_SECRET'];
  
  for (const var_name of required) {
    if (!process.env[var_name]) {
      throw new Error(`Missing required environment variable: ${var_name}`);
    }
  }
}
```

## 📞 技术支持

### 部署问题
1. 检查 Vercel 部署日志
2. 验证环境变量配置
3. 检查数据库连接
4. 查看错误监控

### 联系方式
- **GitHub Issues**: [项目仓库](https://github.com/your-repo)
- **技术支持**: support@yourcompany.com
- **紧急联系**: +1-xxx-xxx-xxxx

---

**最后更新**: 2024年1月15日
**版本**: 1.0.0
**维护者**: 开发团队
