<template>
  <div class="table">
    <Button @click="expandAll">全部展开/折叠</Button>
    <div v-for="tableData in tableDataList" :key="tableData.key">
      <Button @click="tableData.showTable = !tableData.showTable">展开/折叠</Button>
      <el-table
        v-if="tableData.showTable"
        :data="tableData.tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
    <!-- <div v-for="treeData in treeDataList" :key="treeData.key">
      <el-tree :default-expand-all="true" :data="treeData.treeData"></el-tree>
    </div> -->
    <div v-for="(text, index) in textList" :key="index">
      {{text}}
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    const tableData = [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
    const tableDataList = []
    for (let i = 0; i <= 0; i++) {
      tableDataList.push({
        key: i,
        showTable: false,
        tableData: JSON.parse(JSON.stringify(tableData)), 
      })
    }
    const treeData = [{
      label: '一级 1',
      children: [{
        label: '二级 1-1',
        children: [{
          label: '三级 1-1-1'
        }]
      }]
    }, {
      label: '一级 2',
      children: [{
        label: '二级 2-1',
        children: [{
          label: '三级 2-1-1'
        }]
      }, {
        label: '二级 2-2',
        children: [{
          label: '三级 2-2-1'
        }]
      }]
    }, {
      label: '一级 3',
      children: [{
        label: '二级 3-1',
        children: [{
          label: '三级 3-1-1'
        }]
      }, {
        label: '二级 3-2',
        children: [{
          label: '三级 3-2-1'
        }]
      }]
    }]
    const treeDataList = []
    for (let i = 0; i <= 0; i++) {
      treeDataList.push({
        key: i,
        showTree: true,
        treeData: JSON.parse(JSON.stringify(treeData)), 
      })
    }
    const textList = []
    for (let i = 0; i <= 100000; i++) {
      textList.push('很多文本内容显示')
    }
    return {
      tableDataList,
      treeDataList,
      textList,
      isExpand: true
    }
  },
  computed: {
    
  },
  methods: {
    expandAll() {
      this.isExpand = !this.isExpand
      this.tableDataList.forEach((item) => {
        item.showTable = this.isExpand
      })
    }
  }
};
</script>

<style scoped>

</style>