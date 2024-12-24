/*
Path: src/utils/fetchData.js
Este script contiene la función fetchChartData que se encarga de 
realizar una petición HTTP GET a un servidor remoto
*/

export async function fetchChartData(startDate, endDate) {
    try {
      const response = await fetch(`http://localhost/datamaqvue/src/assets/getData.php?start=${startDate}&end=${endDate}`);
      const data = await response.json();
  
      const sensorInductivo = data.map(item => [
        item.unixtime * 1000,
        item.HR_COUNTER1 / 5
      ]);
      const sensorOptico = data.map(item => [
        item.unixtime * 1000,
        item.HR_COUNTER2 / 5
      ]);
  
      return { sensorInductivo, sensorOptico };
    } catch (error) {
      console.error('Error al cargar los datos del gráfico:', error);
      throw error;
    }
  }