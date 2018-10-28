<template>
  <App>
    <PostIterator
            :title="targetList.filter(t => t.path === $page.path)[0].name"
            :items="target.posts">
    </PostIterator>
  </App>
</template>

<script>
  import App from '../components/App'
  import PostIterator from '../global-components/PostIterator'
  export default {
    name: 'Tag',
    components: { App, PostIterator },
    data () {
      return {
      }
    },
    computed: {
      targetList () { return this.$tags.list },
      target () { return this.$tag },
    }
  }
</script>

<style scoped lang="stylus">
  .subject
    margin-bottom 1rem
</style>
