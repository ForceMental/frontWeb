import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.model';
import { MatDialog } from '@angular/material/dialog';
import { ClienteEditDialogComponent } from './cliente-edit-dialog/cliente-edit-dialog.component'; // Usa una ruta relativa aquí
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  columnasMostradas: string[] = ['nombre', 'email', 'acciones'];

  constructor(private clientesService: ClientesService, public dialog: MatDialog) {}

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clientesService.getClientes().subscribe(
      data => { this.clientes = data; },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener los clientes:', error.message);
        // Aquí podrías manejar el error, como mostrar un mensaje al usuario
      }
    );
  }

    // Implementa la función que abre el diálogo de asignación
    abrirDialogoAsignacion(cliente?: Cliente) {
      const dialogRef = this.dialog.open(ClienteEditDialogComponent, {
        width: '250px',
        // Si se está pasando un cliente, lo envías al diálogo, si no, un objeto vacío
        data: cliente || new Cliente()
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // Aquí manejas el resultado del diálogo
        if (result) {
          // Lógica para asignar el cliente a un ejecutivo
        }
      });
    }


  abrirDialogoEditar(cliente: Cliente): void {
    // Lógica para abrir el diálogo de edición
    // ...
  }

  confirmarEliminacion(cliente: Cliente): void {
    // Lógica para confirmar eliminación
    // ...
  }

  editarCliente(cliente: Cliente): void {
    const dialogRef = this.dialog.open(ClienteEditDialogComponent, {
      width: '250px',
      data: cliente // pasa el objeto cliente actual al diálogo
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientesService.updateCliente(result).subscribe(
          updatedCliente => {
            // Encuentra el índice del cliente actualizado y reemplaza con el nuevo
            const index = this.clientes.findIndex(c => c.id === updatedCliente.id);
            if (index !== -1) {
              this.clientes[index] = updatedCliente;
            }
          },
          error => console.error(error)
        );
      }
    });
  }

  eliminarCliente(cliente: Cliente): void {
    // Lógica para eliminar un cliente
    // ...
  }

  asignarEjecutivo(cliente: Cliente, ejecutivoId: string): void {
    // Lógica para asignar un ejecutivo a un cliente
    // ...
  }
}
