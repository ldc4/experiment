const moduleA = {
  state: {
    a: 'a'
  },
  mutations: {},
  actions: {},
  getters: {}
}

const moduleB = {
  state: {
    b: 'b',
  },
  mutations: {},
  actions: {}
}


const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  },
  state: {
    cacheList: [],
    count: 3,
    list: [
      { name: 'weedust', value: 1 },
      { name: 'ldc4', value: 2 },
      { name: 'zhaoqingsong', value: 3 },
    ]
  },
  getters: {
    countPlus: (state) => {
      return state.count + 10;
    },
    filterList: (state, getters) => {
      return state.list.filter((item) => { item.test = getters.countPlus; return item.value === 1; });
    }
  },
  mutations: {
    increment (state, payload) {
      console.log(payload)
      if (payload && payload.amount) {
        state.count += payload.amount;
      } else if (payload){
        state.count += payload;
      } else {
        state.count++;
      }
    }
  },
  actions: {
    increment (context) {
      console.log(context)
      context.commit('increment')
    }
  }
})

store.commit('increment')
store.commit('increment', 10)
store.commit('increment', { amount: 10 })
store.commit({
  type: 'increment',
  amount: 10
})

store.dispatch('increment')

// console.log(store.state.count)
console.log(store.state);
console.log(store.state.b);

const { mapState, mapGetters } = Vuex;

// const Counter = {
//   template: `<div>{{ count }}</div>`,
//   computed: {
//     count() {
//       return this.$store.state.count
//     }
//   }
// }

const Item = {
  template: `<div>{{JSON.stringify(itemData)}}<button @click="change">change</button></div>`,
  props: ['itemData'],
  methods: {
    change() {
      const { name, value, test } = this.itemData
      this.itemData.name = name + 'hahaha'
      this.$emit('change')
    }
  }
}

const Counter = {
  template: `<div>
    <span>{{ count }}-{{count2}}-{{count3}}</span>
    <div v-for="itemData in filterList">
      <Item :itemData="itemData" @change="handleChange"></Item>
    </div>
  </div>`,
  data: function() {
    return {
      localCount: 3
    }
  },
  components: {
    Item
  },
  computed: {
    ...mapState({
      count: state => state.count,
      count2: 'count',
      count3(state) {
        return state.count + this.localCount
      },
      cacheList: state => state.cacheList
    }),
    ...mapGetters([
      'filterList'
    ])
  },
  methods: {
    handleChange() {
      this.cacheList = ['hahah']
      console.log(this.cacheList)
    }
  }
}

const app = new Vue({
  el: '#app',
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
});