<template>
  <div id="footer">
    <div class="menu" v-if="!$isMobile">
      <APlayer :class="isMini && 'mini'" :audio="audio" fixed mini @update:mini="handleUpdate" />
    </div>
    <div class="site-info">
      <p><i class="icon icon-copyright"></i>2019 <i class="icon icon-heart"></i> lin1heart</p>
      <p>
        Theme -
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/chanshiyucx/aurora">Aurora</a> |
        一生一期 - 一期一会
      </p>
    </div>
    <div v-if="!$isMobile" class="like">
      <i :class="['icon', 'icon-heart', 'cursor', isLikeSite && 'active']" @click="likeSite"></i>
      <p class="popup">
        已有 <span>{{ likeTimes }}</span> 人点赞了哦！
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Footer',
  data() {
    return {
      tipsTimer: '',
      isLikeSite: window.localStorage.getItem('isLikeSite', true),
      likeTimes: 0,
      audio: this.$config.APlayer,
      isMini: true
    }
  },
  computed: mapState({
    tips: state => state.tips,
    tipsUpdateAt: state => state.tipsUpdateAt
  }),
  mounted() {
    if (!this.$isMobile) {
      this.queryLike()
    }
  },
  methods: {
    // 点赞数
    async queryLike() {
      this.likeTimes = await this.$store.dispatch('queryLike', 'getTimes')
    },
    // 点赞
    async likeSite() {
      if (this.isLikeSite) return
      this.likeTimes = await this.$store.dispatch('queryLike')
      this.isLikeSite = true
      window.localStorage.setItem('isLikeSite', true)
    },
    handleUpdate(isMini) {
      this.isMini = isMini
    }
  }
}
</script>

<style lang="less" scope>
@import './index.less';
</style>
