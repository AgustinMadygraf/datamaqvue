/*
Path: src/utils/highchartsConfig.js
Descripción:
Este script contiene la configuración de Highcharts para el gráfico de producción por unidad de tiempo, 
incluyendo ajustes de localidad en español.
*/

import Highcharts from 'highcharts';

// Establecemos opciones globales de idioma (localidad) en Highcharts
Highcharts.setOptions({
  lang: {
    decimalPoint: ',',
    thousandsSep: '.', // Puedes elegir el separador deseado
    weekdays: [
      'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
    ],
    months: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    // Aquí puedes añadir más traducciones si lo requieres (por ejemplo, 'loading', 'noData', etc.)
  }
});

export const chartOptions = {
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
    plotLines: [
      {
        value: 0,
        width: 1,
        color: '#808080'
      }
    ]
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
  ],
  // Puedes sobreescribir algunas propiedades de 'lang' aquí también, aunque
  // al usar setOptions arriba, no es estrictamente necesario.
  lang: {
    decimalPoint: ',',
    thousandsSep: '.'
  }
};
