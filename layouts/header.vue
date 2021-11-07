<template>
  <header id="blog-header">
    <nuxt-link class="title" to="/">k先生的情书</nuxt-link>
    <div class="github">
      <a href="https://github.com/shuaiqidekaige" target="_blank">
         <i class="icon iconfont icon-GitHub"></i>
      </a>
    </div>
  </header>
</template>

<script lang="ts">
export default {}
</script>
<style lang="less" scoped>
#blog-header {
  display: flex;
  height: 60px;
  line-height: 60px;
  padding: 0 32px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 1px rgb(0 0 0 / 25%);
  .title {
    font-size: 20px;
    font-weight: 600;
  }
  .icon {
    font-size: 30px;
  }
}
</style>
