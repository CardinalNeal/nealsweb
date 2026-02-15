import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // 关键：启用 class 模式的暗黑支持
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#1d1e20', // 学术灰黑
        },
        text: {
          light: '#1a1a1a', // 接近纯黑的深灰
          dark: '#e5e5e5', // 柔和的浅灰
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // 确保你安装了 npm install -D @tailwindcss/typography 
  ],
};
export default config;