import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class HeatMapService {
  grafico6: any[] = [];
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
    return this.service.obtenerDatosService().pipe(
      map((data: any) => {
        const contadoresEmpleado = data.contadores_empleado;
        const chartData: any[] = [];
  
        for (const key in contadoresEmpleado) {
          if (contadoresEmpleado.hasOwnProperty(key)) {
            const empleadoId = key;
            const cantidad = contadoresEmpleado[key];
            chartData.push({
              name: `Empleado ${empleadoId}`,
              value: cantidad
            });
          }
        }
  
        return chartData;
      })
    );
  }
}
