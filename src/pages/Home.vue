<template>
  <div id="home">
    <h1 class="title">News Headlines</h1>
    <div v-if="headlines">
      <div v-for="(story, index) in headlines" :key="index">
        <app-story :story="story"></app-story>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  created() {
    this.$store.dispatch('getHeadlines')
  },
  computed: {
    headlines() {
      return this.$store.getters.headlines
    }
  }
}
</script>

<style scoped>
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
</style>
