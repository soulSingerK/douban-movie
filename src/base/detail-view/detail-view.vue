<template>
  <scroll ref="scroll" class="scroll">
    <div  class="dview">
      <div class="dview-head">
        <img :src="pmovie.images.medium" alt="">
      </div>
      <div class="dview-title">
        <h1 class="title">{{pmovie.title}}</h1>
        <p>{{pDate}}</p>
        <p><span>上映时间：</span>{{pmovie.pubdates[0]}}</p>
        <p><span>片长：</span>{{pmovie.durations[0]}}</p>
      </div>
      <div class="dview-intro">
        <span class="intro">简介</span>
        <p ref="introp" :class="{'active': isOpen}">{{pmovie.summary}} </p>
        <span v-show="isOpen" @click.prevent="open" class="btn">展开</span>
        <span v-show="!isOpen" @click.prevent="close" class="btn">收起</span>
      </div>
      <div class="actors">
        <span class="label">影人</span>
        <div class="slideX" ref="slidex">
          <ul class="clear-fix"  ref="wrapper" >
            <li class="item" v-for="item in casts">
              <a :href="item.alt">
                <img :src="item.avatars.small" alt="">
                <span class="name">{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        isOpen: true
      }
    },
    props: {
      pmovie: {
        type: Object,
        default: null
      }
    },
    mounted() {
      setTimeout(()=>{
        this._initWidth()
        this._initActors()
      }, 20)
    },
    methods: {
      open() {
        this.isOpen = !this.isOpen
        this.$refs.scroll.refresh()
      },
      close() {
        this.isOpen = !this.isOpen
        this.$refs.scroll.refresh()
      },
      _initWidth() {
        let len = this.casts.length
        this.$refs.wrapper.style.width = len * 90 + 'px'
      },
      _initActors() {
        this.slider = new BScroll(this.$refs.slidex, {
          scrollX: true,
          scrollY: false,
          click: true
        })
      }
    },
    computed: {
      pDate() {
        console.log(this.pmovie)
        let str = ''
        this.pmovie.genres.forEach((item) => {
          str += ' / ' + item
        })
        return this.pmovie.year + str
      },
      casts() {
        return this.pmovie.directors.concat(this.pmovie.casts)
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="stylus" scoped>
  .scroll
    height 100%
    width 100%
    overflow hidden
    .dview-head
      height 250px
      background-color #888
      position relative
      img 
        position absolute
        left 50%
        top 50%
        transform translate3d(-50%, -50%, 0)
    .dview-title
      padding: 20px
      .title
        font-size 20px
        font-weight bold
        margin-bottom 20px
      p
        color #888
        line-height 1.5
    .dview-intro
      padding 0 20px 20px
      position relative
      .intro
        color #888
        display block
        margin-bottom 10px
      p
        line-height 1.5
        color #333
        &.active
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
      .btn
        color green
        line-height 1
        position absolute
        bottom 0 
        right 20px
    .actors
      padding 20px 0 20px 20px
      .label
        color #888 
      .slideX
        overflow hidden
        margin-top 20px
        width 100%
        .item
          float left
          width 70px
          margin-right 20px
          .name
            display block
            font-size 12px
            color #333
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
            text-align center
</style>
