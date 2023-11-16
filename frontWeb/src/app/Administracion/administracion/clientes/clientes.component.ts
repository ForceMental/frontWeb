import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.model';
import { MatDialog } from '@angular/material/dialog';
import { ClienteEditDialogComponent } from './cliente-edit-dialog/cliente-edit-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';  // No es necesario importar HttpClient si no lo estás utilizando directamente

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
    this.clientesService.getClientes().subscribe({
      next: data => { this.clientes = data; },
      error: (error: HttpErrorResponse) => {
        console.error('Error al obtener los clientes:', error.message);
      }
    });
  }
  

  abrirDialogoAsignacion(cliente?: Cliente) {
    const dialogRef = this.dialog.open(ClienteEditDialogComponent, {
      width: '250px',
      data: cliente || new Cliente()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica para asignar el cliente a un ejecutivo
      }
    });
  }

  abrirDialogoEditar(cliente: Cliente): void {
    // Lógica para abrir el diálogo de edición
    // ...
  }

  editarCliente(cliente: Cliente): void {
    const dialogRef = this.dialog.open(ClienteEditDialogComponent, {
      width: '250px',
      data: cliente
    });

    dialogRef.afterClosed().subscribe({
      next: (result: Cliente) => {
        if (result) {
          this.clientesService.updateCliente(result).subscribe({
            next: (updatedCliente: Cliente) => {
              const index = this.clientes.findIndex(c => c.id === updatedCliente.id);
              if (index !== -1) {
                this.clientes[index] = updatedCliente;
              }
            },
            error: (error: any) => console.error(error)
          });
        }
      },
      error: (error: any) => console.error(error)
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
