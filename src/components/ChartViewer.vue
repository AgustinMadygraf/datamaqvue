<!--
Path: src/components/ChartViewer.vue
Este componente muestra gráficos utilizando Highcharts y datos provenientes de una API.
-->

<template>
  <div>
    <h2 class="text-center my-4">Producción de la Línea</h2>
    <div class="d-flex justify-content-center mb-4">
      <input type="date" v-model="startDate" @change="loadChartData" />
      <input type="date" v-model="endDate" @change="loadChartData" />
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
      startDate: '',
      endDate: ''
    };
  },
  mounted() {
    this.chart = Highcharts.chart('chart-container', this.chartOptions);
    this.loadChartData();
  },
  methods: {
    async loadChartData() {
      try {
        const { sensorInductivo, sensorOptico } = await fetchChartData(this.startDate, this.endDate);
        this.chart.series[0].setData(sensorInductivo);
        this.chart.series[1].setData(sensorOptico);
      } catch (error) {
        console.error('Error al cargar los datos del gráfico:', error);
      }
    }
  }
};
</script>
