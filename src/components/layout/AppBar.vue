<template>
  <v-app-bar color="grey">
    <div style="padding-left:60px">
      <v-toolbar-title >Cloud Drive</v-toolbar-title>
    </div>
    <v-spacer ></v-spacer>
    <v-btn icon disabled>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon disabled>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon disabled>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>