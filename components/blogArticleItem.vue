<template>
  <li class="article-item">
    <h3 class="title ellipsis">{{ article.title }}</h3>
    <span class="date ellipsis">{{ article.date }}</span>
    <p class="sub-title">{{ article.subTitle }}</p>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style lang="less" scoped>
.article-item {
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  .title {
    font-size: 24px;
    color: #000;
    margin-bottom: 5px;
  }
  .date {
    color: #7f8c8d;
    font-weight: 400;
  }
  .sub-title {
    color: #24292e;
    font-size: 16px;
    margin-top: 10px;
  }
  &:hover {
    .title,
    .date,
    .sub-title {
      color: #1890ff;
    }
  }
}
</style>
