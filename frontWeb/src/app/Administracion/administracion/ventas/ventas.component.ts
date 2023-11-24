import { Component, OnInit } from '@angular/core';
import { VentasService } from './ventas.service';

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

  cargarVentas(): void {
    this.ventasService.getVentas().subscribe((data: any[]) => {
      this.ventas = data.map(venta => ({
        ...venta,
        nombreCliente: venta.cliente_info ? `${venta.cliente_info.nombre} ${venta.cliente_info.apellido}` : 'N/A',
        productoVendido: venta.productos.map((p: any) => p.nombre).join(', ')
,
        estado: venta.estado_venta,
        nombreEjecutivo: `Ejecutivo ID: ${venta.ejecutivo_id}` // Aquí deberías buscar el nombre del ejecutivo usando el ID
      }));
      this.ventasFiltradas = this.ventas;
    });
  }
  

  filtrarPorEstado(estado: string): void {
    this.estadoSeleccionado = estado;
    if (estado === 'todos') {
      this.ventasFiltradas = this.ventas;
    } else {
      this.ventasFiltradas = this.ventas.filter(venta => venta.estado === estado);
    }
  }


  onEstadoSeleccionado(event: any): void {
    this.estadoSeleccionado = event.target.value;
    this.filtrarPorEstado(this.estadoSeleccionado); // Pasa el estado seleccionado
  }

}
