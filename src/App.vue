<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script>
  import tab from 'components/tab/tab'
  export default {
    name: 'app',
    components: {
      tab
    }
  }
</script>

<style>

</style>
