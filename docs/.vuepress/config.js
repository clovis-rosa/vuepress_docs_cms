module.exports = {
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  title: 'DEV | DOCS | TIPS',
  description: 'A online documented Recipe for Disaster!',
  themeConfig: {
    smoothScroll: true,
    lastUpdated: 'Last Updated', // string | boolean
    editLinkText: 'Help us improve this page!', // custom text for edit link. Defaults to "Edit this page"
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'Guide',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          '/guide/',
          '/css-units/',
          '/installation/',
          '/advanced/',
        ]
      },
      {
        title: 'Useful Links',
        path: '',
        collapsable: true,
        sidebarDepth: 0,
      }
    ]
  },
  dest: 'public'
}
