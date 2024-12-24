/*
Path: src/router/index.js
Este script crea un enrutador que se utilizará en la aplicación de Vue.
*/

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/Home.vue';
import ChartViewer from '@/components/ChartViewer.vue'; // Importar el componente ChartViewer

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/chart', // Definir la ruta para ChartViewer
    name: 'ChartViewer',
    component: ChartViewer
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;