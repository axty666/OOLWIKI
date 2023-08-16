module.exports = {
  title: 'OOLWIKI',
  description: '一场童话般的冒险旅程。',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/icons/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: ['@vuepress/back-to-top'], // 返回顶部
  plugins: ['@vuepress/pwa', {
    serviceWorker: true, // 是否开启 PWA
    updatePopup: { // 用于刷新内容的弹窗
      message: "发现新内容！",
      buttonText: "刷新"
    }
  }],
  base: '/OOLWIKI/', // 这是部署到github相关的配置
  themeConfig: {
    repo: 'axty666/OOLWIKI', // 仓库地址
    docsBranch: 'main', // 文档所在分支 //欲知更多请前往https://www.vuepress.cn/theme/default-theme-config.html#git-仓库和编辑链接
    docsDir: 'docs', // 文档所在文件夹
    editLinks: true, // 启用编辑此页
    editLinkText: '编辑此页', // 编辑此页的文本
    nextLinks: true, // 上一篇
    prevLinks: true, // 下一篇
    smoothScroll: true, // 平滑滚动
    logo: '/icons/logo.png', // 导航栏Logo
    search: true, // 启用默认搜索框
    searchMaxSuggestions: 10, // 显示的搜索结果数量
    nav: [ // 导航栏配置
      { text: '基础系统', link: '/start' },
      { text: '植物合集', link: '/plant' },
      { text: '支持WIKI', link: 'https://afdian.net/@g-c-z' },
      { text: '支持整合包作者', link: 'https://afdian.net/@maryt' },
      {
        text: '切换语言', ariaLabel: 'Language Menu', // 切换语言
        items: [ // 语言栏的列表
          { text: '简体中文', link: '/' },
          { text: 'Sooooon', link: '/' }
        ]
      }
    ],
    sidebar: [
      ['/start', '前情提示'],
      ['/example', '本wiki特性'],
      ['/task/one', '第一层'],
      ['/task/two', '第二层'],
      ['/plant', '植物合集']
    ],
    sidebarDepth: 2, // 同时提取 h2 和 h3 标题(值为0-2,0为禁用)
    displayAllHeaders: true, // 显示所有页面的标题链接
    lastUpdated: '上次更新于', // 上次更新时
  }
};
