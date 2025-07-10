import './bootstrap';
// import '../css/app.css'; // Temporarily disabled due to PostCSS errors

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');