<template>
  <transition name="slide">
    <div class="movie-detail">
      <div class="head">
        <i class="icon-circle-down back" @click.prevent="back"></i>
        <p class="charts">
          <i class="icon-fire fire"></i>
          <span>1759</span>人正在热议
          <i class="icon-circle-down down"></i>
        </p>
        <i class="icon-share2 share"></i>
      </div>
      <detail-view :pmovie="pmovie" v-if="pmovie"></detail-view>
    </div>
  </transition>
</template>

<script>
  import { getMovieDetail } from 'apis/hot'
  import { mapGetters } from 'vuex'

  import DetailView from 'base/detail-view/detail-view'
  export default {
    data() {
      return {
        pmovie: null
      }
    },
    created() {    
      this._getMovieDetail()
    },
    methods: {
      back() {
        this.$router.back()
      },
      _getMovieDetail() {
        if (!this.movie){
         this.$router.push('/hot')
         return
        }
        getMovieDetail(this.movie.id).then((res) => {
          if(res) {
            this.pmovie = res    
          }
        })
      }
    },
    computed: {
      ...mapGetters(['movie'])
    },
    components: {
      DetailView
    }
  }
</script>

<style lang="stylus" scoped>
  .slide-enter-active, .slide-leave-active
    transition all 0.3s
  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
  .movie-detail
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    background-color #fff
    z-index 100
    .head
      display flex
      height 40px
      width 100%
      position fixed
      top 0
      justify-content space-between
      padding 0 20px
      z-index 100
      .back
        transform-origin 50% 50%
        line-height 40px
        font-size 22px
        transform rotate(90deg)
        color #fff
      .charts
        height 24px
        background-color #fff
        padding 0 14px
        color #666
        margin 8px 0
        border-radius 12px
        line-height 24px
        font-size 12px
        .fire
          color orange
          margin-right 8px
        .down
          transform-origin 50% 50%
          transform rotate(90deg)
          margin-left 8px
      .share
        line-height 40px
        color #fff
</style>
