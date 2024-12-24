/*
Path: src/utils/highchartsConfig.js
Este script contiene la configuración de Highcharts para el gráfico de producción por unidad de tiempo.
*/

import Highcharts from 'highcharts';

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
  ],
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
};
