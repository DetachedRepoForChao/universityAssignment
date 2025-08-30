#!/bin/bash

# 🚀 Supabase + Vercel 部署脚本
# 使用方法: ./scripts/deploy-supabase.sh

set -e

echo "🚀 开始部署到 Supabase + Vercel..."

# 检查环境变量
if [ -z "$DATABASE_URL" ]; then
    echo "❌ 错误: 请设置 DATABASE_URL 环境变量"
    echo "请复制 .env.production.example 为 .env.production 并填入实际值"
    exit 1
fi

if [ -z "$JWT_SECRET" ]; then
    echo "❌ 错误: 请设置 JWT_SECRET 环境变量"
    exit 1
fi

echo "✅ 环境变量检查通过"

# 安装依赖
echo "📦 安装依赖..."
npm install

# 生成Prisma客户端
echo "🔧 生成Prisma客户端..."
npx prisma generate

# 运行数据库迁移
echo "🗄️ 运行数据库迁移..."
npx prisma db push

# 填充种子数据
echo "🌱 填充种子数据..."
npx tsx prisma/enhanced_seed.ts

echo "✅ 数据库部署完成！"

# 构建项目
echo "🏗️ 构建项目..."
npm run build

echo "✅ 构建完成！"

echo ""
echo "🎉 部署准备完成！"
echo ""
echo "下一步："
echo "1. 将代码推送到GitHub"
echo "2. 在Vercel中导入项目"
echo "3. 配置环境变量"
echo "4. 部署"
echo ""
echo "环境变量配置："
echo "DATABASE_URL=$DATABASE_URL"
echo "JWT_SECRET=[已设置]"
echo "NODE_ENV=production"
