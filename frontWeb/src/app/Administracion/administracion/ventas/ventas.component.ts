import { Component, OnInit } from '@angular/core';
import { VentasService } from './ventas.service';
import { Producto } from '../productos/producto.model';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  ventas: any[] = []; // Tus datos de ventas originales
  ventasFiltradas: any[] = []; // Datos filtrados que se mostrarán en la tabla
  columnasMostradas: string[] = ['nombreCliente', 'productoVendido', 'estado', 'nombreEjecutivo'];
  estadoSeleccionado: string = 'todos'; // Estado inicial del filtro

  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.cargarVentas();
  }

  aprobarVenta(idVenta: number): void {
    // Lógica para aprobar la venta
    this.ventasService.aprobarVenta(idVenta).subscribe({
      next: (ventaActualizada) => {
        // Actualizar la interfaz de usuario o hacer algo con la respuesta
        console.log('Venta aprobada:', ventaActualizada);
        this.cargarVentas(); // Recargar las ventas para reflejar los cambios
      },
      error: (error) => console.error('Error al aprobar la venta:', error)
    });
  }

  cancelarVenta(idVenta: number): void {
    // Lógica para cancelar la venta
    this.ventasService.cancelarVenta(idVenta).subscribe({
      next: (ventaActualizada) => {
        // Actualizar la interfaz de usuario o hacer algo con la respuesta
        console.log('Venta cancelada:', ventaActualizada);
        this.cargarVentas(); // Recargar las ventas para reflejar los cambios
      },
      error: (error) => console.error('Error al cancelar la venta:', error)
    });
  }


  cargarVentas(): void {
    this.ventasService.getVentas().subscribe((data: any[]) => {
      console.log(data)
      this.ventas = data.map(venta => ({
        ...venta,
        nombreCliente: venta.cliente_info ? `${venta.cliente_info.nombre} ${venta.cliente_info.apellido}` : 'N/A',
        productoVendido: this.obtenerNombresDeProductos(venta.productos),
        estado: venta.estado_venta,
        nombreEjecutivo: `Ejecutivo ID: ${venta.ejecutivo_id}` // Aquí necesitas implementar la lógica para obtener el nombre real del ejecutivo
      }));
      this.ventasFiltradas = this.ventas;
    });
  }
  
  private obtenerNombresDeProductos(productos: any[]): string {
    if (Array.isArray(productos) && productos.length > 0) {
      return productos.map(p => p.nombre).join(', ');
    }
    return 'No Products';
  }
  
  
  

  

  filtrarPorEstado(estado: string): void {
    console.log('Filtrando por estado:', estado);
    this.estadoSeleccionado = estado;
    if (estado === 'todos') {
      this.ventasFiltradas = this.ventas;
    } else {
      this.ventasFiltradas = this.ventas.filter(venta => {
        console.log('Comparando:', venta.estado, 'con', estado);
        return venta.estado === estado;
      });
    }
    console.log('Ventas filtradas:', this.ventasFiltradas);
  }
  


  onEstadoSeleccionado(event: any): void {
    this.estadoSeleccionado = event.target.value;
    this.filtrarPorEstado(this.estadoSeleccionado); // Pasa el estado seleccionado
  }

}
