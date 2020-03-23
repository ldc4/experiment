<template>
  <div class="editor-demo">
    <div class="editor"></div>
  </div>
</template>

<script>
import Editor from '../common/editor'

export default {
  name: 'Editor',
  props: {
    msg: String
  },
  data() {
    return {
      editor: null,
    }
  },
  created() {
    
  },
  mounted() {
    const editor = new Editor({
      editorSelector: '.editor'
    })
    this.editor = editor
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
