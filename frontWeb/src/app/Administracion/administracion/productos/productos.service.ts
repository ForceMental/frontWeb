import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto.model'; // crear un modelo para Producto

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'https://forcemental.azure-api.net/productos'; // Reemplaza con la URL de tu API real

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/api/productos/`);
  }

  // Obtener un producto por ID
  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo producto
  addProducto(producto: Producto): Observable<Producto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Producto>(`${this.apiUrl}/api/productos/`, producto, httpOptions);
  }

  // Actualizar un producto
  updateProducto(producto: Producto): Observable<Producto> {
    console.log(producto.id_producto);
    return this.http.put<Producto>(`${this.apiUrl}/api/productos/${producto.id_producto}/`, producto);
  }

  // Eliminar un producto
  deleteProducto(id: number): Observable<Producto> {
    return this.http.delete<Producto>(`${this.apiUrl}/api/productos/${id}`);
  }
}
