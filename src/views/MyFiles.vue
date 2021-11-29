<template>

<v-card>
  {{files}}
</v-card>

</template>

<script>

 export default {
   data: () => ({}),
    computed:{
      files(){
        return this.$store.state.files
      }
    },
  }
</script>
