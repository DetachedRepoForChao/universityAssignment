# 🚀 Vercel部署指南

## 📋 部署前准备

### 1. 环境变量设置
在Vercel控制台中设置以下环境变量：

```bash
# 数据库连接
DATABASE_URL=postgresql://postgres.tgjegehscsxxglucujre:0213Wasd!!@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres

# JWT密钥 (生产环境请使用强密钥)
JWT_SECRET=your_production_jwt_secret_here

# 环境配置
NODE_ENV=production
```

### 2. 构建命令
```bash
npm run vercel-build
```

### 3. 输出目录
```
.next
```

## 🔧 部署步骤

### 方法1: Vercel CLI
```bash
# 安装Vercel CLI
npm i -g vercel

# 登录Vercel
vercel login

# 部署
vercel --prod
```

### 方法2: Vercel Dashboard
1. 连接GitHub仓库
2. 设置环境变量
3. 配置构建命令
4. 部署

## 📊 部署后检查

### 1. 健康检查
- 访问 `/api/auth/me` 端点
- 检查数据库连接
- 验证JWT认证

### 2. 功能测试
- 用户注册/登录
- 学生申请管理
- 家长监控功能
- 管理员后台

## 🚨 注意事项

1. **数据库连接**: 确保Supabase数据库可访问
2. **环境变量**: 不要在代码中硬编码敏感信息
3. **构建优化**: 使用`vercel-build`脚本确保Prisma客户端生成
4. **文件上传**: 生产环境建议使用云存储服务

## 🔍 故障排除

### 常见问题
- **构建失败**: 检查Prisma生成和依赖安装
- **数据库连接**: 验证DATABASE_URL和网络访问
- **环境变量**: 确认Vercel控制台设置正确

### 日志查看
在Vercel Dashboard中查看函数日志和构建日志。

