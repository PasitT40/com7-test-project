import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

//Axios imported
import * as Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import './assets/main.css';
import './assets/tailwind.css';

const app = createApp(App);

app.use(createPinia());
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios); // provide 'axios'

app.mount('#app');
