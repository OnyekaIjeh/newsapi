<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query" placeholder="Looking for something? e.g. bitcoin" class="search__input">
    </form>
  </div>
</template>

<script>
export default {
  name: 'appsearch',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    search() {
      this.$router.push(`/search/${this.query}`)
    }
  }
}
</script>

<style scoped>
.search__input {
  padding: 10px 7px;
  width: 250px;
}
</style>
