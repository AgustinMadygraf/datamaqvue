<!-- 
 Path: Header.vue 
 Este 
 -->
 
 <template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">DataMaq</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/estado">Estado del Equipo</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/costos">Costos Bolsas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/formato">Formato</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/horas">Horas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/chart">Gráficos</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>
