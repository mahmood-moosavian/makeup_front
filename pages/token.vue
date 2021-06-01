<template>
  <div>
      <h1>Token</h1>
      <button @click="saveToken" type="button">save Token</button>
  </div>
</template>

<script>
export default {

methods:{
    saveToken(){
        this.$store.dispatch('auth/saveToken', {access_token:"sa5d41ad", refresh_token:"asd6541d2a3sd2", expires_in:556666666})
    }
}
}
</script>

<style>

</style> 