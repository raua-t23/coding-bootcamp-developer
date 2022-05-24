import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import cartStore from './stores/cartStore';
import { data } from './data/db.json';

const app = createApp(App);

app.use(router);
app.use(cartStore);

app.provide('mockData', data);

app.mount('#app');
