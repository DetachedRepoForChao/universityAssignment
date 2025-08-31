# 🚀 Vercel部署指南

## 📋 **部署前准备**

### 1. **确保代码已推送到GitHub**
```bash
git add .
git commit -m "准备部署到Vercel"
git push origin main
```

### 2. **检查项目结构**
确保项目根目录包含：
- `package.json`
- `next.config.ts`
- `vercel.json`
- `prisma/schema.prisma`

## 🌐 **Vercel部署步骤**

### 步骤1: 访问Vercel
1. 打开 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录

### 步骤2: 导入项目
1. 点击 "New Project"
2. 选择GitHub仓库 `universityAssignment`
3. 点击 "Import"

### 步骤3: 项目配置
```
Framework Preset: Next.js
Root Directory: university-tracker
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### 步骤4: 环境变量配置 ⚠️ 重要！
点击 "Environment Variables" 添加：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `DATABASE_URL` | `postgresql://postgres.tgjegehscsxxglucujre:0213Wasd!!@aws-1-ap-southeast-1.pooler.supabase.co:5432/postgres` | Supabase数据库连接 |
| `JWT_SECRET` | `HxodrSO4QSAPQ/KcewN67Z6UzFxtJ+3CYd29ZQzkmc8=` | JWT签名密钥 |
| `NODE_ENV` | `production` | 生产环境标识 |

### 步骤5: 部署
点击 "Deploy" 开始部署

## 🔧 **部署后配置**

### 1. **自定义域名 (可选)**
- 在项目设置中找到 "Domains"
- 添加您的自定义域名

### 2. **环境变量管理**
- 生产环境: 自动使用部署时配置的变量
- 预览环境: 可以配置不同的变量值

### 3. **函数配置**
- API路由自动部署为Serverless函数
- 最大执行时间: 30秒 (已在vercel.json中配置)

## 📊 **部署状态监控**

### 1. **构建日志**
- 查看构建过程中的详细信息
- 检查是否有错误或警告

### 2. **函数日志**
- 监控API端点的执行情况
- 查看错误和性能指标

### 3. **性能分析**
- 页面加载速度
- API响应时间
- 数据库查询性能

## 🚨 **常见问题解决**

### 构建失败
1. **依赖问题**: 检查`package.json`中的依赖版本
2. **环境变量**: 确认所有必需的环境变量已设置
3. **Prisma问题**: 确保数据库连接正常

### 运行时错误
1. **数据库连接**: 检查Supabase连接状态
2. **JWT验证**: 确认JWT密钥正确
3. **API端点**: 验证路由配置

### 性能问题
1. **数据库查询**: 优化Prisma查询
2. **图片优化**: 使用Next.js的Image组件
3. **缓存策略**: 配置适当的缓存头

## 🔒 **安全配置**

### 1. **环境变量**
- 不要在代码中硬编码敏感信息
- 使用Vercel的环境变量管理

### 2. **API保护**
- JWT验证已实现
- 角色基础访问控制 (RBAC)

### 3. **HTTPS**
- Vercel自动提供HTTPS
- 强制HTTPS重定向

## 📱 **测试部署**

部署完成后，测试以下功能：

1. **用户认证**
   - 登录/注册
   - JWT token验证

2. **学生功能**
   - 仪表板
   - 申请管理
   - 文档上传

3. **家长功能**
   - 学生申请查看
   - 沟通记录管理
   - 观察记录管理

4. **管理员功能**
   - 用户管理
   - 大学数据同步
   - 系统统计

## 📚 **参考资源**

- [Vercel官方文档](https://vercel.com/docs)
- [Next.js部署指南](https://nextjs.org/docs/deployment)
- [Prisma部署指南](https://www.prisma.io/docs/guides/deployment)

## 🆘 **需要帮助？**

1. 检查Vercel构建日志
2. 确认环境变量配置
3. 验证数据库连接
4. 查看函数执行日志

