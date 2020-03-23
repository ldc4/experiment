<template>
  <div class="diff2html">
    <div v-html="outputHtml"></div>
    <div>
      <pre>{{JSON.stringify(this.outputJson, null, '  ')}}</pre>
    </div>
  </div>
</template>

<script>
import { Diff2Html } from 'diff2html'
import "diff2html/dist/diff2html.min.css"

export default {
  name: 'Diff2Html',
  props: {
    msg: String
  },
  data() {
    return {
      outputHtml: '',
      outputJson: {}
    }
  },
  created() {
    let strInput = `
diff --git a/src/utils.js b/src/utils.js
index 395d267..5a8c783 100644
--- a/src/utils.js
+++ b/src/utils.js
@@ -15,7 +15,6 @@
     return str.slice(0)
       .replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
-      .replace(/>/g, '&gt;')
       .replace(/"/g, '&quot;')
       .replace(/'/g, '&#x27;')
       .replace(/\//g, '&#x2F;');
@@ -24,6 +23,7 @@
   Utils.prototype.startsWith = function(str, start) {
     if (typeof start === 'object') {
       var result = false;
+      // add
       start.forEach(function(s) {
         if (str.indexOf(s) === 0) {
           result = true;
@@ -37,7 +37,7 @@
   };
 
   Utils.prototype.valueOrEmpty = function(value) {
-    return value || '';
+    return value || '123';
   };
 
   Utils.prototype.safeConfig = function(cfg, defaultConfig) {
`;
    let outputHtml = Diff2Html.getPrettyHtml(strInput, {inputFormat: 'diff', showFiles: true, matching: 'lines'});
    this.outputHtml = outputHtml;
    this.outputJson = Diff2Html.getJsonFromDiff(strInput, {
      inputFormat: "diff",
      showFiles: true,
      matching: "lines",
      outputFormat: "side-by-side"
    })
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
