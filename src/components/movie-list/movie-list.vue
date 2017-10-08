<template>
  <div>
    <movie-view :data="data" v-if="data.length" v-show="currentIndex === 0" @selectMovie="selectMovie"></movie-view>  
    <router-view></router-view>
  </div>
</template>

<script>
  import MovieView from 'base/movie-view/movie-view'
  import {getMovies} from 'apis/hot'
  import {Movie} from 'common/js/movie'
  import {Actor} from 'common/js/actor'
  import {mapMutations} from 'vuex'

  export default {
    props: {
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        data: []
      }
    },
    created() {
      this._getMovies()
    },
    methods: {
      selectMovie(movie) {
        this.setMovie(movie)
        this.$router.push({
          path: `/hot/${movie.id}`
        })
      },
      _getMovies() {
        getMovies().then((res) => {
          let data = res.subjects
          this.data = this._handData(data)
        })
      },
      _handData(data) {
        let ret 
        ret = data.map((item,index) => {
          let director = new Actor(item.directors[0])
          let casts = []
          for(let i = 0, len = item.casts.length ; i < len ; i++) {
            casts.push(new Actor(item.casts[i]))
          }
          let movie = new Movie({
            id: item.id,
            title: item.title,
            director: director,
            collect_count: item.collect_count,
            casts,
            average: item.rating.average,
            images: item.images
          })
          return movie
        })
        return ret
      },
      ...mapMutations({
        setMovie: 'MOVIE'
      })
    },

    components: {
      MovieView
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 
</style>