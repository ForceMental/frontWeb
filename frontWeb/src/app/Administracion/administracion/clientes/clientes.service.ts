import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Cliente } from './cliente.model'; // modelo para Cliente
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:8000/clientes'; // Reemplaza con la URL de tu API real

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un cliente por ID
  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo cliente
  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  onSave(cliente: Cliente) {
    console.log("Cliente a actualizar:", cliente);
    // Resto del código...
  }
  

  // Actualizar un cliente
  updateCliente(cliente: Cliente): Observable<Cliente> {
    if ((!cliente.id)) {
      console.error('No se puede actualizar el cliente sin un ID válido');
      return this.http.put<Cliente>(`${this.apiUrl}/${cliente.id}`, cliente);
    } else {
      // Lanza un error o maneja esta situación de alguna manera
      console.error("No se puede actualizar el cliente sin un ID válido");
      return throwError("Cliente sin ID válido");
    }
  }
  
  // Eliminar un cliente
  deleteCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.apiUrl}/${id}`);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Manejo de errores en el cliente, podrías personalizar esto aún más
    console.error(`Backend returned code ${error.status}, body was: `, error.error);
    return throwError(() => 'Something bad happened; please try again later.');
  }
}

