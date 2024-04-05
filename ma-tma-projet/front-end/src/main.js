import { createApp } from 'vue';
import router from './routes/route.js'; 
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
