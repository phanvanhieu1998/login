<template>
  <div class="register">
      
      <form @submit.prevent="handleSubmit()">
          
          <h3 style="text-align:center">Sign Up</h3>
         
           
          <div class="form-group">
                <label for="Name" style="margin-left:40px">name</label>
              <input type="text" class="form-control" rules="require" name="name" placeholder="username" v-model="name"/>
          </div>
                
       

          <div class="form-group">
              <label for="firstName=" style="margin-left:40px">email</label>
              <input type="email" class="form-control" name="email" placeholder="email" v-model="email"/>
          </div>
          <div class="form-group">
              <label for="firstName=" style="margin-left:40px">password</label>
              <input type="password" class="form-control" name="password" placeholder="Password" v-model="password"/>
          </div>
          <div class="form-group">
              <label for="firstName=" style="margin-left:40px">c_password</label>
              <input type="password" class="form-control" name="password" placeholder="Password" v-model="c_password"/>
          </div>

         
         
         

          <button style="width:80%;margin: 0 auto" class="btn btn-primary btn-block">Sign Up</button>
      </form>
  </div>
</template>

<script>


export default {

 data(){
     return{
         
         name:'',
         email:'',
         password:'',
         c_password:''
         
     }
 },

 methods:{
//    async handleSubmit(){
//         await axios.post('https://api.meiboutiques.work/v1/admin/register', {
//             name:this.name,
//             email:this.email,
//             password:this.password,
//             c_password:this.c_password
//         })

        
        
//     },
    handleSubmit(){
        this.$store.dispatch('handleSubmit',{
            name:this.name,
            email:this.email,
            password:this.password,
            c_password:this.c_password
        
        })
    }

}
}
</script>
<style scoped>
.register{
    width: 30%;
    height: 500px;
    background-color:white ;
    border-radius: 20px;
    margin: 0 auto;
}
.form-control{
    width: 80%;
    margin: 0 auto;
    
}
</style>