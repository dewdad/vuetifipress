module.exports = {
  plugins: [ '@vuepress/blog' ],
  title: 'Site Title',
  theme: 'theme',
  head: [
    ['link', {
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      rel: 'stylesheet'
    }]
  ],
  themeConfig: {
    menu: [
      {
        title: 'Home',
        icon: 'dashboard',
        link: '/'
      },
      {
        title: 'Categories',
        icon: 'folder',
        link: '/category/'
      },
      {
        title: 'Tags',
        icon: 'label',
        link: '/tag/'
      },
      {
        title: 'Posts',
        icon: 'comment',
        link: '/posts/'
      },
      {
        title: 'About',
        icon: 'face',
        link: '/about.html'
      }
    ]
  }
}
