import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CircularChartService {
  getDefaultChartConfig(): any {
    // Configuración predeterminada para el gráfico circular
    return {
      view: [700, 400],
      gradient: true,
      showLegend: true,
      showLabels: true,
      isDoughnut: false,
      colorScheme: {
        domain: ['#A10A28', '#C7B42C', '#AAAAAA'],
      },
    };
  }

  getSampleChartData(): any[] {
    // Datos de ejemplo para el gráfico circular
    return [
      { name: 'Aprobada', value: 156 },
      { name: 'Pendiente', value: 19 },
      { name: 'Cancelada', value: 35 },
    ];
  }
}
