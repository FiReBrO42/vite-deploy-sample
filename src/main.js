import { createApp } from 'vue';
import { createPinia } from 'pinia'

//Bootstrap
import './assets/all.scss'

// VueLoading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// Vueaxios 
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueAxios, axios)

app.component('VueLoading', Loading)

app.mount('#app')
