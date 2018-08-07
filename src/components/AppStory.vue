<template>
  <div class="story">
    <a :href="story.url" class="title__text" target="__blank">
      <img :src="placeholderImage || story.urlToImage" class="story__image" @error="loadPlaceholderImage"> {{story.title}}
    </a>
    <p class="news__source">{{story.source.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'appstory',
  props: ['story'],
  data() {
    return {
      placeholderImage: false
    }
  },
  methods: {
    loadPlaceholderImage() {
      this.placeholderImage = '../src/assets/image_unavailable.png'
    }
  }
}
</script>

<style scoped>
.story {
  margin-top: 10px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  margin-bottom: 50px;
}

.story__image {
  width: 100%;
  max-height: 400px;
}

.title__text {
  display: block;
  font-weight: lighter;
  font-size: 30px;
  text-decoration: none;
  padding-top: 20px;
  color: black;
  padding-bottom: 5px;
}

.title__text:hover {
  border-bottom: 1px solid black;
}

.news__source {
  color: #ccc;
  font-weight: normal;
  font-size: 15px;
}
</style>
