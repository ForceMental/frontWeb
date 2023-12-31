// vertical-bar-chart.service.ts
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class VerticalBarChartService {
  grafico2: any[] = [];
  constructor(private service: DataService) { }

  getVerticalBarConfig(): any {
    return {
      
      colorScheme: {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      }
    };
  }

  getVerticalBarData(): Observable<any[]> {
    // Realiza la solicitud HTTP para obtener los datos de servicio_venta
    return this.service.obtenerDatos().pipe(
      map((data: any) => {
        // Formatea los datos para el gráfico de acuerdo a tus necesidades
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

