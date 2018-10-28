<template>
  <App>
    <div class="content default">
      <PostIterator
              :title="targetList.filter(t => t.path === $page.path)[0].name"
              :items="target.posts">
      </PostIterator>
    </div>
  </App>
</template>

<script>
  import App from '../components/App'
  import PostIterator from '../global-components/PostIterator'
  export default {
    name: 'Category',
    components: { App, PostIterator },
    data () {
      return {
      }
    },
    computed: {
      targetList () { return this.$categories.list },
      target () { return this.$category },
    }
  }
</script>

<style scoped lang="stylus">
  .subject
    margin-bottom 1rem
</style>
