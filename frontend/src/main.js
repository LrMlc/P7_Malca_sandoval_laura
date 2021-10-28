import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

axios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if (token != null){
        config.headers["authorization"]= token;
    }
    return config;
});
createApp(App).use(router).use(store).mount('#app')
