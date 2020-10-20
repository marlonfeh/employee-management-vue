import { createApp } from 'vue'

import router from './router.js';
import store from './store/index.js';


import App from './App.vue'

import ButtonMainLight from './components/ui/ButtonMainLight.vue';
import ButtonMainDark from './components/ui/ButtonMainDark.vue';

const app = createApp(App)

app.use(router);
app.use(store);

app.component('button-main-light', ButtonMainLight);
app.component('button-main-dark', ButtonMainDark);

app.mount('#app');