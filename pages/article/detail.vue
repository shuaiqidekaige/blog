<template>
  <div id="article-detail">
    <section class="menu-content">
      <h3 class="title">目录</h3>
      <MenuTree :trees="trees" />
    </section>
    <article class="article" v-html="html"></article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { transformMd, generatorTreeMenu } from '../../uitls'
export default Vue.extend({
  asyncData() {
    // eslint-disable-next-line no-template-curly-in-string
    const html = transformMd(
      '# markdown-it rulezz!\n### 333\n## with markdown-it-toc-done-right rulezz even more!\n #### 111'
    )
    const trees = generatorTreeMenu(html)
    return {
      html,
      trees
    }
  },
  data() {
    return {
      a: 1,
    }
  }
})
</script>
<style lang="less" scoped>
#article-detail {
  display: flex;
  align-items: flex-start;
  .menu-content {
    position: sticky;
    width: 25%;
    top: 0;
    margin-right: 30px;
    .title {
      text-align: center;
      margin-bottom: 10px;
      color: gray;
    }
  }
  .article {
    flex: 1;
    height: 2500px;
  }
}
</style>
