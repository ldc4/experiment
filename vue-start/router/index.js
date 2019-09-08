const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const User = {
  template: '<div>User {{$route.params.id}} <hr/> {{JSON.stringify($route.params)}}</div>',
  // watch: {
  //   '$route': function(to, from) {
  //     console.log(1, to, from);
  //   }
  // },
  beforeRouteUpdate(to, from, next) {
    console.log(2, to, from, next)
  }
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

router.beforeEach(async (to, from, next) => {
  console.log('g', to, from, next);
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     console.log('等待中');
  //     resolve();
  //   }, 1000);
  // });
  next();   // 一定要调用
})

const app = new Vue({
  router
}).$mount('#app')
