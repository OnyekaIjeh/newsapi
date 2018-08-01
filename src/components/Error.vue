<template>
  <div class="error">
    Error fetching data. Check network connection.
  </div>
</template>

<script>
export default {
  name: 'error',
  mounted() {
    setTimeout(() => {
      this.$store.state.error = ''
    }, 5000)
  }
}
</script>

<style scoped>
.error {
  position: fixed;
  top: 20px;
  right: 20px;
  color: red;
  font-size: 15px;
}
</style>



