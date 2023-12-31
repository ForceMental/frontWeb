import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    const url = 'https://forcemental.azure-api.net/dashboard/api/service_venta';

    return this.http.get(url);
  }

  obtenerDatosSegundaUrl(): Observable<any> {
    
    const url = 'https://forcemental.azure-api.net/dashboard/api/service';
    return this.http.get(url);
  }
  

}
