# 🖼️ Image-to-Code - AI 驱动的图片转代码

**Image-to-Code** 是一款利用先进 AI 模型，将设计稿图片自动转换为高质量代码的应用程序。无论你是前端开发者、设计师还是企业用户，只需上传你的设计稿并选择适合的 AI 模型，Image-to-Code 都能迅速为你生成精准、可编辑且可实时预览的代码，助你快速实现创意，极大提升开发效率。

✨ **将设计转化为实际代码，一键体验智能开发新模式！**

## 📸 项目预览

<!-- ![demo](./public/demo/image-to-code.gif) -->

## 🚀 主要功能

### 🌟 **图片智能转代码**

- **上传设计稿**：支持各类图片格式，轻松上传你的设计稿。
- **模型选择**：支持多种 AI 模型（OpenAI ,Google,Deepseek等），根据需求灵活选择。
- **实时代码预览**：立即查看生成的代码效果，可直接交互编辑并实时反馈。

### ⚙️ **代码生成管理**

- **重新生成功能**：一键重新生成代码，快速优化结果。
- **生成历史记录**：保存并管理所有生成的图片与代码结果，便于随时查阅。

### 🔐 **用户账户与安全**

- **Firebase 用户认证**：安全快捷的用户登录与注册体验。
- **Neon 数据存储**：可靠的云端数据库，安全存储用户数据与生成记录。

### 🎨 **个性化设置**

- **模型参数自定义**：提供自定义的模型参数和描述信息，精准调整生成效果。
- **深色与浅色模式**：支持主题自由切换，满足不同用户视觉喜好。

## 🛠️ 技术栈

### 🌐 **前端技术**

- **Next.js 15**：SSR & SSG 支持，高性能 SEO 友好。
- **Tailwind CSS & Tailwind CSS Animate**：快速实现现代、响应式交互体验。
- **Radix UI**：高品质 UI 组件库，构建稳定流畅的用户界面。
- **Sandpack**：实现高效代码在线预览与编辑功能。

### 💻 **后端 & AI 模型**

- **Firebase**：用户认证与云存储管理。
- **Neon Database & Drizzle ORM**：高效安全的数据存储与管理。
- **OpenAI API**：核心 AI 能力，实现精准图片识别与代码生成。
- **Axios**：轻松实现前后端数据请求。

### 🛠 **开发与部署工具**

- **Docker (可选)**：支持本地及云端容器化部署。
- **Vercel**：一键部署应用到生产环境。

---

## 📦 快速开始

### 前置要求

- ✅ [Node.js](https://nodejs.org/) (>= 18.x)
- ✅ [Firebase 项目](https://firebase.google.com/)
- ✅ [Neon 数据库账号](https://neon.tech/)
- ✅ [OpenAI API 密钥](https://platform.openai.com/api-keys)

### 安装步骤

```bash
git clone https://github.com/geallenboy/image-to-code.git
cd image-to-code

# 安装依赖
pnpm install

# 配置环境变量
cp .env.example .env
# 根据注释配置 Firebase、Neon 和 OpenAI API 参数

# 运行开发服务器
pnpm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 开始使用。

---

## 🤝 贡献指南

1. Fork 本项目并创建新分支。
```bash
git checkout -b feature/your-feature
```
2. 提交你的改动。
   ```bash
   git commit -m "✨ 新增实时编辑功能"
   ```
3. 推送到远程分支。
   ```bash
   git push origin feature-branch-name
   ```
4. 发起 Pull Request。

---

## 📮 联系作者

如果你对 Image-To-Code 感兴趣，或者希望合作，请随时联系我！💬

📧 **Email**：[gejialun88@gmail.com](mailto:gejialun88@gmail.com)  
🐦 **Twitter**：[gejialun88](https://x.com/gejialun88)  
🌐 **个人网站**：[我的网站](https://gegarron.com)  
💬 **微信**：gegarron

---

## 🚀 Star & Fork

如果你觉得 **Image to Code** 项目对你有帮助，请点击 ⭐ Star 和 Fork 支持一下，谢谢！

🔗 **GitHub 仓库**：[Image to Code](https://github.com/geallenboy/image-to-code)

---

### 🔥 为什么选择 Image to Code？

- ✅ **AI 自动生成**：高效、精准将设计稿转化为代码。
- ✅ **实时预览与编辑**：即时反馈，减少开发迭代周期。
- ✅ **丰富模型支持**：灵活切换模型，满足多场景需求。
- ✅ **安全可靠**：Firebase & Neon 强强联合，保障数据安全。

🔥 **马上体验，从设计稿到代码，一键完成！** 🚀

