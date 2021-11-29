<template>
  <v-row>
    <v-col
      v-for="file in files"
      :key="file.name"
      cols="12"
      md=4
      sm=6
    >
      <v-card  class="mx-auto my-8" max-width="360">
         <v-card-title>{{file.name}}</v-card-title>

            <v-card-text>
              <div class="my-2">{{file.description}}</div>
              <div class="my-2">{{file.issueDate}}</div>
            </v-card-text>
         
      </v-card> 
    </v-col>  
  </v-row>
</template>

<script>
 export default {
   data: () => ({}),
    computed:{
      files(){
        return this.$store.state.files;
      }
    },
  }
</script>
