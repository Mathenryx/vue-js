<template>
  <v-row>
    <v-col
      v-for="file in files"
      :key="file.name"
      cols="12"
      md=4
      sm=6
    >
      <Card :file="file"></Card>
    </v-col>  
  </v-row>
</template>

<script>
import Card from '../components/Card'

 export default {
   data: () => ({}),
    computed:{
      files(){
        var files = new Array();
        this.$store.state.files.forEach(element => {
          if(element.favorite){
            files.push(element);
          }
        })
          return files;
      }
    },
    components: {
      Card,
    },
  }
</script>