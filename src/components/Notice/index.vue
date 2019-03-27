<template>
  <div id="notice">
      <i class="icon icon-notice"></i>
      <div class="notice-detail">
        <MarkDown :content="item.body" :onlyRender="true" v-for="(item,i) in notice" :key="item.number" :title="i" />
      </div>
    </div>
</template>

<script>
import MarkDown from '@/components/MarkDown'

export default {
    name: 'Notice',
    components: {
        MarkDown
    },
    data() {
        return {
            notice: []
        }
    },
    created() {
        this.queryNotice()
    },
    methods: {
        async queryNotice() {
            let a = await this.$store.dispatch('queryNotice')
            this.notice = a
            console.log(a)
        }
    }
}
</script>

<style lang="less" scope>
@import './index.less';
</style>
