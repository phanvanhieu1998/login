<template>
  <div id="app">
      <Nav />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
      
        <div class="auth-wrapper">
          <div class="auth-inner">
            <!-- <router-link to="/login">Login</router-link>  -->  
              <router-view  />
               <Home/>
          </div>
        </div>

        <div style="background-color:red;width:100px;height:100px">
         
        </div>
        
  </div>
</template>

 <script>

import Nav from '@/components/Nav.vue'
 import Home from '@/components/Home.vue'


 export default {
   data(){
     return{
        
     }
   },
  components:{
    Nav,
     Home,
   
  },

  
}
</script>
<style>
.auth-wrapper{
  width: 100%;
  height: 600px;
  background-color:#3498DB;
  padding-top: 20px ;
}

</style>
