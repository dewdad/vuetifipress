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
                v-for="item in $site.themeConfig.menu"
                :key="item.title"
                :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <Content/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "Layout",
    data () {
      return {
        drawer: false
      }
    }
  }
</script>
