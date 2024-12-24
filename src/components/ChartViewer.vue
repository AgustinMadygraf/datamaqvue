<!--
Path: src/components/ChartViewer.vue
Este componente muestra gráficos utilizando Highcharts y datos provenientes de una API.
-->

<template>
  <div>
    <h2 class="text-center my-4">Producción de la Línea</h2>
    <div id="chart-container" class="min-vh-50"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts';
import { chartOptions } from '../utils/highchartsConfig';

export default {
  name: 'ChartViewer',
  data() {
    return {
      chart: null,
      chartOptions
    };
  },
  mounted() {
    this.chart = Highcharts.chart('chart-container', this.chartOptions);
    this.loadChartData();
  },
  methods: {
    async loadChartData() {
      try {
        const response = await fetch('http://localhost/datamaqvue/src/assets/getData.php');
        const data = await response.json();

        const sensorInductivo = data.map(item => [
          item.unixtime * 1000,
          item.HR_COUNTER1 / 5
        ]);
        const sensorOptico = data.map(item => [
          item.unixtime * 1000,
          item.HR_COUNTER2 / 5
        ]);

        this.chart.series[0].setData(sensorInductivo);
        this.chart.series[1].setData(sensorOptico);
      } catch (error) {
        console.error('Error al cargar los datos del gráfico:', error);
      }
    }
  }
};
</script>
