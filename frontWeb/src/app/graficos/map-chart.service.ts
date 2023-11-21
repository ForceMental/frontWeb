// map-chart.service.ts
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class MapChartService {
  grafico5: any[] = [];
  constructor(private service: DataService) { }

  

  getMapData(): Observable<any[]> {
    // Realiza la solicitud HTTP para obtener los datos de servicio
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
