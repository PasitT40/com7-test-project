import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import 'vue-final-modal/style.css';

//Axios imported
import * as Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createVfm } from 'vue-final-modal';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faInbox, faTruck } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */

import './assets/main.css';
import './assets/tailwind.css';

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);
const vfm = createVfm();
library.add(faInbox);
library.add(faTruck);

app.use(createPinia());
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios); // provide 'axios'
app.use(vfm);

app.mount('#app');
