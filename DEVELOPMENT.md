# 🚀 本地开发环境设置指南

## 系统要求

- **Node.js**: 18.0.0 或更高版本
- **npm**: 8.0.0 或更高版本
- **操作系统**: Windows 10+, macOS 10.15+, Ubuntu 18.04+
- **内存**: 至少 4GB RAM
- **磁盘空间**: 至少 2GB 可用空间

## 🛠️ 环境准备

### 1. 安装 Node.js

#### Windows
```bash
# 下载并安装 Node.js LTS 版本
# 访问: https://nodejs.org/
# 或使用 Chocolatey
choco install nodejs-lts
```

#### macOS
```bash
# 使用 Homebrew
brew install node

# 或使用 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts
```

#### Linux (Ubuntu/Debian)
```bash
# 使用 apt
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# 或使用 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts
```

### 2. 验证安装
```bash
node --version  # 应显示 v18.x.x 或更高
npm --version   # 应显示 8.x.x 或更高
```

## 📥 项目克隆与设置

### 1. 克隆项目
```bash
git clone <repository-url>
cd university-tracker
```

### 2. 安装依赖
```bash
npm install
```

### 3. 环境变量配置
创建 `.env.local` 文件：
```bash
# 数据库配置
DATABASE_URL="file:./dev.db"

# JWT 配置
JWT_SECRET="your-super-secret-jwt-key-change-in-production"

# 可选：外部集成配置
COMMON_APP_TOKEN="your_common_app_token"
OPEN_DATA_KEY="your_open_data_key"

# 可选：邮件服务配置
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

## 🗄️ 数据库设置

### 1. 数据库迁移
```bash
# 创建初始迁移
npx prisma migrate dev --name init

# 生成 Prisma 客户端
npx prisma generate
```

### 2. 填充测试数据
```bash
# 运行完整种子数据
npm run seed

# 或运行简化种子数据
npx tsx prisma/simple_seed.ts
```

### 3. 数据库管理
```bash
# 查看数据库
npx prisma studio

# 重置数据库
npx prisma migrate reset --force

# 查看迁移状态
npx prisma migrate status
```

## 🚀 启动开发服务器

### 1. 开发模式
```bash
npm run dev
```
服务器将在 `http://localhost:3000` 启动

### 2. 构建和启动
```bash
# 构建项目
npm run build

# 启动生产模式
npm start
```

### 3. 测试
```bash
# 运行单元测试
npm test

# 运行测试并监听变化
npm run test:watch

# 生成测试覆盖率报告
npm run test:coverage
```

## 🔧 开发工具配置

### 1. VS Code 扩展推荐
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "prisma.prisma",
    "ms-vscode.vscode-json"
  ]
}
```

### 2. 代码格式化
项目使用 Prettier 进行代码格式化：
```bash
# 格式化所有文件
npm run format

# 检查格式
npm run format:check
```

### 3. 代码检查
项目使用 ESLint 进行代码检查：
```bash
# 检查代码
npm run lint

# 自动修复
npm run lint:fix
```

## 📱 测试账号

### 学生账号
- **邮箱**: student@example.com
- **密码**: student123
- **角色**: student

### 家长账号
- **邮箱**: parent@example.com
- **密码**: parent123
- **角色**: parent

### 管理员账号
- **邮箱**: admin@example.com
- **密码**: admin123
- **角色**: admin

## 🔍 调试技巧

### 1. 浏览器开发者工具
- 使用 Network 标签页查看 API 请求
- 使用 Console 查看日志和错误
- 使用 Application 标签页查看存储和 Cookie

### 2. 数据库调试
```bash
# 启动 Prisma Studio 查看数据
npx prisma studio

# 在代码中添加日志
console.log('Debug info:', data);
```

### 3. API 调试
```bash
# 使用 curl 测试 API
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"student@example.com","password":"student123","role":"student"}'
```

## 🚨 常见问题解决

### 1. 端口被占用
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### 2. 数据库连接失败
```bash
# 检查数据库文件是否存在
ls -la prisma/dev.db

# 重新生成数据库
npx prisma migrate reset --force
npx prisma generate
```

### 3. 依赖安装失败
```bash
# 清除 npm 缓存
npm cache clean --force

# 删除 node_modules 并重新安装
rm -rf node_modules package-lock.json
npm install
```

### 4. 权限问题
```bash
# Linux/macOS 权限问题
sudo chown -R $USER:$USER .

# Windows 权限问题
# 以管理员身份运行 PowerShell
```

## 📚 学习资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [Prisma 官方文档](https://www.prisma.io/docs)
- [Tailwind CSS 官方文档](https://tailwindcss.com/docs)
- [TypeScript 官方文档](https://www.typescriptlang.org/docs)

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📞 技术支持

如果遇到问题，请：
1. 查看本文档的常见问题部分
2. 检查 GitHub Issues
3. 联系开发团队

---

**注意**: 在生产环境中，请确保更改所有默认密码和密钥！
