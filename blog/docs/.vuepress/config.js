module.exports = {
    title: 'java乐园',// 设置网站标题
    description: '牛魔王的博客',
    base: '/',   // 设置站点根路径
    dest: '.vuepress/dist',  // 设置输出目录
    port: 8086,
    head: [],
    plugins: [],
    themeConfig: {
        // 添加导航栏
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '生活', link: '/life/'},
            { text: '学习',
                items: [
                    { text: '英语', link: '/study/english/english01' },
                    { text: '数学', link: '/study/math/math01' },
                ]
            }
			],
        // 为以下路由添加左侧边栏
        sidebar: {
            '/life/': [
                {
                    title: '生活测试',
                    collapsable: false,
                    children: [
                        { title: '生活测试01', path: '/life/life01' },
                        { title: '生活测试02', path: '/life/life02' },
                        { title: '生活测试03', path: '/life/life03' },
                    ]
                }
            ],
        },
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated'
    }
}