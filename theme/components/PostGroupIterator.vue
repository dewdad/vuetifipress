<template>
  <div>
    <PostIterator v-for="item in itemList"
                  :key="item.path"
                  :title="`${item.name}の最近の投稿`"
                  :items="item.posts"
                  :simple="true"
                  class="contents">
    </PostIterator>
  </div>
</template>

<script>
  import PostIterator from '../global-components/PostIterator'
  export default {
    name: 'PostGroupIterator',
    components: { PostIterator },
    props: {
      items: Array
    },
    data () {
      return {
      }
    },
    computed: {
      itemList () {
        return this.items.map(t => ({ ...t, posts: t.posts.slice(0, 3) }))
      }
    }
  }
</script>

<style scoped lang="stylus">
  .contents
    margin-bottom 2rem
</style>
