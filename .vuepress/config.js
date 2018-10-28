module.exports = {
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
