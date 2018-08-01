import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Search from './pages/Search.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/search/:query',
      component: Search,
      props: true
    }
  ]
})
