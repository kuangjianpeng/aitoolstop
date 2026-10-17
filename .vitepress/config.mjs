import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '精选 AI 工具',
  description: 'AI 模型、工具与开源项目导航',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 模型', link: '/#ai-模型' },
      { text: 'AI 工具', link: '/#ai-工具' }
    ],
    socialLinks: []
  }
})
