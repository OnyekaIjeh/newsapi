<template>
  <div class="wrapper">
    <p class="footer__name">Onyeka Ijeh</p>
    <a href="http://newsapi.org" class="link">Powered by newsapi.org</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  margin: 50px 0 0 0;
  border-top: 1px solid grey;
  padding-top: 2%;
  color: darkslategray;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 100px;
}
.footer__name {
  float: left;
  max-width: 50%;
  font-size: 12px;
}
.link {
  float: right;
  max-width: 50%;
  text-align: right;
  text-decoration: none;
  font-size: 12px;
  color: darkslategray;
}
</style>
