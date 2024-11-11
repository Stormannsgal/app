import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";

import 'vue-toastification/dist/index.css'
import '@/assets/toast.css';
import '@/assets/main.css'

import App from '@/App.vue'
import router from '@/router'
import '@/plugin/axios.js';


const app = createApp(App)
const options = {
  toastClassName: 'custom',
  bodyClassName: ['custom'],
};

app.use(createPinia())
app.use(router)
app.use(Toast, options);
app.mount('#app')
