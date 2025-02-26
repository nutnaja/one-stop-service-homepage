<template>
  <v-app>
    <v-app-bar
      color="white"
      elevation="1"
      :height="$vuetify.display.smAndDown ? 180 : 100"
    >
      <div
        class="d-flex"
        :class="
          $vuetify.display.smAndDown
            ? 'flex-column align-start'
            : 'align-center w-100'
        "
      >
        <div
          class="flex-shrink-0"
          :class="$vuetify.display.smAndDown ? 'mb-2 align-self-center' : ''"
        >
          <NuxtLink to="/">
            <v-img
              src="/public/picture/SOne_index_logo.png"
              :width="$vuetify.display.smAndDown ? 200 : 300"
              contain
              alt="Logo"
            />
          </NuxtLink>
        </div>

        <div class="flex-grow-1" v-if="!$vuetify.display.smAndDown"></div>

        <div :class="$vuetify.display.smAndDown ? 'w-100' : ''">
          <div class="d-flex justify-end form-group mb-2">
            <v-img
              src="/picture/SOne_index_iconthai.jpg"
              :max-width="30"
              class="mr-2"
            ></v-img>
            <v-img
              src="/picture/SOne_index_iconeng2.jpg"
              :max-width="30"
            ></v-img>
          </div>
          <div class="form-group py-0 text-end d-flex">
            <v-text-field
              v-model="search"
              variant="outlined"
              density="compact"
              class="ml-auto"
              style="width: 300px"
            ></v-text-field>
            <v-img
              src="/picture/SOne_index_btsearch.jpg"
              :min-width="45"
      
            ></v-img>
          </div>
          <div class="text-end">
            <div class="d-flex justify-end form-group py-0">
              <p class="mr-1">About S-ONE |</p>
              <p class="mr-1">Job Opportunity |</p>
              <p class="mr-1">Contact Us |</p>
              <p>Site Map</p>
            </div>
          </div>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>


<script>
export default {
  data(){
    return {
      search : "Search...."
    }
  }
}

</script>

<style scoped>
.v-text-field {
  margin-top: -2px;
  margin-bottom: -15px;
}
.form-group {
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.form-group h3 {
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 1.1rem;
}

.form-group p {
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .form-group p {
    font-size: 0.8rem;
  }
}
</style>
