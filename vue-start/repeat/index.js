const mixin = {
  created: function() {
    console.log('mixin初始化');
  },
  data: {
    a: '1',
    c: '2',
  },
  methods: {
    test: function() {
      console.log('mixin test');
    }
  }
}

new Vue({
  el: '#mixin',
  mixins: [mixin],
  created: function() {
    console.log('vue实例初始化');
  },
  data: {
    a: 'a',
    b: 'b',
  },
  methods: {
    test: function() {
      console.log('vue test');
    }
  }
});

Vue.directive('demo', {
  bind: function(el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
    console.log(vnode)
  }
});

new Vue({
  el: '#directive',
  data: {
    msg: 'test'
  }
})

var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}

Vue.component('anchored-heading', {
  render: function (createElement) {
    // 创建 kebab-case 风格的 ID
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')

    return createElement(
      'h' + this.level,
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          }
        }, this.$slots.default)
      ]
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

new Vue({
  el: '#render',
})