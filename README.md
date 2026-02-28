# 耘尚AI - AI服装产业赋能平台部署指南

## 项目简介

耘尚AI是一个专注于服装产业AI赋能的前端应用，提供从设计到生产的全流程智能解决方案，帮助服装企业降本增效、创新突破。

## 技术栈

- React 18+
- TypeScript
- Tailwind CSS
- Vite
- React Router
- 本地存储（localStorage）

## 部署前准备

1. **安装依赖**
   ```bash
   # 使用npm
   npm install
   
   # 或使用pnpm (推荐)
   pnpm install
   ```

2. **测试项目**
   确保项目能正常运行
   ```bash
   # 启动开发服务器
   npm run dev
   # 或
   pnpm dev
   ```
   打开浏览器访问 http://localhost:3000 检查项目是否正常运行

## 构建项目

1. **生产环境构建**
   ```bash
   # 使用npm
   npm run build
   
   # 或使用pnpm
   pnpm build
   ```
   
   构建成功后，项目将生成在 `dist` 目录中

## 部署方式

由于这是一个纯前端项目（数据存储在浏览器本地），您可以选择以下几种部署方式：

### 1. 使用Vercel部署（推荐）

Vercel是一个简单、高效的静态网站托管平台，特别适合React/Vite项目：

1. 访问 [Vercel官网](https://vercel.com/) 并注册账号
2. 点击"New Project"按钮
3. 选择您的项目仓库
4. 配置构建设置（通常Vercel会自动检测）：
   - Framework: Vite
   - Build Command: `npm run build` 或 `pnpm build`
   - Output Directory: `dist`
5. 点击"Deploy"按钮开始部署
6. 部署完成后，您将获得一个免费的Vercel子域名

### 2. 使用Netlify部署

Netlify也是一个流行的静态网站托管服务：

1. 访问 [Netlify官网](https://www.netlify.com/) 并注册账号
2. 点击"Add new site" > "Import an existing project"
3. 连接您的Git仓库
4. 配置构建设置：
   - Build command: `npm run build` 或 `pnpm build`
   - Publish directory: `dist`
5. 点击"Deploy site"开始部署
6. 部署成功后，您将获得一个免费的Netlify子域名

### 3. 使用GitHub Pages部署

如果您的代码托管在GitHub上，可以使用GitHub Pages：

1. 安装 `gh-pages` 包：
   ```bash
   npm install -D gh-pages
   # 或
   pnpm add -D gh-pages
   ```

2. 在 `package.json` 中添加以下脚本：
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. 运行部署命令：
   ```bash
   npm run deploy
   # 或
   pnpm deploy
   ```

4. 前往GitHub仓库的"Settings" > "Pages"配置页面，选择 `gh-pages` 分支作为发布源

### 4. 手动部署到其他服务器

如果您有自己的Web服务器，可以手动部署：

1. 运行 `npm run build` 或 `pnpm build` 构建项目
2. 将 `dist` 目录中的所有文件复制到您的Web服务器的根目录或子目录
3. 确保您的服务器已配置为正确处理单页应用（SPA）路由

## 自定义域名设置

大多数托管服务都支持自定义域名：

1. 在您的域名注册商处配置DNS记录，指向您的托管服务提供的IP地址或CNAME
2. 在托管服务的设置中添加您的自定义域名
3. 配置SSL证书以启用HTTPS（大多数托管服务提供免费的SSL证书）

## 部署后的检查

部署完成后，请检查以下内容：

1. 访问网站URL，确保所有页面都能正常加载
2. 测试导航功能，确保路由正常工作
3. 测试咨询表单提交功能，确保数据能正确保存到localStorage
4. 检查响应式设计，确保在不同设备上都有良好的显示效果

## 数据存储说明

本项目使用浏览器的localStorage存储咨询数据，这意味着：

- 数据只存储在用户的浏览器中，不会同步到服务器
- 不同用户之间的数据是隔离的
- 清除浏览器缓存或使用不同的浏览器会导致数据丢失
- 如果需要服务器端数据存储，需要开发后端API服务

## 注意事项

1. 本项目为前端演示应用，数据仅存储在本地浏览器中
2. 如需将数据存储到服务器，请开发相应的后端服务
3. 部署前请确保更新项目中的联系信息、公司地址等内容
4. 建议定期备份您的部署配置和重要数据

祝您部署顺利！如有任何问题，请随时咨询。