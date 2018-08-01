<template>
  <div id="search">
    <h1 class="title">Results for
      <em>{{query}}</em>
    </h1>
    <template v-if="search">
      <div v-for="(story, index) in search" :key="index">
        <app-story :story="story"></app-story>
      </div>
    </template>
    <div class="buttons">
      <button class="button" :disabled="disabled" @click.prevent="getPrev">Previous</button>
      <button class="button" @click.prevent="getNext">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: ['query'],
  data() {
    return {
      page: 1,
    }
  },

  created() {
    this.getSearch()
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('getSearch', {page: 1, query: to.params.query})
    next()
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
    search() {
      return this.$store.getters.search
    },
    disabled() {
      return (this.page == 1)
    }
  }
}
</script>

<style>
.title {
  color: lightgray;
  font-size: 15px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-style: italic;
  text-align: center;
  margin-top: 25px;
  font-weight: lighter;
}

.button {
  border: 1px solid black;
  background: transparent;
  padding: 10px 7px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: black;
}
.button:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}
.buttons {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  margin-top: 10%;
}
</style>
