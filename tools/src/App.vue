<template>
  <div id="app">
    <Diff />
  </div>
</template>

<script>
import Diff from './components/Diff.vue'

export default {
  name: 'app',
  components: {
    Diff
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
