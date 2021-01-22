import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
  },
  getters:{
   
  },
  mutations: {
 
  
  },
  actions: {
    handleSubmit({commit},item){
      return new Promise((resolve,reject) =>{
          axios.post('/v1/admin/register',item )
      .then(res =>{
         console.log(res.data.message)
          resolve(res.data)
          
          commit
      })
      .catch(err =>{
          console.log('loi')
          reject(err)
      })

      })
  },
  login({commit,dispatch},data){
    return new Promise((resolve,reject) =>{
         axios.post('/v1/admin/login', data)
       .then(res =>{
        localStorage.setItem('token',res.data.data.token)
        
        console.log(res.data.data.token)
        resolve(res.data)
         dispatch('profile')
        
        commit
    })
    .catch(err =>{
        reject(err)
    })  

    })
  },
  profile(){
    return new Promise((resolve,reject)=>{
      axios.get('/v1/admin/profile')
      .then((res) =>{
        console.log(res)
        resolve(res.data.data)
      })
      .catch(err =>{
        reject(err)
      })
    })
  }
  

  },
  modules: {
  }
})
