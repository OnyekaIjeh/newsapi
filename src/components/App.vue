<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
    <div v-show="loading" class="loading">Loading...</div>
    <error v-if="error"></error>
    <button v-show="showScrollToTopButton" @click.prevent="scrollToTop" class="backtotop">Back to top</button>
  </div>

</template>


<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      showScrollToTopButton: false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToTop() {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    },
    handleScroll() {
      setTimeout(this.handleShowButton, 2000)
    },
    handleShowButton() {
       if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        this.showScrollToTopButton = true
      } else {
      this.showScrollToTopButton = false
      }
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
    error() {
      return this.$store.state.error
    }
  }
}
</script>

<style>
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
  position: relative;
}
.container {
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
}
.backtotop {
  position: fixed;
  bottom: 12px;
  right: 12px;
  margin-left: auto;
  margin-right: auto;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  background-color: darkslategray;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  outline: 0;
  border: 0;
  z-index: 99;
}
.storylist {
  margin-bottom: 50px;
}

.title {
  color: lightgray;
  font-size: 15px;
  font-style: italic;
  text-align: center;
  margin-top: 25px;
  font-weight: lighter;
}

.button {
  border: 1px solid black;
  background: transparent;
  padding: 10px 7px;
  color: black;
}
.button:hover {
  cursor: pointer;
}
.button:disabled {
  border: 1px solid grey;
  color: grey;
  cursor: not-allowed;
}
.buttons {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  margin-top: 10%;
}
/* Absolute Center Spinner */
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
}

/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 1500ms infinite linear;
  -moz-animation: spinner 1500ms infinite linear;
  -ms-animation: spinner 1500ms infinite linear;
  -o-animation: spinner 1500ms infinite linear;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0,
    rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
