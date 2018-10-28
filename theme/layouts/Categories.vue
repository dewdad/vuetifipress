<template>
  <App>
    <div class="content default">
      <PostGroupIterator :items="items"></PostGroupIterator>
    </div>
  </App>
</template>

<script>
  import App from '../components/App'
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
        return this.$categories.list
      }
    }
  }
</script>

<style lang="stylus">
</style>