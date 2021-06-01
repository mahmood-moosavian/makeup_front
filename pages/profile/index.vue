<template>
  <div>
    <h1>User Page</h1>
    {{}}
  </div>
</template>
<script>
export default {
  layout:'user',

  // async fetch() {
  //   await this.$auth
  //     .fetchUser()
  //     .then((response) => (this.loggedInUser = response.data.data))
  // },
  data() {
    return {
      loggedInUser: null,
    }
  },
  mounted(){
    // this.loggedInUser = this.$auth.user.data
  }

}
</script>
<style>

</style>
