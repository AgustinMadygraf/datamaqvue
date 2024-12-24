<template>
    <div class="container py-5">
      <div class="text-center">
        <h1 class="display-4">Bienvenido a DataMaq</h1>
        <p class="lead">Control y registro eficiente de la producción</p>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Estado del Equipo</h5>
              <p class="card-text">Consulta el estado actual de las máquinas y su rendimiento.</p>
              <router-link to="/estado" class="btn btn-primary">Ver Estado</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Costos de Producción</h5>
              <p class="card-text">Revisa los costos asociados a la producción de bolsas de papel.</p>
              <router-link to="/costos" class="btn btn-primary">Ver Costos</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Formato de Producción</h5>
              <p class="card-text">Gestiona y visualiza los formatos de producción configurados.</p>
              <router-link to="/formato" class="btn btn-primary">Ver Formato</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Horas Trabajadas</h5>
              <p class="card-text">Consulta el registro de las horas trabajadas en la planta.</p>
              <router-link to="/horas" class="btn btn-primary">Ver Horas</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomeView",
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }
  .card:hover {
    transform: scale(1.05);
  }
  </style>
  