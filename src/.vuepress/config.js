module.exports = {
    title: 'horse 框架体系',
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
        [
          'link',
          {
            rel: 'apple-touch-icon',
            href: '/images/icons/apple-icon-152x152.png'
          }
        ],
        [
          'meta',
          {
            name: 'msapplication-TileImage',
            content: '/images/icons/ms-icon-144x144.png'
          }
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
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'gitee', link: 'https://google.com' },
        ]
      }
  }