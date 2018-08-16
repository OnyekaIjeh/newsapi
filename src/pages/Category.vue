<template>
  <div class="storylist">
    <h1 class="title">Stories for
      <em>{{category}}</em>
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
import categories from '../categories'
export default {
  name: 'category',
  props: ['category'],
  data() {
    return {
      page: 1,
    }
  },
  beforeRouteEnter (to, from, next) {
    if(categories.includes(to.params.category)) {
       store.dispatch('getCategory', {page: 1, category: to.params.category}).then(() => {
        next()
      }).catch(() => {
        next(false)
      })
    } else {
      store.state.error = true
      next('/')
    }
  },
  beforeRouteUpdate (to, from, next) {
    if(categories.includes(to.params.category)) {
       store.dispatch('getCategory', {page: 1, category: to.params.category}).then(() => {
        next()
      }).catch(() => {
        next(false)
      })
    } else {
      store.state.error = true
      next('/')
    }
  },
  methods: {
    getCategory() {
      this.$store.dispatch('getCategory', {page: this.page, category: this.category})
    },
    getPrev() {
      this.page--
      this.getCategory()
    },
    getNext() {
      this.page++
      this.getCategory()
    }
  },
  computed: {
    stories() {
      return this.$store.getters.category
    },
    disabled() {
      return (this.page == 1)
    }
  }
}
</script>
