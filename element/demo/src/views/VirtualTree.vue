<template>
  <div class="virtual-tree-demo">
    <el-button v-if="!expandAll" @click="toggleExpandAll(true)">展开全部</el-button>
    <el-button v-else @click="toggleExpandAll(false)">折叠全部</el-button>
    <VirtualTree
      ref="vtree"
      class="vtree"
      v-model="tree"
      :option="virtualOption"
      :defaultExpand="expandAll"
      @node-click="handleNodeClick"
    >
      <template v-slot="{ item, index }">
        {{ item.label }}
        <i class="el-icon-delete" @click.stop="handleDelete(item)" />
      </template>
    </VirtualTree>
  </div>
</template>

<script>
import VirtualTree from '../components/VirtualTree/VirtualTree'
import { getData } from '../mock/tree-data';
import { Message } from 'element-ui';

export default {
  components: {
    VirtualTree
  },
  data() {
    return {
      tree: getData(20, 20, 20),
      virtualOption: {
        visibleHeight: 500,     // 设置可视区的高度，也可以通过样式强行覆盖高度
        itemHeight: 25,         // 单个item的高度
        flexCount: 100          // 如果滚动有白屏，就适当添加非可视区冗余数量
      },
      expandAll: false,
    }
  },
  methods: {
    toggleExpandAll(value) {
      this.expandAll = value
      this.$refs.vtree.toggleExpandAll(value)
    },
    handleNodeClick(node) {
      Message.success(`点击了${node.label}`)
    },
    handleDelete(node) {
      this.$refs.vtree.remove(node)
    }
  }
}
</script>

<style scoped>
.vtree {
  margin: 50px;
  height: 300px !important;
}
</style>