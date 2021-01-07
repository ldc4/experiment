<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
        <template v-slot:header="scope">
          <div class="box">
            <div class="up">有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊</div>
            <div class="down">有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
        <template v-slot:header="scope">
          <div class="box">
            <div class="up">有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊有点长啊</div>
            <div class="down">有点长啊有点长啊有点长啊有点长啊</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
        <template v-slot:header="scope">
          <div class="box">
            <div class="up">123</div>
            <div class="down">312</div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.up {
  flex-grow: 1;
  align-self: stretch;
}
.down {
  flex-grow: 1;
  align-self: stretch;
  border-top: solid 1px black;
}
</style>