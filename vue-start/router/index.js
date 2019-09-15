function a() {
  const Foo = { template: '<div>foo</div>' }
  const Bar = { template: '<div>bar</div>' }
  const User = {
    template: '<div>User {{$route.params.id}} <hr/> {{JSON.stringify($route.params)}}</div>',
    // watch: {
    //   '$route': function(to, from) {
    //     console.log(1, to, from);
    //   }
    // },
    // beforeRouteUpdate(to, from, next) {
    //   console.log(2, to, from, next)
    //   next();
    // }
  }
  const Page = {
    template: '<div>page {{$route.params.pathMatch}} <hr/> {{JSON.stringify($route.params)}}</div>',
  }
  const Parent = {
    template:`
      <div>
        <div>Parent</div>
        <router-view></router-view>
      </div>
    `
  }
  const Children = {
    template:`
      <div>
        <div>Children</div>
      </div>
    `
  }
  const Nohup = {
    template: '<div>nothing</div>'
  }
  const MultiView = {
    template:`
      <div>
        <div>MultiView</div>
        <router-view></router-view>
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
      </div>
    `
  }
  const PropsPage = {
    props: ['id'],
    template:`
      <div>
        <div>PropsPage {{id}}</div>
      </div>
    `
  }

  const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/user/:id', component: User },
    { path: '/demo-*/haha-*/xixi-*', component: Page },
    { path: '/user-:foo(\\d+)', component: User },
    {
      path: '/parent', component: Parent,
      children: [
        { path: '', component: Nohup },
        { path: 'children', component: Children }
      ]
    },
    { path: '/redirect', redirect: '/foo' },
    { path: '/a', component: Foo, alias: '/b' },
    { path: '/named/:id', name: 'haha', component: User },
    { path: '/multi', component: MultiView,
      children: [
        { path: 'haha', components: {
          a: Foo,
          b: Bar,
          default: User
        } }
      ]
    },
    {
      path: '/props/:id', component: PropsPage, props: true
    }
  ]

  const router = new VueRouter({
    routes
  })

  // router.beforeEach(async (to, from, next) => {
  //   console.log('g', to, from, next);
  //   // await new Promise((resolve, reject) => {
  //   //   setTimeout(() => {
  //   //     console.log('等待中');
  //   //     resolve();
  //   //   }, 1000);
  //   // });
  //   next();   // 一定要调用
  // })

  const app = new Vue({
    router
  }).$mount('#app')
}

a();

// ------------------------------------------------------------
function b() {
  const Guard = {
    template: `
      <div>Guard</div>
    `,
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      console.log('beforeRouteEnter');
      next(vm => {console.log(vm)});
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log('beforeRouteUpdate');
      next();
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log('beforeRouteLeave');
      next();
    }
  }
  const Foo2 = {
    template: '<div>foo2</div>'
  }
  
  const gr = new VueRouter({
    routes: [
      {
        path: '/guard',
        component: Guard,
        beforeEnter: (to, from, next) => {
          console.log('beforeEnter')
          next();
        }
      }
    ]
  })
  
  gr.beforeEach((to, from, next) => {
    console.log('beforeEach');
    next();
  });
  
  gr.beforeResolve((to, from, next) => {
    console.log('beforeResolve');
    next();
  });
  
  gr.afterEach((to, from) => {
    console.log('afterEach')
  });
  
  const guard = new Vue({
    router: gr
  }).$mount('#guard');
}

b();

function c() {
  const Meta = { template: '<div>meta<router-view></router-view></div>' }
  const Fooo = { template: '<div>hahah</div>' }
  const router = new VueRouter({
    routes: [
      {
        path: '/meta',
        component: Meta,
        meta: { some: 'xixi' },
        children: [
          {
            path: 'haha',
            component: Fooo,
            meta: { some: 'yoyo' }
          },
        ]
      },
      {
        path: '/ani',
        component: Fooo
      }
    ],
    scrollBehavior (to, from, savedPosition) {
      // if (savedPosition) {
      //   return savedPosition;
      // } else {
      //   return { x: 0, y: 0 };
      // }
      // return { x: 0, y: 0 };
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 })
        }, 2000)
      })
    }
  });
  router.beforeEach((to, from, next) => {
    console.log(to);
    next();
  })
  const other = new Vue({
    router
  }).$mount('#other');
}

c();