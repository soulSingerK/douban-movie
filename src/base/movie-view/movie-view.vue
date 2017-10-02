<template>
  <scroll :data="data" class="item-view">
    <ul class="items">
      <li v-for="item in data" class="item border1px">
        <img :src="item.images.small" alt="" width="70px" height="110px">
        <div class="content">
          <div class="con-left">
            <p class="title">{{item.title}}</p>
            <p><span>评分：</span>{{item.average}}</p>
            <div>
              <span>导演：</span>
              <span>{{item.director.name}}</span>
            </div>
            <p>
              <span>主演：</span>
              {{combime_name(item.casts)}}                
            </p> 
          </div>
          <div class="con-right">
            <p class='text'>{{item.collect_count | filterCount}}人看过</p>
            <button class="btn">购票</button>
          </div>
        </div>
        
      </li>
    </ul>
  </scroll>
</template>

<script>
  import scroll from 'base/scroll/scroll'
  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    methods: {
      combime_name(casts) {
        let names = ''
        for(let i = 0 , len = casts.length ; i < len ; i++) {
          names += casts[i].name + ' / '
        }
        return names.substring(0, names.length - 2)
      }
    },
    filters: {
      filterCount(num) {
        if (num < 10000) {
          return num
        }
        return (num / 10000).toFixed(1) + '万'
      }
    },
    components: {
      scroll
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item-view
    height: 100%
    width: 100%
    position: relative
    .items
      .item
        padding: 10px 16px
        display flex
        .content
          flex 1
          margin-left 16px
          font-size 12px
          color #999
          line-height 1.5
          display flex
          justify-content space-between
          .con-left
            flex 1
            .title
              font-size 16px
              font-weight bold
              color #333
          .con-right
            margin-left 20px
            margin-top 16px
            .text 
              color #ef5200
              line-height 2.5
              font-size 12px
            .btn
              border 1px solid #ef5200
              padding 5px 20px
              background-color #ffffff
              color #ef5200
              border-radius 4px
              
</style>