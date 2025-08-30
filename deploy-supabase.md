# 🚀 Supabase + Vercel 部署指南

## 📋 **步骤概览**

1. 创建Supabase项目
2. 配置数据库连接
3. 运行数据库迁移
4. 部署到Vercel
5. 配置环境变量

## 🔧 **详细步骤**

### 步骤1: 创建Supabase项目

1. 访问 [supabase.com](https://supabase.com)
2. 注册/登录账号
3. 点击"New Project"
4. 选择组织，输入项目名称
5. 设置数据库密码（请记住这个密码）
6. 选择地区（建议选择离您用户最近的地区）
7. 等待项目创建完成

### 步骤2: 获取连接信息

项目创建完成后，在项目设置中找到：

- **Database URL**: `postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres`
- **API Key**: 在API设置中获取
- **Project Reference**: 项目ID

### 步骤3: 配置本地环境

1. 复制 `.env.production.example` 为 `.env.production`
2. 填入实际的Supabase连接信息
3. 生成强JWT密钥

```bash
# 生成JWT密钥
openssl rand -base64 32
```

### 步骤4: 运行数据库迁移

```bash
# 安装PostgreSQL依赖
npm install pg @types/pg

# 生成Prisma客户端
npx prisma generate

# 运行数据库迁移
npx prisma db push

# 或者使用迁移文件
npx prisma migrate deploy

# 填充种子数据
npx tsx prisma/enhanced_seed.ts
```

### 步骤5: 部署到Vercel

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 配置环境变量
4. 部署

### 步骤6: 配置Vercel环境变量

在Vercel项目设置中添加：

```
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
JWT_SECRET=[YOUR-JWT-SECRET]
NODE_ENV=production
```

## 🌐 **环境变量配置**

### 本地开发 (.env.local)
```
DATABASE_URL=file:./dev.db
JWT_SECRET=dev_secret_key_for_university_tracker_2024
```

### 生产环境 (.env.production)
```
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
JWT_SECRET=your-production-jwt-secret
NODE_ENV=production
```

## 📊 **数据库迁移注意事项**

1. **数据类型兼容性**: SQLite和PostgreSQL在某些数据类型上有差异
2. **JSON字段**: PostgreSQL原生支持JSON类型
3. **索引优化**: 为生产环境优化数据库索引
4. **连接池**: 配置适当的数据库连接池大小

## 🔒 **安全配置**

1. **环境变量**: 不要在代码中硬编码敏感信息
2. **JWT密钥**: 使用强随机密钥
3. **数据库权限**: 限制数据库用户权限
4. **HTTPS**: 确保生产环境使用HTTPS

## 🚨 **常见问题**

### Q: 迁移失败怎么办？
A: 检查数据类型兼容性，可能需要手动调整schema

### Q: 连接超时？
A: 检查网络配置，确保Vercel可以访问Supabase

### Q: 权限错误？
A: 检查数据库用户权限和连接字符串

## 📚 **参考资源**

- [Supabase文档](https://supabase.com/docs)
- [Vercel部署指南](https://vercel.com/docs)
- [Prisma PostgreSQL指南](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- [Next.js部署](https://nextjs.org/docs/deployment)
