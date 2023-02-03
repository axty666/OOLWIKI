module.exports = {
  title: 'OOLWIKI',
  description: '一场童话般的冒险旅程。',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  plugins: ['@vuepress/back-to-top'], // 返回顶部
  plugins: ['vuepress-plugin-smooth-scroll'], // 平滑滚动
  plugins: ['vuepress-plugin-git-log', { // 页面中集成git 日志
    additionalArgs: '--no-merge',
    onlyFirstAndLastCommit: false, // 不止只搜索第一个和最后一个 commit
  },],
  plugins: ["music-bar", { // 音乐播放器
    //playList: [""], // 手动添加歌曲,支持 URLs 或 base64 data URIs ,默认为空
    platform: [{
      name: "music.163.com",
      //songIDs:[]//支持多个歌曲 ID
      playListIDs: ["7024322929"] // 支持多个歌单 ID
    }],
    timeOut: 2000, //加载超时,单位毫秒,默认2000
    firstClickPlay: true //首次点击自动播放,对移动端友好
    //debugMode: <Boolean> Development mode, if in the dev environment,
    //                     output log to console, enabled by default
    //background: <String> //主容器样式  // Main container style
    //                       default: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)"
    //frameColor: <String> default: $accentColor
  }],
  plugins: ['last-reading', { // 记录上次阅读并提示返回
    popupConfig: { // 弹窗
      message: '前往上次阅读的地方？', // 弹窗文本
      buttonText: '润润润！', // 弹窗按钮文本
      popupComponent: 'WIKIPopup' // 弹窗样式
    },
  }],
  plugins: ['copyright', {
    noCopy: true, // 选中的文字将无法被复制
    authorName: 'OOL WIKI', // 作者姓名
    clipboardComponent: '/CCopyBoard.js', // 自定义剪贴板内容
    minLength: 100, // 如果长度超过 100 个字符
  },
  ],
  /** 纪念模式 去掉注释启用
  plugins: ['graysite',{
      startDate: '2020-04-03 00:00:00',
      endDate: '2020-04-04 23:59:59'
    }],
     */
  plugins: ['qrcode', {
    labelText: { //显示的文本
      "/": "扫一扫继续阅读",
      "/zh/": "扫一扫继续阅读",
    },
    size: 'small' // 二维码大小
  }],
  plugins: ['vuepress-plugin-zooming', { // 图片点击缩放
    selector: '.my-wrapper .my-img',
    delay: 100, // 延时100ms后允许缩放
    options: {
      bgColor: 'black', // 缩放时背景颜色
      zIndex: 10000,
    },
  }],
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
      { text: '基础系统', link: '/basic/' },
      { text: '植物合集', link: '/plant/' },
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
