import Vue from 'vue'
import App from './components/App.vue'
import router from './router.js'
import store from './store.js'
import AppStory from './components/AppStory.vue'
import Error from './components/Error.vue'
import './assets/reset.css'

Vue.component('app-story', AppStory)
Vue.component('error', Error)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
