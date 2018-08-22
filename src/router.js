import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Category from './pages/Category.vue'
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
      path: '/category/:category',
      component: Category,
      props: true
    },
    {
      path: '/search/:query',
      component: Search,
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})
