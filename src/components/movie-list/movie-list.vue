<template>
  <div>
    <movie-view></movie-view>  
    <router-view></router-view>
  </div>
</template>

<script>
  import MovieView from 'base/movie-view/movie-view'
  export default {
    components: {
      MovieView
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 
</style>