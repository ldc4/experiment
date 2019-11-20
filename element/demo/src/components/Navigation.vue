<template>
  <div class="navigation">
    <h1>文档链接</h1>
    <p>
      <a href="https://cli.vuejs.org/zh/" target="_blank" rel="noopener">vue-cli</a>&nbsp;
      <a href="https://cn.vuejs.org/" target="_blank" rel="noopener">vue</a>&nbsp;
      <a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener">vue-router</a>&nbsp;
      <a href="https://vuex.vuejs.org/zh/" target="_blank" rel="noopener">vue-router</a>&nbsp;
      <a href="https://element.eleme.io/#/zh-CN" target="_blank" rel="noopener">vue-router</a>&nbsp;
    </p>
    <h3>Demo</h3>
    <ul>
      <li><router-link to="/tree">Tree</router-link></li>
      <li><router-link to="/cascader">Cascader</router-link></li>
      <li><router-link to="/dialog">Dialog</router-link></li>
      <li><router-link to="/table">Table</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
