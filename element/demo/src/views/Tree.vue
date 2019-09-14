<template>
  <div class="tree">
    <h1>树性能测试</h1>
    <div class="container">
      <el-button @click="toggleExpand(true)">展开全部</el-button>
      <el-button @click="toggleExpand(false)">折叠全部</el-button>
      <div class="label">
        <span>level1: {{level1}}</span>&nbsp;
        <span>level2: {{level2}}</span>&nbsp;
        <span>level3: {{level3}}</span>&nbsp;
      </div>
      <el-slider v-model="level1"></el-slider>
      <el-slider v-model="level2"></el-slider>
      <el-slider v-model="level3"></el-slider>
      <el-tree
        ref="tree"
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
        node-key="id"
      ></el-tree>
    </div>
  </div>
</template>

<script>
import { getData } from '../mock/tree-data';

export default {
  data() {
    return {
      level1: 20,
      level2: 20,
      level3: 20,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  computed: {
    data: function() {
      return getData(this.level1, this.level2, this.level3);
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    toggleExpand(value) {
      console.log(this.$refs.tree.store)
      const startTime = Date.now();
      const { nodesMap } = this.$refs.tree.store;
      let count = 0;
      for(let key in nodesMap) {
        count++;
        nodesMap[key].expanded = value;
      }
      const endTime = Date.now();
      console.log(endTime - startTime);
      console.log(count);
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 1024px;
  height: 500px;
  max-height: 500px;
  overflow: scroll;
}
</style>