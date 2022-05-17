import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import cartStore from './stores/cartStore';

const app = createApp(App);

app.use(router);
app.use(cartStore);

app.mount('#app');
