<template>
  <div id="home">
    <h1 class="title">News Headlines</h1>
    <div v-if="headlines">
      <div v-for="(story, index) in headlines" :key="index">
        <app-story :story="story"></app-story>
      </div>
      <router-link to="/category/general" class="button button__home" tag="button">
        Click for More
      </router-link>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'home',
  beforeRouteEnter(to, from, next) {
    store.dispatch('getHeadlines').then(() => {
      next()
    }).catch(() => {
      next(false)
    })
  },
  computed: {
    headlines() {
      return this.$store.getters.headlines
    }
  }
}
</script>

<style scoped>
.button__home {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  margin-bottom: 20px;
}
.title {
  color: lightgray;
  font-size: 15px;
  font-style: italic;
  text-align: center;
  margin-top: 25px;
  font-weight: lighter;
}
</style>
