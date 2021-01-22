import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'
import * as VeeValidate from 'vee-validate';
import axios from 'axios'
const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}
Vue.use(VeeValidate);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
