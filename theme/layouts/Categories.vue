<template>
  <App>
    <PostGroupIterator :items="items"></PostGroupIterator>
  </App>
</template>

<script>
  import App from './App'
  import PostGroupIterator from '../components/PostGroupIterator'
  export default {
    name: 'Categories',
    components: { App, PostGroupIterator },
    data () {
      return {
      }
    },
    computed: {
      items () {
        return this.$categories.list.filter(t => t.name !== 'Portfolio')
      }
    }
  }
</script>

<style lang="stylus">
</style>