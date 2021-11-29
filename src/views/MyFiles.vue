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
        return this.$store.state.files;
      }
    },
    components: {
      Card,
    },
  }
</script>
