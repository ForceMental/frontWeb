// productos.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductosService } from './productos.service';
import { Producto } from './producto.model';
import { ProductoEditDialogComponent } from './producto-edit-dialog/producto-edit-dialog.component'; // Asegúrate de tener este componente para editar productos

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  
  constructor(
    private productosService: ProductosService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (error) => {
        console.error('Error al cargar productos', error);
      }
    });
  }

  nuevoProducto() {
    // Aquí podrías abrir un diálogo para crear un nuevo producto o navegar a una ruta diferente
    const dialogRef = this.dialog.open(ProductoEditDialogComponent, {
      width: '250px',
      data: { producto: {} as Producto } // Pasar un nuevo objeto Producto
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productosService.addProducto(result).subscribe(() => {
          this.cargarProductos(); // Recargar la lista de productos
        });
      }
    });
  }

  editarProducto(producto: Producto) {
    const dialogRef = this.dialog.open(ProductoEditDialogComponent, {
      width: '250px',
      data: { producto } // Pasar el objeto Producto existente
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productosService.updateProducto(result).subscribe(() => {
          this.cargarProductos(); // Recargar la lista de productos
        });
      }
    });
  }

  eliminarProducto(id: number) {
    // Confirmar eliminación antes de realizarla
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.productosService.deleteProducto(id).subscribe(() => {
        this.cargarProductos(); // Recargar la lista de productos
      });
    }
  }
}
