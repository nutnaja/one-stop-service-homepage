<template>
  <div>
    <div class="d-flex flex-wrap justify-space-between">
      <div class="d-flex flex-wrap">
        <div 
          v-for="n in item" 
          :key="n.title" 
          class="pa-3 d-flex align-center"
        >
          <v-img :max-width="30" :src="n.img" class="item-image"></v-img>
          <p class="ml-3 item-title">{{ n.title }}</p>
        </div>
      </div>
      
      <div class="d-flex">
        <div 
          v-for="x in item2" 
          :key="x" 
          class="pa-3 "
        >
          <v-img :max-width="30" :src="x.img" class="item-image"></v-img>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: [
        { img: "/picture/SOne_index_menu01.png", title: "Product & Services" },
        { img: "/picture/SOne_index_menu01.png", title: "Promotions" },
        { img: "/picture/SOne_index_menu01.png" , title: "News & Events" },
        { img: "/picture/SOne_index_menu01.png", title: "Safety Tips" },
        { img: "/picture/SOne_index_menu01.png", title: "FAQS" },
        { img: "/picture/SOne_index_menu01.png" , title: "Location" },
      ],

      item2 : [
      { img: "/picture/SOne_index_btfacebook.png"},
      { img: "/picture/SOne_index_bttwitter.png"},
      { img: "/picture/SOne_index_btyoutube.png"},
      ]

    };
  },
};
</script>

<style scoped>

.item-image {
  min-width: 30px;
}

.item-title {
  font-weight: 500;
  margin: 0;
}
</style>