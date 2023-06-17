import './assets/main.css'
import { firebaseApp } from './firebaseReference';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

firebaseApp();
app.use(createPinia());
app.use(router);

app.mount('#app');
