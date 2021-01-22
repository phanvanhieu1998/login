<template>
  <div>
      <h1 v-if="user"> hi, {{user.name}}
      </h1>
      <h2 v-if="!user">
        ban chua dang nhap
      </h2>
  </div>
</template>

<script>

export default {
  data(){
    return{
      user:null
    }
  },
   async created(){
      this.$store.dispatch('profile').then((res) =>{
        this.user = res
       
      })
      
     }
}

</script>

<style>

</style>