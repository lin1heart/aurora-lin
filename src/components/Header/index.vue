<template>
  <div id="header">
    <div class="inner">
      <RouterLink class="title" to="/">{{ $config.title }}</RouterLink>
      <span class="subtitle">{{ $config.subtitle }}</span>
      <ul>
        <li v-for="menu in menus" :key="menu.name">
          <RouterLink :class="['icon', `icon-${menu.icon}`]" :to="menu.name">{{ menu.title }}</RouterLink>
        </li>
      </ul>
    </div>
    <div class="notice">
      <i class="icon icon-notice"></i>
      <div class="notice-detail">
        <MarkDown :content="item.body" :onlyRender="true" v-for="(item,i) in notice" :key="item.number" :title="i" />
      </div>
    </div>
  </div>
</template>

<script>
import MarkDown from '@/components/MarkDown'
export default {
  name: 'Header',
  components: {
    MarkDown
  },
  data() {
    return {
      notice: [],
      menus: [
        { name: '/', icon: 'shop', title: '首页' },
        { name: '/archive', icon: 'inbox', title: '归档' },
        { name: '/category', icon: 'bookmark-empty', title: '分类' },
        { name: '/tag', icon: 'tag', title: '标签' },
        { name: '/mood', icon: 'comment', title: '心情' },
        { name: '/book', icon: 'pencil', title: '书单' },
        { name: '/friend', icon: 'heart', title: '友链' },
        { name: '/about', icon: 'universal-access', title: '关于' }
      ]
    }
  },
  created() {
    this.queryNotice()
  },
  methods: {
    async queryNotice() {
      let a = await this.$store.dispatch('queryNotice')
      this.notice = a
    }
  }
}
</script>

<style lang="less" scope>
@import './index.less';
</style>
