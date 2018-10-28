<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
            :items="items"
            :rows-per-page-items="[-1]"
            :hide-actions="!!simple"
            content-tag="v-layout"
            row
            wrap
    >
      <h2 slot="header" class="headline subject">{{title}}</h2>
      <v-flex
              slot="item"
              slot-scope="props"
              xs12
              md4
      >
        <v-card :to="props.item.regularPath" height="100%">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ props.item.title }}</h3>
              <div v-html="strip(props.item.frontmatter.summary || '')" class="summary"></div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    name: 'PostIterator',
    props: {
      title: String,
      items: Array,
      simple: Boolean
    },
    data () {
      return {
      }
    },
    methods: {
      strip (body) {
        return body.replace(/\n/g, " ").substring(0, 128)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .subject
    margin-bottom 1rem
  .summary
    color grey
    word-break break-all
</style>
