const path = require('path')
const { glob } = require('glob')

console.log('entryFiles-leetcode', createArr('leetcode'))
console.log('entryFiles-vue', createArr('vue'))
module.exports = {
  title: "wangshuai",
  description: "webwangshuai、王帅的个人主页",
  dest: "dist",
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    [ "link", { rel: "icon", href: "/favicon.ico" }],
    [ "meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
    [ "meta", { name: "keywords", content: "webwangshuai,王帅,王帅的个人主页" }],
    [ "meta", { name: "description", content: "webwangshuai,王帅,王帅的个人主页" }]
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "文档",
        icon: "reco-message",
        items: [
          {
            text: "算法",
            link: "/docs/leetcode/",
            icon: "reco-document"
          },
          {
            text: "vue",
            link: "/docs/vue/",
            icon: "reco-document"
          }
        ]
      },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "掘金",
            link: "https://juejin.cn/user/3562073406318712",
            icon: "reco-juejin",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
      "/docs/leetcode/": createArr('leetcode'),
      "/docs/vue/": createArr('vue'),
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
    ],
    logo: "/avatar.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "wangshuai",
    authorAvatar: "/avatar.png",
    record: "wangshuai",
    startYear: "2017",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          // 网络文件示例
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]  
      }
    ]
  ]
};


function createArr (dirnames) {
  const entryFiles = glob.sync(path.join(__dirname, `../docs/${dirnames}/**/*`))
  let newArr = entryFiles.map(item => {
    let reg = /(\d+)\.md$/
    let matchs = item.match(reg)
    return matchs && matchs[1] || ''
  }).sort((a, b) => a-b)
  return newArr
}
