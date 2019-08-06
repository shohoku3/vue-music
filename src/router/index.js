import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/base/layout'
import Newlist from '@/components/musiclist'
import Search from '@/components/search'
import Musiclist from '@/components/playlist'
import Musiclistdetail from '@/components/playlistdetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:'/newlist',
    children: [{
      path: '/newlist',
      name: 'newlist',
      component: Newlist
    },
    {
    	path:'/search',
    	name:'search',
    	component:Search
    },
    {
    	path:'/musiclist',
    	name:'musiclist',
    	component:Musiclist
    },
    {
      path:'/musiclist/detail',
      name:'musiclistdetail',
      component:Musiclistdetail
    }]
  }, ]
})
