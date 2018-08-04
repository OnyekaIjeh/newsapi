<template>
  <nav class="header">
    <div class="brand">
      <h1 class="brand__name">
        <span class="darkslategrey">NEWS</span>FLASH
      </h1>
      <app-search></app-search>
    </div>
    <ul class="nav__links">
      <li class="nav__link">
        <router-link to="/" class="router__link">Home</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/general" class="router__link">General</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/business" class="router__link">Business</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/sports" class="router__link">Sports</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/health" class="router__link">Health</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/entertainment" class="router__link">Entertainment</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/category/technology" class="router__link">Technology</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppSearch from './AppSearch.vue'

export default {
  name: 'appheader',
  components: {
    AppSearch,
  }
}
</script>

<style scoped>
.header {
  color: black;
  margin: 50px 0 0 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  width: 100%;
}
.darkslategrey {
  color: #6ba3ba;
}

.brand {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
}
.brand__name {
  font-size: 50px;
}
.nav__links {
  margin-top: 5%;
  text-align: center;
  white-space: nowrap;
  overflow: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
.nav__link {
  display: inline-block;
  text-decoration: none;
  margin: 10px;
  padding: 5px;
  color: darkslategray;
  text-align: center;
}
.router__link {
  text-decoration: none;
  text-transform: uppercase;
  color: darkslategray;
  text-align: center;
}
.router-link-exact-active {
  border-bottom: 1px solid #6ba3ba;
  font-weight: bold;
  color: #6ba3ba;
}
.router__link:hover {
  border-bottom: 1px solid #6ba3ba;
  color: #6ba3ba;
  font-weight: bold;
}
@media only screen and (max-width: 700px) {
  .brand {
    grid-auto-flow: row;
    align-items: center;
    justify-content: space-around;
    justify-items: center;
    grid-gap: 20px;
  }
  .brand__name {
    font-size: 40px;
  }
  .header {
    margin-top: 20px;
  }
}
</style>
