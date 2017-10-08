<template>
    <div class="tab borderT1px">
      <router-link to="/hot" class="item" tag="div">
        <i class="icon-fire icon"></i>
        <span class="text">热映</span>
      </router-link>
      <router-link to="/find" class="item" tag="div">
        <i class="icon-eye icon"></i>
        <span class="text">找片</span>
      </router-link>
      <router-link to="/user" class="item" tag="div">
        <i class="icon-user icon"></i>
        <span class="text">我的</span>
      </router-link>
    </div>
</template>

<script>
  export default{
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .tab
      position fixed
      z-index -1
      bottom 0
      left 0
      height 44px
      width 100%
      display flex
      .item
        flex 1
        display flex
        flex-direction column
        justify-content flex-end
        align-items: center
        .text
          font-size 12px
          margin 5px 0
          color #888
        .icon
          color #888
        &.router-link-active
          .text
            color #333
          .icon
            color #333
</style>