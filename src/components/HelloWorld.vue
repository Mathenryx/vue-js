<template>
<v-card>
  <div class="Drawer">

    <v-system-bar
      window
      dark
    >
      <v-spacer></v-spacer>
      <v-icon>mdi-minus</v-icon>
      <v-icon>mdi-checkbox-blank-outline</v-icon>
      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-app-bar
      color="grey"
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Cloud Drive</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  
    <v-navigation-drawer  
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="../assets/profile.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Matheus Silva
              </v-list-item-title>
              <v-list-item-subtitle>mathengs@hotmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Meus Arquivos</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Compartilhados comigo</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favoritos</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Lixeira</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-content width="100%">
      <v-img src="../assets/homepage.jpg"></v-img>
    </v-content>

    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Cloud Drive</strong>
      </v-col>
    </v-footer>


    <v-bottom-navigation
      v-model="value"
      :input-value="active"
      color="indigo"
    >
      <v-btn>
        <span>Recentes</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favoritos</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </div>
</v-card>
  
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
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
