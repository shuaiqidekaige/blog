<template>
  <ul class="article-list">
    <template v-for="(item, index) in articles">
      <ArticleItem :key="index" :article="item" />
    </template>
  </ul>
</template>

<script lang="ts">
import ArticleItem from './blogArticleItem.vue'
export default {
  components: {
    ArticleItem,
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
