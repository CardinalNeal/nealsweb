# 🚀 Neal's Portfolio

这是一个基于 **Next.js 16** 和 **Tailwind CSS 4** 构建的极简主义个人作品集。旨在以最高性能和最干净的排版展示我的工程能力与设计审美。

---

## ✨ 核心特性

* **⚡ 极致性能**：基于 Next.js App Router 构建，支持服务端渲染 (SSR) 和静态生成 (SSG)。
* **🎨 现代美学**：使用最新的 Tailwind CSS 4 引擎，实现流畅的响应式布局与暗黑模式切换。
* **✍️ MDX 驱动**：博客内容由 `next-mdx-remote` 驱动，支持在 Markdown 中编写 React 组件。
* **🌓 主题自适应**：原生支持深色/浅色模式，跟随系统偏好。

## 🛠️ 技术栈

| 类别 | 技术 |
| :--- | :--- |
| **框架** | [Next.js 16](https://nextjs.org/) (React 19) |
| **样式** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **内容** | Markdown / MDX (gray-matter) |
| **部署** | [Vercel](https://vercel.com/) |
| **组件** | Lucide React (图标库) |

## 🚀 快速开始

```bash
npm run dev
```
打开 http://localhost:3000 即可预览。

📁 项目结构
/app: 核心页面路由与布局逻辑。

/content: 存放你的 Markdown (.md/mdx) 文章。

/public: 存放头像、项目截图等静态资源。

/styles: 包含 globals.css（Tailwind 4 配置）。

📝 自定义内容
修改个人信息：前往 app/page.tsx 或相关的配置文件修改文案。

发布新文章：只需在 /content 文件夹下添加新的 .md 文件即可自动同步。
---
Made with ❤️ by Neal