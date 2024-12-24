<!--
Path: src/components/ChartViewer.vue
Este componente muestra gráficos utilizando Highcharts y datos provenientes de una API.
-->

<template>
    <div>
      <h2 class="text-center my-4">Producción de la Línea</h2>
      <div id="chart-container" style="min-height: 400px;"></div>
    </div>
  </template>
  
  <script>
  import Highcharts from 'highcharts';
  
  export default {
    name: 'ChartViewer',
    data() {
      return {
        chart: null,
        chartOptions: {
          chart: {
            type: 'spline',
            animation: false,
            marginRight: 10
          },
          title: {
            text: 'Producción por Unidad de Tiempo'
          },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
          },
          yAxis: {
            title: {
              text: 'Unidades por Minuto'
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            formatter() {
              return `<b>${this.series.name}</b><br/>
                ${Highcharts.dateFormat('%A, %d %B %Y, %H:%M:%S', this.x)}<br/>
                ${Highcharts.numberFormat(this.y, 2)} unidades/min`;
            }
          },
          legend: {
            enabled: true
          },
          series: [
            {
              name: 'Sensor Inductivo',
              data: []
            },
            {
              name: 'Sensor Óptico',
              data: []
            }
          ]
        }
      };
    },
    mounted() {
      // Inicializar el gráfico después de que el componente esté montado
      this.chart = Highcharts.chart('chart-container', this.chartOptions);
      this.loadChartData();
    },
    methods: {
      async loadChartData() {
        try {
          // Reemplazar con la URL de tu endpoint
          const response = await fetch('http://localhost/datamaqvue/src/assets/getData.php');
          const data = await response.json();
  
          // Mapear los datos para Highcharts
          const sensorInductivo = data.map(item => [
            item.unixtime * 1000, // Convertir tiempo Unix a milisegundos
            item.HR_COUNTER1 / 5
          ]);
          const sensorOptico = data.map(item => [
            item.unixtime * 1000,
            item.HR_COUNTER2 / 5
          ]);
  
          // Actualizar los datos en el gráfico
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
  