<!--
Path: src/components/ChartViewer.vue
Este componente muestra gráficos utilizando Highcharts y datos provenientes de una API.
-->

<template>
  <div>
    <h2 class="text-center my-4">Producción de la Línea</h2>
    <div class="d-flex justify-content-center mb-4">
      <input type="date" v-model="selectedDate" @change="loadChartData" />
      <select v-model="timeRange" @change="loadChartData">
        <option value="8h">Últimas 8 horas</option>
        <option value="24h">Últimas 24 horas</option>
        <option value="7d">Últimos 7 días</option>
      </select>
    </div>
    <div id="chart-container" class="min-vh-50"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts';
import { chartOptions } from '../utils/highchartsConfig';
import { fetchChartData } from '../utils/fetchData';

export default {
  name: 'ChartViewer',
  data() {
    return {
      chart: null,
      chartOptions,
      selectedDate: '',
      timeRange: '24h'
    };
  },
  mounted() {
    this.selectedDate = new Date().toISOString().split('T')[0]; // Establecer la fecha actual por defecto
    this.chart = Highcharts.chart('chart-container', this.chartOptions);
    this.loadChartData();
  },
  methods: {
    async loadChartData() {
      if (!this.selectedDate) return;

      const endDate = new Date(this.selectedDate);
      endDate.setHours(16, 0, 0, 0); // Establecer la hora de endDate a las 16:00 (4 PM)
      let startDate;

      switch (this.timeRange) {
        case '8h':
          startDate = new Date(endDate.getTime() - 8 * 60 * 60 * 1000);
          break;
        case '24h':
          startDate = new Date(endDate.getTime() - 24 * 60 * 60 * 1000);
          break;
        case '7d':
          startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);
          break;
      }

      const formattedStartDate = startDate.toISOString();
      const formattedEndDate = endDate.toISOString();

      try {
        const { sensorInductivo, sensorOptico } = await fetchChartData(formattedStartDate, formattedEndDate);
        this.chart.series[0].setData(sensorInductivo);
        this.chart.series[1].setData(sensorOptico);
      } catch (error) {
        console.error('Error al cargar los datos del gráfico:', error);
      }
    }
  }
};
</script>

<style scoped>
#chart-container {
  width: 100%;
  height: 400px;
  margin: 0 auto;
}
</style>
