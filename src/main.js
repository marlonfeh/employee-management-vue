import { createApp } from 'vue'

import router from './router.js';
import store from './store/index.js';


import App from './App.vue'

import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import ButtonMainLight from './components/ui/ButtonMainLight.vue';
import ButtonMainDark from './components/ui/ButtonMainDark.vue';
import ButtonSecondary from './components/ui/ButtonSecondary.vue';

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('button-main-light', ButtonMainLight);
app.component('button-main-dark', ButtonMainDark);
app.component('button-secondary', ButtonSecondary);

app.mount('#app');