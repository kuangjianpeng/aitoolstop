import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '精选 AI 工具',
  description: 'AI 模型、工具与开源项目导航',
  cleanUrls: true,
  head: [
    ['meta', { name: 'keywords', content: 'AI工具,AI工具导航,AI导航网站,AI模型,AI网站入口,AI视频工具,AI绘画工具,AI写作工具,AI办公工具,AI编程工具,即梦AI,DeepSeek' }],
    ['meta', { name: 'author', content: '精选AI工具' }],
    ['meta', { name: 'application-name', content: '精选AI工具' }],
    ['meta', { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' }],
    ['meta', { name: 'googlebot', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' }],
    ['meta', { name: 'baiduspider', content: 'index,follow' }],
    ['meta', { name: 'theme-color', content: '#2f69d9' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['link', { rel: 'canonical', href: 'https://www.aitoolstop.cn/' }],
    ['link', { rel: 'alternate', hreflang: 'zh-CN', href: 'https://www.aitoolstop.cn/' }],
    ['link', { rel: 'alternate', hreflang: 'x-default', href: 'https://www.aitoolstop.cn/' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: '精选AI工具' }],
    ['meta', { property: 'og:title', content: '精选AI工具 - AI工具导航、AI模型与国内外AI网站入口' }],
    ['meta', { property: 'og:description', content: '精选国内外优质AI工具与模型，覆盖视频、绘画、写作、办公和编程，一站发现，快速直达官方网站。' }],
    ['meta', { property: 'og:url', content: 'https://www.aitoolstop.cn/' }],
    ['meta', { property: 'og:image', content: 'https://www.aitoolstop.cn/assets/og-cover.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: '精选AI工具 - 发现真正好用的AI工具' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: '精选AI工具 - AI工具导航与模型入口' }],
    ['meta', { name: 'twitter:description', content: '精选国内外优质AI工具与模型，一站发现，快速直达官方网站。' }],
    ['meta', { name: 'twitter:image', content: 'https://www.aitoolstop.cn/assets/og-cover.png' }],
    ['script', { src: 'https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js' }],
    ['script', { src: '/site.js', defer: true }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://www.aitoolstop.cn/#website',
          url: 'https://www.aitoolstop.cn/',
          name: '精选AI工具',
          alternateName: '精选AI工具导航',
          description: '收录国内外优质AI模型和AI工具的专业导航网站。',
          inLanguage: 'zh-CN',
          publisher: { '@id': 'https://www.aitoolstop.cn/#organization' }
        },
        {
          '@type': 'Organization',
          '@id': 'https://www.aitoolstop.cn/#organization',
          name: '精选AI工具',
          url: 'https://www.aitoolstop.cn/',
          logo: { '@type': 'ImageObject', url: 'https://www.aitoolstop.cn/favicon.svg' }
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.aitoolstop.cn/#webpage',
          url: 'https://www.aitoolstop.cn/',
          name: '精选AI工具 - AI工具导航、AI模型与国内外AI网站入口',
          description: '精选国内外优质AI工具与模型，覆盖AI视频、AI绘画、AI写作、AI办公和AI编程。',
          isPartOf: { '@id': 'https://www.aitoolstop.cn/#website' },
          about: { '@id': 'https://www.aitoolstop.cn/#organization' },
          inLanguage: 'zh-CN'
        }
      ]
    })]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 模型', link: '/#ai-模型' },
      { text: 'AI 工具', link: '/#ai-工具' }
    ],
    socialLinks: []
  }
})
