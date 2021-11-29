<template>
<div style="padding-top:8%; padding-bottom:8%">
  <v-card
    :loading="loading"
    class="mx-auto"
    max-width="360"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="100px"
    ></v-img>

    <v-card-title>{{file.name}}</v-card-title>

    <v-card-subtitle>{{file.issueDate}}</v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="show = !show"
      >
        Descrição
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>{{file.description}}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</div>
</template>

<script>
  export default {
    props:['file'],
    data: () => ({
      loading: false,
      selection: 1,
      show: false
    }),
    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>