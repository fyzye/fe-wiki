module.exports = {
  title: '筋斗云',
  description: '前端每周资讯速览',
  head: [
    ['link', { rel: 'icon', href: '/igroot_logo.png' }]
  ],
  // base: '/fe-wiki/',
  port: 8090,
  themeConfig: {
    displayAllHeaders: true,
    repo: 'zhb333/readme-blog',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: '查看原文|编辑此页',
    nav: [
      { 
        text: '主页', 
        link: '/' 
      }, {
        text: '资讯',
        link: '/news/'
      }
    ],
    sidebar: {
      "/news/":[
        "",
        "2019-03-05",
        "2019-03-06"
      ]
    },
  }
}