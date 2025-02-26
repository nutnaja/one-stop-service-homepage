<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="d-flex">
          <v-img src="/picture/SOne_index_tips1.png" :max-width="190"> </v-img>
          <div class="box-tipe">
            <v-row justify="center" align="center">
              <v-col class="text-center">
                <h2 class="text-oranges">Safety Tips</h2>
                <p class="text-left text-white ml-6">"</p>

                <p class="text-white">ควรเติมน้ำมันตอนเช้า</p>
                <p class="text-white">ขณะที่อุณหภูมิบนพื้น</p>
                <p class="text-white">ดินยังเย็นอยู่</p>
                <p class="text-right text-white mr-6">"</p>
  
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="d-flex align-cente">
        <p class="text-layer1 mr-3 mt-2">สมัครรับข่าวสาร</p>
        <v-text-field
          v-model="email"
          density="compact"
          variant="outlined"
        ></v-text-field>
        <v-img class="mb-5" 
        @click="sendEmail"
        src="/picture/SOne_index_btgo.jpg" :max-width="40">
        </v-img>
      </v-col>
      <v-col cols="12" class="py-0">
        <div>
          <v-img src="/picture/SOne_index_call.png" :max-width="320"> </v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "กรุณาใส่อีเมล์",
    };
  },

  methods : {
    sendEmail(){
      alert(`ส่งอีเมล์ไปยัง ${this.email} สำเร็จ`)
    }
  }
};
</script>

<style scoped>
.box-tipe {
  background-color: #212121;
  width: 50%;
  max-height: 159px;
  border: 1px solid #e65100;
  border-left: none;
}
</style>
