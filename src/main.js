/*
Path: src/main.js
Este script es el punto de entrada de la aplicación. 
Aquí se importa el componente raíz App.vue y se monta 
en el elemento con el id app.
 */

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const app = createApp(App);
app.use(router);
app.mount('#app');