# 🚀 快速部署指南 (Supabase + Vercel)

## ⚡ **5分钟快速部署**

### 1️⃣ **创建Supabase项目**
```bash
# 访问 https://supabase.com
# 创建新项目，记住数据库密码
```

### 2️⃣ **配置环境变量**
```bash
# 复制配置文件
cp env.production.example .env.production

# 编辑 .env.production，填入实际值
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
JWT_SECRET=your-super-secret-jwt-key
```

### 3️⃣ **本地测试部署**
```bash
# 安装依赖
npm install

# 生成Prisma客户端
npx prisma generate

# 测试数据库连接
npx prisma db push

# 填充测试数据
npx tsx prisma/enhanced_seed.ts
```

### 4️⃣ **部署到Vercel**
```bash
# 推送到GitHub
git add .
git commit -m "准备部署到Vercel"
git push origin main

# 在Vercel中导入项目
# 配置环境变量
# 部署
```

## 🔑 **环境变量配置**

### Vercel环境变量
```
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
JWT_SECRET=[YOUR-JWT-SECRET]
NODE_ENV=production
```

### 本地开发环境变量
```
DATABASE_URL=file:./dev.db
JWT_SECRET=dev_secret_key_for_university_tracker_2024
```

## 📱 **测试部署**

部署完成后，测试以下功能：

1. **用户登录**: `/login`
2. **学生仪表板**: `/dashboard`
3. **家长视图**: `/parent/view`
4. **管理员面板**: `/admin/dashboard`

## 🚨 **常见问题解决**

### 数据库连接失败
- 检查DATABASE_URL格式
- 确认Supabase项目状态
- 检查网络配置

### 构建失败
- 检查依赖安装
- 确认Node.js版本
- 查看构建日志

### 运行时错误
- 检查环境变量
- 确认数据库迁移状态
- 查看Vercel函数日志

## 📚 **详细文档**

- 完整部署指南: `deploy-supabase.md`
- 部署脚本: `scripts/deploy-supabase.sh`
- Vercel配置: `vercel.json`

## 🆘 **需要帮助？**

1. 检查部署日志
2. 查看Supabase项目状态
3. 确认环境变量配置
4. 测试本地数据库连接
