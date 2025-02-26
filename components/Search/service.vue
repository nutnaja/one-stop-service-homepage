<template >
    <div>
       <v-card  >
        <div class="card-orange pa-2">
            <h2 class="text-white">ค้นหาศูนย์บริการใกล้บ้านคุณ</h2>
        </div>
        <div class="card-dark pa-2">
            <v-row class="mt-2">
                <v-col cols="12" sm='12' class="text-end py-0">
                 <div class="d-flex" style="padding-bottom: 0px;">
                    <h2 class="text-white mr-3">จังหวัด</h2>
                    <v-select bg-color="white" 
                    :items="['ขอนแก่น', 'เลย', 'อุดร', 'หนองบัว']"
                    density="compact"
                    variant="outlined"
                    v-model="province"
                    ></v-select>
                 </div>
                <div class="d-flex py-0">
                <h2 class="text-white mr-3">เขต/อำเภอ</h2>
                    <v-select bg-color="white" 
                    :items="['เขต1', 'เขต2', 'เขต3', 'เขต4', 'เขต5']"
                    density="compact"
                    variant="outlined"
                    v-model="district"
                    ></v-select>
               </div>
              <div class="d-flex py-0">
                    <h2 class="text-white mr-3">ถนน</h2>
                    <v-select bg-color="white" 
                    :items="['ถนนตรง', 'ถนนเลี้ยว', 'ถนนสักเส้น', 'ถนนเส้นหลัก']"
                    density="compact"
                    variant="outlined"
                    v-model="road"
                    ></v-select></div>
                </v-col>
                <v-col cols="12" class="text-center py-0">
                    <p class="text-oranges" >หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง</p>
                </v-col>
                <v-col cols="12" class="text-center text-end">
                    <v-btn
                    text="ค้นหา"
                    color="primary"

                    >
                    </v-btn>
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
            province : "เลือกจังหวัด" , 
            district : "เลือกเขต" , 
            road : "เลือกถนน" , 
        }
    }
}
</script>