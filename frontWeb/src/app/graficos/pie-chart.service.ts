// pie-chart.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PieChartService {
  getPieChartData(): Observable<any> {
    const data: any[] = [
      { name: 'Category 1', value: 30 },
      { name: 'Category 2', value: 25 },
      { name: 'Category 3', value: 20 },
      { name: 'Category 4', value: 15 },
    ];

    // Define la estructura del objeto pieChartData directamente aquí
    const pieChartData: any = {
      single: data,
      view: [700, 400],
      gradient: true,
      showLegend: true,
      showLabels: true,
      isDoughnut: false,
      colorScheme: {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      }
    };

    console.log('Datos del gráfico de pie obtenidos:', pieChartData);
    
    return of(pieChartData);
  }
}
