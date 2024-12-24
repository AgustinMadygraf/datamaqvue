<!--
Path: src/App.vue
Este componente es el contenedor principal de la aplicación. 
Aquí se importa el componente del encabezado y se muestra en la parte superior de la página. 
También se utiliza el componente <router-view> para mostrar el contenido de las diferentes rutas de la aplicación.
-->

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <header-bar />
    <main class="flex-grow-1">
      <router-view />
    </main>
    <footer class="bg-light text-muted py-3 text-center">
      <p>© 2024 DataMaq - Todos los derechos reservados</p>
    </footer>
  </div>
</template>

<script>
import HeaderBar from './components/Header.vue';
import '@/assets/styles.css';

export default {
  name: 'App',
  components: {
    HeaderBar
  }
};
</script>
