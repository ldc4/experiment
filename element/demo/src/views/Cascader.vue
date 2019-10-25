<template>
  <div>
    <el-cascader
      :options="options"
      :props="{ multiple: true, checkStrictly: true, emitPath: false }"
      :value="value"
      @change="change"
      :show-all-levels="false"
      filterable
      clearable
    ></el-cascader>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        options: [
          {
            value: 'test1',
            label: 'test1',
          },
          {
            value: 'test2',
            label: 'test2',
          }
        ]
      };
    },
    methods: {
      change(ids) {
        this.value = ids
        console.log(ids)
      }
    }
  };
</script>