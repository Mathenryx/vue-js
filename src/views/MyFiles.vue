<template>
  <div style="margin:2%">
    <div style="text-align:center; padding-bottom: 20px">
      <h1>{{title}}</h1>
    </div>
  
  <v-row>
    <v-col
      v-for="(data, i) in events"
      :key="i"
      cols="12"
      md=4
      sm=6
    >
      <Card :cardId="i" :cardInfo="data"></Card>
    </v-col>  
  </v-row>
  </div>
</template>

<script>
import Card from '../components/EventCard'

 export default {
   data: () => ({   }),
    computed:{
      files() {
        return this.$store.state.files;
      },
      title() {
        return this.$store.getters.toUpper;
      },
      events() {
        return this.$store.state.events
      }
    },
    components: {
      Card,
    },
    async created(){
      await this.$store.dispatch("getEvents")
    },
  }
</script>
