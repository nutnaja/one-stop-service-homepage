<template>
  <div>
    <v-carousel height="400" hide-delimiters show-arrows="hover">
      <v-carousel-item v-for="(image, i) in images" :key="i">
        <v-img :src="image" cover height="100%" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/picture/SOne_index_news_23.jpg",
        "/picture/SOne_index_news_23.jpg",
        "/picture/SOne_index_news_23.jpg",
      ]
    };
  }
}
</script>