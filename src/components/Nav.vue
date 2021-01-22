<template>
  <div>
    
    <nav class="navbar navbar-expand navbar-light ">

        <div class="container">
            <a href="#" class="navbar-brand">Home</a>
        <div class="collapse navbar-collapse">

         <ul  class="navbar-nav ml-auto">

            <li class="nav-item">
                <router-link to="/login" class="nav-link">Login</router-link>
            </li>

            <li class="nav-item">   
               <router-link to="/register" class="nav-link">Sign up</router-link>
            </li> 
            

          </ul>
          <ul >
            <li>
               <a href="javascript:void(0)" @click="handle">logout</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
   
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
 
    }
    
  },
  methods:{
     handle(){
       axios.post('/v1/admin/logout',{
        headers:{
          Authorization:  "Bearer " + localStorage.getItem("token")
        }
     })
     .then((res) =>{
       console.log(res.data)
       this.$router.push('/login')
     })
     localStorage.removeItem('token')

    }
  
    
  }
 

 
};
</script>

<style>
</style>