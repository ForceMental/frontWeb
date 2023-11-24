import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private apiUrl = 'http://107.22.174.168:8030/api/Listaventas'; // URL de tu API

  constructor(private http: HttpClient) { }

  getVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

}
