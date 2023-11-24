import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto.model'; // crear un modelo para Producto

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'https://forcemental.azure-api.net/productos/api/productos/'; // Reemplaza con la URL de tu API real

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
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

    return this.http.post<Producto>('http://107.22.174.168:8020/api/productos/', producto, httpOptions);
  }

  // Actualizar un producto
  updateProducto(producto: Producto): Observable<Producto> {
    console.log(producto.id_producto);
    return this.http.put<Producto>(`${'http://107.22.174.168:8020/api/productos/'}${producto.id_producto}/`, producto);
  }

  // Eliminar un producto
  deleteProducto(id: number): Observable<Producto> {
    return this.http.delete<Producto>(`${'http://107.22.174.168:8020/api/productos/'}${id}`);
  }
}
