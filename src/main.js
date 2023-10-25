import App from './App.vue';
import { createApp } from 'vue';
// import router from './router';
// import store from './store';

// Plugins
import { registerPlugins } from '@/plugins';

const app = createApp(App);
registerPlugins(app);
app.mount('#app');
