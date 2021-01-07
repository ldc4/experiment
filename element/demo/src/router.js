import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import(/* webpackChunkName: "tree" */ './views/Demo.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import(/* webpackChunkName: "tree" */ './views/Tree.vue')
    },
    {
      path: '/cascader',
      name: 'cascader',
      component: () => import(/* webpackChunkName: "tree" */ './views/Cascader.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import(/* webpackChunkName: "tree" */ './views/Dialog.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import(/* webpackChunkName: "tree" */ './views/Table.vue')
    },
    {
      path: '/virtual-tree',
      name: 'virtual-tree',
      component: () => import(/* webpackChunkName: "tree" */ './views/VirtualTree.vue')
    }
  ]
})
