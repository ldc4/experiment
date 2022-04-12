<template>
  <div>
    {{markValue}}
    <button @click="change">修改</button>
  </div>
</template>

<script>
export default {
  name: 'ruleCondition',
  data() {
    return {
      markValue: '123123123123213123122313123123123123123112312231312312312312312311231223131231231231231231123122313123123123123123112312231312312312312312312313123123',
    }
  },
  methods: {
    change() {
      this.markValue = Date.now()
      this.$emit('do-layout')
    }
  }
}
</script>