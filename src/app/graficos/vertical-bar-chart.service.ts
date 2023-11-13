// vertical-bar-chart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerticalBarChartService {

  constructor() { }

  getDefaultChartConfig(): any {
    return {
      view: [700, 400],
      showXAxis: true,
      showYAxis: true,
      gradient: false,
      showLegend: true,
      showXAxisLabel: true,
      xAxisLabel: '',
      showYAxisLabel: true,
      yAxisLabel: 'Total',
      colorScheme: {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      }
    };
  }

  getSampleChartData(): any[] {
    // Proporciona los datos de ejemplo para el gráfico de barras verticales
    return [
      {
        name: 'Camara 4k',
        series: [
          { name: 'chile', value: 200 },
          { name: 'Country 2', value: 450 },
          { name: 'Country 3', value: 100 },
        ]
      },
      {
        name: 'Radar',
        series: [
          { name: 'Country 1', value: 350 },
          { name: 'Country 2', value: 200 },
          { name: 'Country 3', value: 300 },
        ]
      },
      {
        name: 'camara wifi',
        series: [
          { name: 'Country 1', value: 100 },
          { name: 'Country 2', value: 50 },
          { name: 'Country 3', value: 200 },
        ]
      }
    ];
  }
}

