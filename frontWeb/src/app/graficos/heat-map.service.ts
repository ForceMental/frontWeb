import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class HeatMapService {
  grafico6: any[] = [];
  app: any [] = [];
  constructor(private service: DataService) { }

  getHeatMapConfig(): any {
    return {
      view: [700, 300],
      legend: true,
      showLabels: true,
      animations: true,
      xAxis: true,
      yAxis: true,
      showYAxisLabel: true,
      showXAxisLabel: true,
      xAxisLabel: true,
      yAxisLabel: true,
      colorScheme: {
        domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
      }
    };
  }

  getHeatMapData(): Observable<any[]> {
    return this.service.obtenerDatos().pipe(
      map((data: any) => {
        const sumaProductos = data.suma_productos;
        const chartData: any[] = [];

        for (const key in sumaProductos) {
          if (sumaProductos.hasOwnProperty(key)) {
            const producto = sumaProductos[key];
            chartData.push({
              name: producto.nombre,
              value: producto.cantidad
            });
          }
        }

        return chartData;
      })
    );
  }
}
