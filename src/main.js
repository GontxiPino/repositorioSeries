import { createApp } from 'vue'
// import {createRouter,createWebHistory} from 'vue-router'
import router from './router'
import {createPinia} from 'pinia';
import App from './App.vue';
import './tailwind.css';


const app = createApp(App);
const pinia = createPinia()

app.use(router)
app.use(pinia)


app.mount('#app')
