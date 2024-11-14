import '/node_modules/primeflex/primeflex.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/reset.css'
import '@/assets/toast.css';
import '@/assets/main.css'

import App from '@/App.vue'
import router from '@/router'
import '@/plugin/axios.js';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara'

import 'primeicons/primeicons.css'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Checkbox from 'primevue/checkbox';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Message from 'primevue/message';
import {definePreset} from "@primevue/themes";


const app = createApp(App)

const stylePreset = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          50: '{gray.50}',
          100: '{gray.100}',
          200: '{gray.200}',
          300: '{gray.300}',
          400: '{gray.400}',
          500: '{gray.500}',
          600: '{gray.600}',
          700: '{gray.700}',
          800: '{gray.800}',
          900: '{gray.900}',
          950: '{gray.950}'
        }
      }
    }
  }
});

app.use(PrimeVue, {
  theme: {
    preset: stylePreset,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false
    },
  }
});

app.component('Button', Button);
app.component('InputText', InputText);
app.component('FloatLabel', FloatLabel);
app.component('Checkbox', Checkbox);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('Message', Message);
app.component('Toast', Toast);

app.use(createPinia())
app.use(router)
app.use(ToastService)
app.mount('#app')
