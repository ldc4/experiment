<template>
  <div id="app">
    <Diff />
    <!-- <Diff2Html /> -->
    <!-- <Diff2Data /> -->
    <!-- <Editor /> -->
    <!-- <Quill /> -->
  </div>
</template>

<script>
import Diff from './components/Diff.vue'
import Diff2Html from './components/Diff2Html.vue'
import Diff2Data from './components/Diff2Data.vue'
import Editor from './components/Editor.vue'
import Quill from './components/Quill.vue'

export default {
  name: 'app',
  components: {
    Diff,
    Diff2Html,
    Diff2Data,
    Quill
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
