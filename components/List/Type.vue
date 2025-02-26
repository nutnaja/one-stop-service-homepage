<template>
    <div >
    <v-row no-gutters>
      <v-col
        v-for="n in item"
        :key="n"
        cols="6"
        sm="2"
      >
        <v-sheet class="py-1 pa-2">
          <v-img 
          :min-width="150"
          :src="n.value"
          @click="changePage(n)"
          >
          </v-img>
        </v-sheet>
      </v-col>
    </v-row>
  </div>

</template>

<script>
export default {
    data(){
        return { 
            item: [
        { value: "/picture/SOne_index_bt-tire.jpg" , title : "ยาง"},
        { value: "/picture/SOne_index_bt-break.jpg" , title : "เบรก"},
        { value: "/picture/SOne_index_bt-battery.jpg" , title : "แบตเตอรี่"},
        { value: "/picture/SOne_index_bt-chokeup.jpg" , title : "โช๊คอัพ"},
        { value: "/picture/SOne_index_bt-oil.jpg" , title : "น้ำมันเครื่องและไส้กรอง"},
        { value: "/picture/SOne_index_bt-guarantee.jpg" , title : "การรับประกันสินค้า"},
      ]
    }
    },
    methods : {
      changePage(item) {
        console.log(item.title);
        if(item.title === 'ยาง'){
          this.$router.push(`/component/rubber/`);
        } else if (item.title === 'เบรก'){
          this.$router.push(`/component/brake/`);
        } else if (item.title === 'แบตเตอรี่'){
          this.$router.push(`/component/battery/`);
        }
        else if (item.title === 'โช๊คอัพ'){
          this.$router.push(`/component/Shock/`);
        }
        else if (item.title === 'น้ำมันเครื่องและไส้กรอง'){
          this.$router.push(`/component/lubricator/`);
        }
        else if (item.title === 'การรับประกันสินค้า'){
          this.$router.push(`/component/guarantee/`);
        }
    }
}
}
</script>