<template>
  <div>
    <h1>User Page</h1>
    {{getDisplayName}}
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
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
  computed:{
    ...mapGetters('profile',['getDisplayName'])
  },


}
</script>
<style>

</style>
