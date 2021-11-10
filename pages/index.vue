<template>
  <div id="home">
    <div class="header">
      <span>标签：</span>
      <ul class="tags">
        <li class="tag selected">Vue</li>
        <li class="tag">React</li>
      </ul>
    </div>
    <BlogArticle :articles="list" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      list: [
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03',
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03',
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03',
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03',
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03',
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03',
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03',
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03',
        },
        {
          title: '1',
          subTitle: '2',
          date: '2021/02/03',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
#home {
  height: 100%;
  .header {
    position: sticky;
    display: flex;
    align-items: center;
    padding-bottom: 32px;
    background: #fff;
    top: 0;
    z-index: 9999;
  }
  .tags {
    display: flex;
    align-items: center;
    .tag {
      display: inline-block;
      padding: 5px 10px;
      border-radius: 4px;
      color: #bfbfbf;
      cursor: pointer;
      border: 1px solid #bfbfbf;
      margin-right: 10px;
      &:hover, &.selected {
        color: #1890ff;
        border-color: #1890ff;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
