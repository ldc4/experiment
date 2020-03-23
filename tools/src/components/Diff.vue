<template>
  <div class="diff">
    <template v-for="(item, key) in output">
      <div :key="`${key}-title`">
        {{ key }}
      </div>
      <div :key="`${key}-output`">
        {{ JSON.stringify(item, null, '  ') }}
      </div>
      <div :key="`${key}-display`">
        <div v-html="display[key]" />
        <hr />
      </div>
    </template>
  </div>
  
</template>

<script>
var Diff = require('diff');

export default {
  name: 'Diff',
  props: {
    msg: String
  },
  data() {
    return {
      output: {},
      display: {}
    }
  },
  created() {
    let oldStr = ''
    let newStr = ''
    let oldObj = {}
    let newObj = {}
    let oldArr = []
    let newArr = []
    let output = null, display = null

    // 对比字符
    oldStr = 'beep boop'
    newStr = 'beep boob blah'
    output = Diff.diffChars(oldStr, newStr)
    display = this.format(output)
    this.output.chars = output
    this.display.chars = display

    // 对比词
    oldStr = 'beep boop'
    newStr = 'beep boob blah'
    output = Diff.diffWords(oldStr, newStr)
    display = this.format(output)
    this.output.words = output
    this.display.words = display

    // 对比词 带空格
    oldStr = 'beep, boop'
    newStr = 'beep, boob blah'
    output = Diff.diffWordsWithSpace(oldStr, newStr)
    display = this.format(output)
    this.output.wordsWithSpace = output
    this.display.wordsWithSpace = display

    // 对比行
    oldStr = 'beep boop'
    newStr = 'beep boob blah'
    output = Diff.diffLines(oldStr, newStr)
    display = this.format(output)
    this.output.lines = output
    this.display.lines = display

    // 对比句子
    oldStr = 'beep. boop'
    newStr = 'beep. boob blah'
    output = Diff.diffSentences(oldStr, newStr)
    display = this.format(output)
    this.output.sentences = output
    this.display.sentences = display

    // 对比对象
    oldObj = { a: 1, b: 'weedust' }
    newObj=  { c: 2, b: 'ldc4' }
    output = Diff.diffJson(oldObj, newObj)
    display = this.format(output)
    this.output.json = output
    this.display.json = display

    // 对比数组
    oldArr = ['aaa', 'bbb']
    newArr = ['bbb', 'aaa']
    output = Diff.diffArrays(oldArr, newArr)
    display = this.format(output)
    this.output.arr1 = output
    this.display.arr1 = display
    output = Diff.diffArrays(newArr, oldArr)
    this.output.arr2= output
    this.display.arr2 = display

    let beforeData = [{ label: 'aaa' }, { label: 'bbb' }, { label: 'ccc' }]
    let afterData = [{ label: 'aaa' }, { label: 'ccc' }, { label: 'ddd' }]
    let args = ['', this.getStringFromData(beforeData), this.getStringFromData(afterData), '', '']
    output = Diff.createPatch(...args)
    display = Diff.parsePatch(output)
    this.output.createPatch = output
    this.display.createPatch = display

    // console.log(this.output)
    // console.log(this.display)
  },
  methods: {
    format(output) {
      let display = ''
      output.forEach((item) => {
        if (item.added) {
          display += '<ins>' + item.value + '</ins>'
        } else if (item.removed) {
          display += '<del>' + item.value + '</del>'
        } else {
          display += item.value
        }
      })
      return display
    },
    getStringFromData(data){
      let s = ''
      for(let i=0; i<data.length ; i++){
        s += data[i].label +'\n'
      }
      return s
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
