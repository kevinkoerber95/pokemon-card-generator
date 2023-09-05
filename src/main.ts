import './assets/main.css'

import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue';

// @ts-ignore
import * as bootstrap from 'bootstrap';

import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
