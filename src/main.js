import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import axios from 'axios';


const app = createApp(App);

const pinia = createPinia();
app.use(pinia);


app.config.globalProperties.$axios = axios;

app.use(router);

app.mount('#app');
