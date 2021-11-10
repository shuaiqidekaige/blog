<template>
  <ul class="menus">
    <template v-for="(item, index) in trees">
      <li :key="index" class="menu-item">
        <a :class="['text', 'ellipsis', `font${item.level}`]" :href="`#` + item.id" :title="item.text">{{ item.text }}</a>
        <template v-if="item.children && item.children.length > 0">
          <menu-tree :trees="item.children"  style="padding-left: 10%" />
        </template>
      </li>
    </template>
  </ul>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'MenuTree',
  props: {
    trees: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
<style lang="less" scoped>
.menus {
  .font1 {
    font-size: 18px;
  }
  .font2 {
    font-size: 16px;
  }
  .font3, .font4, .font5, .font6 {
    font-size: 14px;
  }
  .text {
    display: inline-block;
    width: 100%;
    color: #bfbfbf;
    &:hover {
      color: #1890ff;
      text-decoration: underline;
    }
  }
}
</style>
