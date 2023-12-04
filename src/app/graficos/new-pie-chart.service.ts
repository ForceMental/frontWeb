// new-pie-chart.service.ts
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class NewPieChartService {
  grafico3: any[] = [];

  constructor(private service: DataService) {}

  getNewPieChartData(): Observable<any[]> {
    // Realiza la solicitud HTTP para obtener los datos de servicio
    return this.service.obtenerDatosService().pipe(
      map((data: any) => {
        const contadorReprogramadas = data.contador_reprogramadas;
        const chartData: any[] = [];

        for (const key in contadorReprogramadas) {
          if (contadorReprogramadas.hasOwnProperty(key)) {
            const status = key;
            const count = contadorReprogramadas[key];
            chartData.push({
              name: `${status === 'True' ? 'Reprogramadas' : 'No Reprogramadas'}`,
              value: count
            });
          }
        }

        return chartData;
      })
    );
  }
}
