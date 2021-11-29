<template>
    <v-bottom-navigation
      v-model="value"
      :input-value="active"
      color="indigo"
    >
      <v-btn :to="{path: '/myFiles'}">
        <span>Meus Arquivos</span>
        <v-icon>mdi-folder</v-icon>
      </v-btn>

      <v-btn :to="{path: '/favorites'}">
        <span>Favoritos</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn :to="{path: '/bin'}">
        <span>Lixeira</span>
        <v-icon>mdi-delete</v-icon>
      </v-btn>

    </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({}),
};
</script>