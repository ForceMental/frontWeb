import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private apiUrl = 'https://forcemental.azure-api.net/venta/api/Listaventas/'; // URL de tu API

  constructor(private http: HttpClient) { }

  getVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  aprobarVenta(ventaId: number): Observable<any> {
    // Lógica para enviar una solicitud HTTP para aprobar la venta
    // Asegúrate de usar la URL y método HTTP correctos
    return this.http.post<any>(`${this.apiUrl}/ventas/aprobar/${ventaId}`, {});
  }

  cancelarVenta(ventaId: number): Observable<any> {
    // Lógica para enviar una solicitud HTTP para cancelar la venta
    // Asegúrate de usar la URL y método HTTP correctos
    return this.http.post<any>(`${this.apiUrl}/ventas/cancelar/${ventaId}`, {});
  }

}