<template>
<v-card>
  <div class="Drawer">
  
    <v-img src="../assets/homepage.jpg"></v-img>
    
  </div>
</v-card>
  
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
        links: [],
        mini: true,
      }
    },
  }
</script>
