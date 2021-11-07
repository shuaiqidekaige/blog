<template>
  <section id="footer">
    <p>Copyright © BUPT-HJM 2017 京ICP备17032065号</p>
    <p>
      Create by<a
        href="https://github.com/shuaiqidekaige"
        target="_blank"
        class="github-link"
        >k先生的情书</a
      >
    </p>
  </section>
</template>

<script lang="ts">
export default {}
</script>
<style lang="less" scoped>
#footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #bfbfbf;
  .github-link {
    color: #868686;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
