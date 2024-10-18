import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/styles.css'; // Optional: Import a custom CSS file for dark theme
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


// Create app instance
const app = createApp(App);

// Use router
app.use(router);

// Mount the app
app.mount('#app');
