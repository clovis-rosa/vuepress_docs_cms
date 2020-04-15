module.exports = {
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  title: 'DEV | DOCS | TIPS',
  description: 'A online documented Recipe for Disaster!',
  themeConfig: {
    lastUpdated: 'Last Updated',
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
          '/installation/',
          '/advanced/',
        ]
      }
    ]
  },
  dest: 'public'
}
