import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import 'vue-final-modal/style.css';

//Axios imported
import * as Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createVfm } from 'vue-final-modal';

import './assets/main.css';
import './assets/tailwind.css';

const app = createApp(App);
const vfm = createVfm();

app.use(createPinia());
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios); // provide 'axios'
app.use(vfm);

app.mount('#app');
