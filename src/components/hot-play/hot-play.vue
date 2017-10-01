<template>
  <div>
    <div class="hot-head">
        <div class="left">
            <span class="text">北京</span>
            <i class="icon-circle-down"></i>
        </div>
        <div class="right">
            <serch-box></serch-box>
        </div>
    </div>
    <div class="hot-content">
      <switches :switches="switches" :currentIndex="currentIndex" @index="switchIndex"/>
      <movie-list></movie-list>
    </div>
  </div>  
</template>

<script>
    import SerchBox from 'base/search-box/search-box'
    import Switches from 'base/switches/switches'
    import MovieList from 'components/movie-list/movie-list'

    import {getMovies} from 'apis/hot'
    export default {
        created() {
          this.switches = [{
            name: '正在上映'
          },{
            name: '即将上映'
          }
          ]
          this._getMovies()
        },
        data() {
          return {
            currentIndex: 0
          }
        },
        methods: {
          _getMovies(){
            getMovies().then((res) => {
              console.log(res)
            })
          },
          switchIndex(index) {
            this.currentIndex = index
          }
        },
        components: {
            SerchBox,
            Switches,
            MovieList
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .hot-head
    height 44px
    padding 0 20px
    display flex
    .left
      height 100%
      margin-right 5px
      .text 
        line-height 44px
    .right
      flex 1
</style>