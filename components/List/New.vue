<template>
    <div>
       <div class="d-flex justify-space-between card-border-orange pa-2">
        <h2>News & Events</h2>
        <p>∎ ∎ ∎</p>
       </div>
       <div class="d-flex justify-space-between card-border-orange-none-top pa-2">
        <v-row class="mb-8">
            <v-col v-for="n in item"
        :key="n"
        cols="12"
        sm="4">
        <div class="mt-3">
        <v-img 
        @click="showImg(n)"
          :max-width="300"
          :src="n.img"
          >
          </v-img>
          <p>{{ n.details }}</p>
        </div>
            </v-col>
        </v-row>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            item : [
                {
                    title : "new1" ,
                    details : "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม1" , 
                    img : "/picture/SOne_index_pic01.jpg"
                },
                {
                    title : "new2" ,
                    details : "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม2" , 
                    img : "/picture/SOne_index_pic01.jpg"
                },
                {
                    title : "new3" ,
                    details : "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม3" , 
                    img : "/picture/SOne_index_pic01.jpg"
                },
            ]
        }
    } , 
    methods : {
        showImg(item){
            alert(item.details)
        }
    }
}

</script>