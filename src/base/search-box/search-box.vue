<template>
    <div class="wrapper">
        <i class="icon-search icon"></i>
        <input type="text" v-model="query" :placeholder="placeholder" class="input">
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {
               type: String,
               default: '电影 / 电视剧 / 影人'
            }
        },
        data() {
            return {
              query: ''
            }
        }

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrapper
    height:34px
    padding-left: 60px
    margin: 5px 0
    position relative
    background-color #e2e2e2
    border-radius: 4px
    .icon
      position absolute
      left: 38px
      top: 10px
      color: #888
      font-size: 14px
    .input
      width 100%
      height: 100%
      background-color transparent
      outline none
</style>