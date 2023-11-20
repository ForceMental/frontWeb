import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class NumberCardService {
  grafico4: any[] = [];
  constructor(private service: DataService) { }

  getNumberCardConfig(): any {
    return {
      view: [700, 400],
      scheme: {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      },
      gradient: false,
      animations: true,
    };
  }

  getNumberCardData(): Observable<any[]> {
    return this.service.obtenerDatos().pipe(
      map((data: any) => {
        const conteoEjecutivoId = data.conteo_ejecutivo_id;
        const chartData: any[] = [];

        for (const key in conteoEjecutivoId) {
          if (conteoEjecutivoId.hasOwnProperty(key)) {
            const producto = conteoEjecutivoId[key];
            chartData.push({
              name: key, // Utiliza la clave como nombre
              value: producto
            });
          }
        }

        return chartData;
      })
    );
  }
}
