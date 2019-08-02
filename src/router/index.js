import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/base/layout'
import Newlist from '@/components/newlist'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
      path: '/newlist',
      name: 'newlist',
      component: Newlist
    }]
  }, ]
})
