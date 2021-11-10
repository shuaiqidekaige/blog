<template>
  <div id="app">
    <BlogHeader />
    <section class="container">
      <section class="content">
        <section class="page"><nuxt /></section>
        <BlogContentRight />
      </section>
      <BlogFooter />
    </section>
  </div>
</template>

<script lang="ts">
import BlogHeader from './header.vue'
import BlogFooter from './footer.vue'
import BlogContentRight from './contentRight.vue'
export default {
  components: {
    BlogHeader,
    BlogFooter,
    BlogContentRight,
  }
}
</script>
<style lang="less" scoped>
#app {
  display: flex;
  height: 100%;
  flex-direction: column;
  .container {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 32px 0;
    overflow-y: auto;
    .content {
      display: flex;
      width: 80%;
      max-width: 1200px;
      margin: 0 auto;
      align-items: flex-start;
      flex: 1;
    }
    .page {
      flex: 1;
      min-width: 1px;
      margin-right: 100px;
    }
  }
}
</style>
