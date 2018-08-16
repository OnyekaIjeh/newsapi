import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

const Request = Axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    'X-Api-Key': '498755d8d73e49538e5fb46438797804'
  }
})

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    headlines: '',
    category: '',
    search: '',
    error: '',
    loading: false
  },
  mutations: {
    setHeadlines(state, headlines) {
      state.headlines = headlines
    },
    setCategory(state, category) {
      state.category = category
    },
    setSearch(state, search) {
      state.search = search
    }
  },
  actions: {
    getHeadlines({ commit, state }) {
      state.loading = true
      state.error = ''
      return new Promise((resolve, reject) => {
        Request({
          url: 'top-headlines?language=en&country=ng'
        })
          .then(data => {
            state.loading = false
            commit('setHeadlines', data.data.articles)
            resolve()
          })
          .catch(error => {
            state.loading = false
            state.error = error
            reject()
          })
      })
    },
    getCategory({ commit, state }, payload) {
      state.loading = true
      state.error = ''
      return new Promise((resolve, reject) => {
        Request({
          url: `top-headlines?country=ng&category=${
            payload.category
          }&sortBy=relevancy&pageSize=5&language=en&page=${payload.page}`
        })
          .then(data => {
            state.loading = false
            commit('setCategory', data.data.articles)
            resolve()
          })
          .catch(error => {
            state.loading = false
            state.error = error
            reject()
          })
      })
    },
    getSearch({ commit, state }, payload) {
      state.loading = true
      state.error = ''
      return new Promise((resolve, reject) => {
        Request({
          url: `everything?q=${payload.query}&sortBy=relevancy&page=${
            payload.page
          }&language=en&pageSize=5`
        })
          .then(data => {
            state.loading = false
            commit('setSearch', data.data.articles)
            resolve()
          })
          .catch(error => {
            state.loading = false
            state.error = error
            reject()
          })
      })
    }
  },
  getters: {
    headlines(state) {
      return state.headlines
    },
    category(state) {
      return state.category
    },
    search(state) {
      return state.search
    }
  }
})
