<template>
  <ul class="border1px">
    <li v-for="(item, index) in switches" :class="{'active': currentIndex === index}" 
    @click="switchIndex(index)" class="switch-item">
      <span class="text">{{item.name}}</span>
      <span class="line"></span>
    </li>
  </ul>
    
</template>

<script>
  export default {
    props: {
      switches: {
        type: Array,
        default: []
      },
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    methods: {
      switchIndex(index) {
        this.$emit('index', index)
      }
    } 
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .switch-item
    width 50%
    display inline-block
    height 40px
    position relative
    .text
      display block
      text-align center
      line-height 40px
      color #999
    .line
      display none
      position absolute
      left 0
      bottom 0
      height 2px
      width 100%
      background-color #000
    &.active  
      .line
        display block
      .text
        color #666
</style>