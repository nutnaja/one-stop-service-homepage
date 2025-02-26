<template >
    <div>
       <v-card  >
        <div class="card-orange pa-2">
            <h2 class="text-white">ค้นหายาง</h2>
        </div>

        <div class="back-img pa-2" :class="$vuetify.display.smAndDown ? 'small-screen' : 'large-screen'">
            <v-row>
                <v-col cols="4">
                </v-col>
                <v-col cols="8" class="">
                   <div class="py-0 form-group">
                    <h3 class="text-white ml-2">หน้ายาง</h3>
                    <p class="text-white ml-2">ความกว้าง (มม.)</p>
                    <v-select bg-color="white" 
                    :items="['ขอนแก่น', 'เลย', 'อุดร', 'หนองบัว']"
                    density="compact"
                    variant="outlined"
                    v-model="Rubber"
                    ></v-select>
                   </div>
                   <div class="py-0 form-group">
                    <h3 class="text-white ml-2">ซีรี่ย์</h3>
                    <p class="text-white ml-2">อัตราส่วนความสูงแก้มยาง (%)</p>
                    <v-select bg-color="white" 
                    :items="['ขอนแก่น', 'เลย', 'อุดร', 'หนองบัว']"
                    density="compact"
                    variant="outlined"
                    v-model="Series"
                    ></v-select>
                   </div>
                   <div class="py-0 form-group">
                    <h3 class="text-white ml-2">กระทะล้อ</h3>
                    <p class="text-white ml-2">เส้นผ่าศูนย์กลาง (นิ้ว)</p>
                    <v-select bg-color="white" 
                    :items="['ขอนแก่น', 'เลย', 'อุดร', 'หนองบัว']"
                    density="compact"
                    variant="outlined"
                    v-model="wheelRim"
                    ></v-select>

                    <v-btn
                    text="ค้นหา"
                    color="primary"
                    >
                    </v-btn>
                </div>
                </v-col>
            </v-row>
        </div>
       </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            Rubber : "เลือกหน้ายาง" , 
            Series : "เลือกซีรี่ย์" , 
            wheelRim : "เลือกกระทะล้อ" , 
        }
    }
}
</script>

<style scoped>
.back-img { 
    background-image: url('/picture/SOne_index_bg_searchtype.jpg');
    background-size: 100% 100%; /* ขยายรูปเต็ม div */
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
}

.large-screen {
    height: 44vh;
}

.small-screen {
    height: 55vh;
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

.v-select {
    margin-top: -2px;
    margin-bottom: -20px;
}

</style>