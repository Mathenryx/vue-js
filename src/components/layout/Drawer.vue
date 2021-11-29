<template>
    <v-navigation-drawer  
      absolute
      expand-on-hover
      float-left
    >
      <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/29.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item :to="{path: '/'}">
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
          <v-list-item :to="{path: '/myFiles'}">
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Meus Arquivos</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{path: '/favorites'}">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favoritos</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{path: '/bin'}">
            <v-list-item-icon>
              <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Lixeira</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({}),
};
</script>