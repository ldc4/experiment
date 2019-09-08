new Vue({
  el: '#root',
  data: {
    show: true,
  },
})

new Vue({
  el: '#js-ani',
  data: {
    show: false,
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.transformOrigin = 'left';
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 3000 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 6000 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done });
    }
  }
})

new Vue({
  el: '#multi-ani',
  data: {
    items: []
  },
  methods: {
    add: function() {
      this.items.push(
        { name: 'wee', age: 18 }
      )
    },
    del: function() {
      this.items.splice(0, 1);
    }
  }
})

const componentA = {
  props: ['text'],
  template: `
    <div>1{{text}}</div>
  `
};
const componentB = {
  props: ['text'],
  template: `
    <div>2{{text}}</div>
  `
};

new Vue({
  el: "#mode-ani",
  components: {
    'component-a': componentA,
    'component-b': componentB
  },
  data: {
    show: true,
    view: 'component-a'
  }
})

new Vue({
  el: '#list-demo',
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10,
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    }
  }
});

Vue.component('ani-integer', {
  template: '<span>{{ tweeningValue }}</span>',
  props: {
    value: {
      type: Number,
      required: true,
    }
  },
  data: function() {
    return {
      tweeningValue: 0
    }
  },
  watch: {
    value: function(newValue, oldValue) {
      this.tween(oldValue, newValue);
    }
  },
  mounted: function() {
    this.tween(0, this.value);
  },
  methods: {
    tween: function(startValue, endValue) {
      var vm = this;
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 500)
        .onUpdate(function() {
          vm.tweeningValue = this.tweeningValue.toFixed(0)
        })
        .start();

      animate();
    }
  }
});

new Vue({
  el: '#tween-demo',
  data: {
    number: 0,
  }
});