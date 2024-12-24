<!-- 
 Path: Header.vue 
 Este 
 -->

6<template>
    <header>
      <nav>
        <ul class="nav-list">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/estado">Estado del Equipo</router-link></li>
          <li><router-link to="/costos">Costos Bolsas</router-link></li>
          <li><router-link to="/formato">Formato</router-link></li>
          <li><router-link to="/horas">Horas</router-link></li>
          <li><router-link to="/phpmyadmin" target="_blank">PHP MyAdmin</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderBar",
  };
  </script>
  
  <style scoped>
  header {
    background-color: #007bff;
    color: white;
    padding: 10px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .nav-list {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
  }
  
  .nav-list li {
    margin: 0 15px;
  }
  
  .nav-list a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .nav-list a:hover {
    color: #d1e8ff;
  }
  
  .nav-list a.router-link-active {
    border-bottom: 2px solid #ffffff;
  }
  </style>
  