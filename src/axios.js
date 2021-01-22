
import axios from 'axios';
axios.defaults.baseURL = 'https://api.meiboutiques.work/';
axios.defaults.headers.common['Authorization'] =  "Bearer " + localStorage.getItem("token")
