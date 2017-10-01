<template>
  <div id="app">
    <router-view></router-view>
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
