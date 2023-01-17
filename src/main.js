import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import '../public/index.css'

const app = createApp(App);

app.provide("api", axios.create({
    baseURL: "https://api.spacexdata.com/v4"
}));

app.use(router);

app.mount('#app');
