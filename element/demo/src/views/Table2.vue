<template>
  <div class="table2">
    <el-table
      :data="tableData"
      :key="tableKey"
      :ref="table"
      style="width: 100%">
      <template v-for="(item) of header">
        <el-table-column
          :key="item.key"
          :prop="item.prop"
          :label="item.value"
        ></el-table-column>
      </template>
    </el-table>
    <el-button @click="add">add</el-button>
    <el-button @click="push">push</el-button>
  </div>
</template>


<script>
export default {
  name: 'Table2',
  data() {
    return {
      header: [{
        key: '1',
        value: '日期',
        prop: 'date',
      },{
        key: '2',
        value: '姓名',
        prop: 'name',
      },{
        key: '3',
        value: '地址',
        prop: 'address',
      }],
      content: [],
    }
  },
  methods: {
    add() {
      this.header.splice(2, 0, {
        value: '其他',
        prop: 'other',
        key: Math.random(),
      })
      this.tableKey = Math.random();
    },
    push() {
      this.header.push({
        value: '其他',
        prop: 'other',
      })
      this.$nextTick(() => {
        this.$refs.table.doLayout();
      })
    }
  }
}
</script>