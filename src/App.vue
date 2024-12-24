<!--
Path: src/App.vue
Este componente es el contenedor principal de la aplicación. 
Aquí se importa el componente del encabezado y se muestra en la parte superior de la página. 
También se utiliza el componente <router-view> para mostrar el contenido de las diferentes rutas de la aplicación.
-->

<template>
  <div id="app">
    <header-bar />
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2024 DataMaq - Todos los derechos reservados</p>
    </footer>
  </div>
</template>

<script>
// Importar el componente del encabezado
import HeaderBar from './components/Header.vue';

export default {
  name: 'App',
  components: {
    HeaderBar
  }
};
</script>

<style>
/* Estilos generales para la aplicación */
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

header {
  background-color: #007BFF;
  color: white;
  padding: 10px;
}

main {
  padding: 20px;
}

footer {
  background-color: #f8f9fa;
  color: #6c757d;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
