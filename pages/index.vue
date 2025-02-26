<template>
    <div>
      <div name="tab" class="mt-6 bg-black">
        <ListTab />
      </div>

      <div class="mt-3" name="highlight">
        <v-row>
          <v-col cols="12" sm="3">
            <SearchRubber />
          </v-col>
          <v-col cols="12" sm="9">
            <ListHighlight />
          </v-col>
        </v-row>
      </div>

     <div class="mt-3" name="typeProducts">
      <ListType />
     </div>
     <div name="layer3" class="mt-2">
      <v-row>
        <v-col cols="12" sm="3">
          <SearchService />
        </v-col>
        <v-col cols="12" sm="6">
          <ListNew />
        </v-col>
        <v-col cols="12" sm="3">
          <ListTips />
        </v-col>
      </v-row>
     </div>

     <div class="mb-6"></div>

    </div>
</template>

<script>

export default {
    setup() {
    definePageMeta({
      layout: "navbar",
    });
  },
}
</script>