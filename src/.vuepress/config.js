const sidebar = {
    guide: [
        {
            title: '基础',
            collapsable: false,
            children: [
                '/guide/introduction',
                '/guide/installation',
            ]
        },
    ]
}

module.exports = {
    title: 'horse 架构',
    description: '',
    head: [
        [
            'link',
            {
                href:
                    'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
                rel: 'stylesheet'
            }
        ],
        [
            'link',
            {
                href:
                    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
                rel: 'stylesheet'
            }
        ],
        [
            'link',
            {
                rel: 'icon',
                href: '/logo.png'
            }
        ],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
        [
            'meta',
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
        ],

        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        // localization for china
        [
            'script',
            {
                src: 'https://player.youku.com/iframeapi'
            }
        ]
    ],
    themeConfig: {
        nav: [
            {
                text: '文档',
                ariaLabel: '文档菜单',
                items: [
                    {
                        text: '教程',
                        link: '/guide/introduction'
                    },
                   
                ]
            },
            {
                text: '常用技术网站',
                ariaLabel: '常用技术网站',
                items: [
                    {
                        text: 'vue官网',
                        link: 'https://v3.cn.vuejs.org/'
                    },
                    {
                        text: 'react官网',
                        link: 'https://react.docschina.org/'
                    },
                    {
                        text: 'springboot官网',
                        link: 'https://spring.io/projects/spring-boot'
                    },
                ]
            },
            {
                text: '常用ui框架',
                ariaLabel: '常用ui框架',
                items: [
                    {
                        text: 'antd官网',
                        link: 'https://ant.design/index-cn'
                    },
                    {
                        text: 'element ui',
                        link: 'https://element-plus.gitee.io/zh-CN/'
                    },
                    {
                        text: 'antd-mobile',
                        link: 'https://mobile.ant.design/zh'
                    },
                ]
            },
        ],
        repo: 'SmileCorporation/horse-docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最近更新时间',
        docsDir: 'src',
        sidebarDepth: 2,
        sidebar: {
            collapsable: false,
            '/guide/': sidebar.guide,
        },

        smoothScroll: false,
        carbonAds: {
            carbon: 'CEBDT27Y',
            custom: 'CKYD62QM',
            placement: 'vuejsorg'
        },
        topBanner: false
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer(timestamp) {
                    const date = new Date(timestamp)

                    const digits = [
                        date.getUTCFullYear(),
                        date.getUTCMonth() + 1,
                        date.getUTCDate(),
                        date.getUTCHours(),
                        date.getUTCMinutes(),
                        date.getUTCSeconds()
                    ].map(num => String(num).padStart(2, '0'))

                    return '{0}-{1}-{2}, {3}:{4}:{5} UTC'.replace(
                        /{(\d)}/g,
                        (_, num) => digits[num]
                    )
                }
            }
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    '/': {
                        message: '内容有更新',
                        buttonText: '刷新'
                    }
                }
            }
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'info',
                before: info =>
                    `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
                after: '</div>'
            }
        ]
    ],
}