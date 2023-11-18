import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Cliente } from './cliente.model'; // modelo para Cliente
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://107.22.174.168:8000/api/clientes'; // Reemplaza con la URL de tu API real

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('https://forcemental.azure-api.net/cliente/api/clientes/').pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un cliente por ID
  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo cliente
  addCliente(cliente: Cliente): Observable<Cliente> {
    console.log("Enviando cliente:", cliente);  // Agrega esto para depurar
    console.log("Objeto cliente completo:", cliente);
    return this.http.post<Cliente>(`${this.apiUrl}/create/`, cliente).pipe(
        catchError(this.handleError)
    );
}

  


  // Actualizar un cliente
  updateCliente(cliente: Cliente): Observable<Cliente> {
    // Comprobación para asegurar que el cliente tiene un ID válido
    if (cliente && cliente.id) {
      // Realizar la solicitud PUT
      return this.http.put<Cliente>(`${'http://107.22.174.168:8000/api/clientes'}/${cliente.id}/`, cliente);
    } else {
      // Manejar el caso en el que el cliente no tiene un ID válido
      console.error('No se puede actualizar el cliente sin un ID válido');
      // Aquí puedes retornar un observable que indique el error
      return throwError("Cliente sin ID válido");
    }
  }

  
  

  // Eliminar un cliente
  deleteCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${'http://107.22.174.168:8000/api/clientes'}/${id}`);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error inesperado; por favor intenta de nuevo más tarde.';

    // Si el error es una respuesta del backend
    if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente o de red
        console.error('Ocurrió un error:', error.error.message);
    } else {
        // El backend devolvió un código de estado no exitoso
        console.error(`El backend retornó el código ${error.status}, contenido del error: `, error.error);

        // Personalizar mensaje basado en el código de estado
        if (error.status === 400) {
            errorMessage = 'Solicitud inválida. Por favor verifica tus datos.';
        } else if (error.status === 404) {
            errorMessage = 'Recurso solicitado no encontrado.';
        } else if (error.status === 500) {
            errorMessage = 'Error interno del servidor. Por favor intenta de nuevo más tarde.';
        }

        // Usar mensaje de error del backend si está disponible
        if (error.error && error.error.message) {
            errorMessage = error.error.message;
        }
    }

    // Mostrar mensaje de error al usuario
    return throwError(() => new Error(errorMessage));
}


  
  
}

