<template>
  <div class="story">
    <img :src="story.urlToImage" :alt="story.title" class="story__image">
    <a :href="story.url" class="title__text">
      {{story.title}}
    </a>
    <p class="news__source">{{story.source.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'appstory',
  props: ['story']
}
</script>

<style scoped>
.story {
  margin-top: 10px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  font-family: Trebuchet MS;
  margin-bottom: 50px;
}

.story__image {
  width: 100%;
  height: 100%;
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
