<template>
  <v-app>
    <v-toolbar app fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{this.$siteTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app fixed>
      <v-list dense>
        <v-list-tile
                v-for="item in menuList"
                :key="item.title"
                :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon || '' }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title :class="item.child ? 'child' : ''">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <slot></slot>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        drawer: true
      }
    },
    computed: {
      menuList () {
        const menu = this.$site.themeConfig.menu
        const currentPage = this.$page
        const pages = this.$site.pages
        return this.expand({menu, currentPage, pages})
      }
    },
    methods: {
      expand ({menu, currentPage, pages}) {
        const rootDir = /^\/.+\/$/
        return menu.flatMap(item => {
          if (!currentPage.path.startsWith(item.link)) {
            return [item]
          }
          if (item.link === '/category/') {
            const children = this.$categories.list.map(c => ({ title: c.name, link: c.path, child: true }))
            return [item, ...children]
          }
          if (item.link === '/tag/') {
            const children = this.$tags.list.map(c => ({ title: c.name, link: c.path, child: true }))
            return [item, ...children]
          }
          if (item.link.search(rootDir) !== -1) {
            const index = pages
                .filter(p => p.path === item.link)
                .map(p => ({ title: p.title || 'Overview', link: p.path + (p.path === currentPage.path ? '' : 'index.html'), child: true }))
            const children = pages
                .filter(p => p.path !== item.link && p.path.startsWith(item.link))
                .map(p => ({ title: p.title || p.path, link: p.path, child: true }))
            return [item, ...index, ...children]
          }
          return [item]
        })
      }
    }
  }
</script>

<style lang="stylus">
  .child
    margin-left 1rem
</style>