import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/base/layout'
import Newlist from '@/components/newlist'
import Search from '@/components/search'

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
    },
    {
    	path:'/search',
    	name:'search',
    	component:Search
    }]
  }, ]
})
