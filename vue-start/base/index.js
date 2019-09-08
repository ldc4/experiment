var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '!!',
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
  }
});

setTimeout(() => {
  app3.seen = false;
}, 1000);

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'haha' },
      { text: 'xixi' },
      { text: 'hehe' },
    ] 
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'haha',
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'haha'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: `
    <li>{{ todo.text }}</li>
  `
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    items: [
      { id: '1', text: 'vue 2.0' },
      { id: '2', text: 'vue 3.0' },
      { id: '3', text: 'express' },
    ]
  }
});

var eg1 = new Vue({
  el: '#example-1',
  data: {
    message: 'xixi'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
});

var eg2 = new Vue({
  el: '#example-2',
  data: {
    firstName: 'weedust',
    lastName: 'zhao',
  },
  computed: {
    fullName1: {
      get: function() {
        return `${this.firstName} ${this.lastName}`;
      },
      set: function(value) {
        var arr = value.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
      }
    },
    fullName2: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});

var eg3 = new Vue({
  el: '#example-3',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!',
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
});

var eg4 = new Vue({
  el: '#example-4',
  data: {
    isActive: true,
    error: null,
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
});

var eg5 = new Vue({
  el: '#example-5',
  data: {
    object: {
      haha: '1',
      xixi: '2',
      hehe: 'zz',
    }
  }
});

Vue.component('todo-item', {
  template: `
    <li>
      {{ title }}
      <button v-on:click="$emit('remove')">Remove</button>
    </li>
  `,
  props: ['title']
})

var eg6 = new Vue({
  el: '#example-6',
  data: {
    newTodoText: '',
    todos: [],
    nextTodeId: 0,
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodeId++,
        title: this.newTodoText
      });
      this.newTodoText = '';
    }
  }
});


var eg7 = new Vue({
  el: '#example-7',
  data: {
    name: '',
  },
  methods: {
    say: function(value = 'none') {
      alert(value);
    },
    sayNone: function(e) {
      console.log(e)
      this.name = e && JSON.stringify(e.target.tagName)
    }
  }
});


var eg8 = new Vue({
  el: '#example-8',
  data: {

  },
  created: function() {
    this.throttleScroll = _.throttle((e) => {
      console.log(e)
    }, 500);
  },
  methods: {
    doThis: function(e) {
      console.log(1, e);
    },
    doThat: function(e) {
      console.log(2, e);
    },
    doDoDo: function(e) {
      console.log(3, e);
    },
  }
});

var eg9 = new Vue({
  el: '#example-9',
  data: {
    name: '张三',
    description: '来自山卡卡里',
    options: [],
    sex: 'man',
    kpi: '',
    interest: [],
  },
  methods: {

  }
});