<template>
  <div class="storylist">
    <h1 class="title">Stories for
      <em>{{query}}</em>
    </h1>
    <template v-if="stories">
      <div v-for="(story, index) in stories" :key="index">
        <app-story :story="story"></app-story>
      </div>
      <div class="buttons">
        <button class="button" :disabled="disabled" @click.prevent="getPrev">Previous</button>
        <button class="button" @click.prevent="getNext">Next</button>
      </div>
    </template>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'search',
  props: ['query'],
  data() {
    return {
      page: 1,
    }
  },
  beforeRouteEnter (to, from, next) {
      store.dispatch('getSearch', {page: 1, query: encodeURIComponent(to.params.query)}).then(() => {
        next()
      }).catch(() => {
        next(false)
      })
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('getSearch', {page: 1, query: encodeURIComponent(to.params.query)}).then(() => {
        next()
      }).catch(() => {
        next(false)
      })
  },
  methods: {
    getSearch() {
      this.$store.dispatch('getSearch', {page: this.page, query: encodeURIComponent(this.query)})
    },
    getPrev() {
      this.page--
      this.getSearch()
    },
    getNext() {
      this.page++
      this.getSearch()
    }
  },
  computed: {
    stories() {
      return this.$store.getters.search
    },
    disabled() {
      return (this.page == 1)
    }
  }
}
</script>
