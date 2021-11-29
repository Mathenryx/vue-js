<template>
  <v-app>
 
    <v-row>
      <AppBar />
    </v-row>
    <Drawer />
    
    <div style="padding-left:60px">
      <v-main>
        <router-view/>
      </v-main>
    </div>

    <Navigator />
    <Footer />

  </v-app>
</template>

<script>
  import Footer from './components/layout/Footer.vue'
  import AppBar from './components/layout/AppBar.vue'
  import Drawer from './components/layout/Drawer.vue'
  import Navigator from './components/layout/Navigator.vue'

export default {
  name: 'App',

  data: () => ({}),
  components: {
    AppBar,
    Footer,
    Drawer,
    Navigator
  },
};
</script>
