<template>
  <div id="home">
    <BlogArticle :articles="list" />
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      list: [
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03'
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03'
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03'
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03'
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03'
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03'
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03'
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03'
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#home {
  width: 100%;
}
</style>
