import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importa map de 'rxjs/operators'
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class PieChartService {
  grafico3: any[] = [];
  constructor(private service: DataService) { }

  getPieChartConfig(): any {
    return {
      view: [700, 400],
      gradient: false, // Quita la declaración de tipo boolean
      animations: true,

      colorScheme: {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      }
    };
  }

  getPieData(): Observable<any[]> {
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
