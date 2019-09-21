Vue.component('a-b-c', {
  props: ['xX', 'y', 'z', 'value'],
  computed: {
    listenerss: function() {
      // console.log(this.$listeners);
      return JSON.stringify(this.$listeners)
    }
  },
  template: `
    <div>
      {{xX}}-{{y}}-{{z}}:{{ value }}={{listenerss}}
      <slot></slot>
      <button v-if="$listeners['large']" @click="$emit('large')">放大</button>
      <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
    </div>
  `
});

Vue.component('b-c-d', {
  props: ['xX', 'y', 'z', 'value'],
  template: `
    <div>
      {{xX}}:{{y}}:{{z}}-{{ value }}
      <slot></slot>
      <button @click="$emit('large')">放大</button>
      <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
    </div>
  `
});

function Person(first, last) {
  this.first = first;
  this.last = last;
}

Vue.component('ValidateComp', {
  props: {
    propA: Number,
    propB: [String, Number],
    propC: {
      type: String,
      required: true,
    },
    propD: {
      type: Number,
      default: 100
    },
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    propF: {
      validator: function (value) {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1;
      }
    },
    author: Person
  },
  template: `<div>{{propA}}{{propB}}{{propC}}{{propD}}{{JSON.stringify(propE)}}{{propF}}{{author.first}}-{{author.last}}</div>`
});

Vue.component('event-demo', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function() {
      var vm = this;
      const result = Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit('input', event.target.value)
        }
      })
      // console.log(result)
      return result;
    }
  },
  template:`
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      />
    </label>
  `
})

Vue.component('slot-demo', {
  props: ['a', 'b'],
  data: function() {
    return {
      haha: 'demo',
      gg: 'simida',
      kk: 'liaojie'
    };
  },
  template: `
    <div>
      <header>
        1
        <slot name="header" :kk="kk"></slot>
      </header>
      <main>
        2
        <slot :user="haha"></slot>
      </main>
      <footer>
        3
        <slot name="footer" :gg="gg"></slot>
      </footer>
    </div>
  `
});

Vue.component('slot-parent', {
  props: ['label'],
  template: `
    <div>
      <slot-demo>
        <template v-slot:header="headerProps">
          {{label}}1{{ headerProps.kk }}
        </template>
        <template v-slot:footer="footerProps">
          {{label}}2{{ footerProps.gg }}
        </template>
        <template v-slot:default="defaultProps">
          {{label}}3{{ defaultProps.user }}
        </template>
      </slot-demo>
      <slot-demo v-slot:header="headerProps">
        {{headerProps.kk}}
      </slot-demo>
      <slot-demo>
        <template v-slot:header="headerProps">
          {{headerProps.kk}}
        </template>
      </slot-demo>
    </div>
  `
});

Vue.component('async-example', function(resolve, reject) {
  setTimeout(function() {
    resolve({
      data: function() {
        return {
          init: 'haha'
        }
      },
      template: `
        <div>
          异步
          <input ref="input" />
          {{this.$parent.a}}
          <slot></slot>
        </div>
      `
    });
    // reject('error')
  }, 1000);
});

Vue.component('ref-demo', {
  computed: {
    a: function() {
      return '1';
    }
  },
  template: `
    <div>
      <async-example ref="test">{{a}}</async-example>
      <button @click="getRef">获取ref</button>
    </div>
  `,
  methods: {
    getRef: function() {
      console.log(this.$refs.test.$refs);
      this.$refs.test.$refs.input.focus();
    }
  }
});

const app = new Vue({
  el: '#root',
  data: {
    xSize: 1,
    haha: "yoyo",
    current: 'a-b-c',
    items: [
      { x: '1', y: '2', z: '3'},
      { x: 'a', y: 'b', z: 'c'},
      { x: 'z', y: 'z', z: 'z'},
    ],
    post: {
      'x-x': '1',
      'y': '2',
      'z': '3'
    },
    person: new Person('weedust', 'zhao')
  },
  methods: {
    changeTab: function(value) {
      this.current = value;
    },
    onFocus: function(e) {
      console.log(e);
    }
  }
});


// 子组件的computed中依赖属性变化，会触发更新么？ 会

Vue.component('demo1', {
  props: ['a'],
  model: {
    prop: 'a',
    event: 'update'
  },
  computed: {
    test: function() {
      console.log('update')
      return this.a + 'px';
    }
  },
  watch: {
    a(newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  methods: {

  },
  template: `
    <div>
      {{test}}
    </div>
  `,
});

const arr = [1, 2, 3];

const d1 = new Vue({
  el: '#demo1',
  data: {
    a: arr,
  },
  mounted() {
    const that = this;
    setTimeout(() => {
      arr.push(4);
      that.a = arr
    }, 3000)
  }
});