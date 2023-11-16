import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.model';
import { MatDialog } from '@angular/material/dialog';
import { ClienteEditDialogComponent } from './cliente-edit-dialog/cliente-edit-dialog.component'; // Usa una ruta relativa aquí
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NuevoClienteDialogComponent } from './nuevo-cliente-dialog/nuevo-cliente-dialog.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  columnasMostradas: string[] = ['nombre', 'apellido', 'telefono', 'correo_electronico', 'direccion','comuna', 'rut', 'acciones'];

  constructor(private clientesService: ClientesService, public dialog: MatDialog, private httpClient: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.clientesService.getClientes().subscribe(
      data => {
          this.clientes = data.map(item => new Cliente(item));
          console.log(this.clientes); // Añade esto para ver los datos cargados, incluida la comuna
      },
      error => {
          console.error('Error al obtener clientes', error);
      }
  );
  }

  

  cargarClientes() {
    this.clientesService.getClientes().subscribe(
      data => { console.log("Clientes cargados:", data);
      this.clientes = data; },
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
        if (result) {
          this.clientesService.updateCliente(result).subscribe(
            updatedCliente => {
              // Actualiza la lista de clientes
            },
            error => console.error(error)
          );
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
    console.log("Cliente a editar:", cliente);
    const dialogRef = this.dialog.open(ClienteEditDialogComponent, {
      width: '250px',
      data: cliente // pasa el objeto cliente actual al diálogo
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log("Resultado del diálogo:", result); 
      if (result) {
        console.log("Datos del cliente a actualizar:", result);
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
    const confirmDialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Confirmar Eliminación', message: `¿Estás seguro de que quieres eliminar a ${cliente.nombre}?` }
    });

    confirmDialogRef.afterClosed().subscribe(result => {
      if (result && typeof cliente.id === 'number') { // Asegurándose de que el ID esté definido
        this.clientesService.deleteCliente(cliente.id).subscribe(
          () => {
            this.clientes = this.clientes.filter(c => c.id !== cliente.id);
            this.snackBar.open('Cliente eliminado con éxito', 'Cerrar', { duration: 3000 });
          },
          error => {
            console.error(error);
            this.snackBar.open('Error al eliminar el cliente', 'Cerrar', { duration: 3000 });
            // Aquí puedes manejar diferentes tipos de errores si es necesario
          }
        );
      } else {
        // Opcionalmente, maneja el caso cuando result no es true o el id es undefined
        this.snackBar.open('Eliminación cancelada o ID no definido', 'Cerrar', { duration: 3000 });
      }
    });
  }
  

  abrirDialogoNuevoCliente(): void {
    const dialogRef = this.dialog.open(NuevoClienteDialogComponent, {
      width: '250px',
      // otras opciones para el diálogo...
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Suponiendo que el resultado es un objeto cliente nuevo
        this.clientesService.addCliente(result as Cliente).subscribe(
          (cliente) => {
            // Agrega el nuevo cliente al array de clientes
            this.clientes = [...this.clientes, cliente];
            this.snackBar.open('Cliente agregado con éxito', 'Cerrar', {
              duration: 3000
            });
          },
          (error) => {
            // Maneja el error
            console.error('Error al agregar cliente: ', error);
            this.snackBar.open('Error al agregar cliente', 'Cerrar', {
              duration: 3000
            });
          }
        );
      } else {
        // Manejar el caso cuando el resultado es falso o undefined, por ejemplo, cuando el diálogo se cierra sin acción
        this.snackBar.open('Creación de cliente cancelada', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }

  onSave(cliente: Cliente) {
    console.log("ID del cliente a actualizar:", cliente.id);
  
    if (cliente.id) {
      this.clientesService.updateCliente(cliente).subscribe(
        (response: Cliente) => { // Aquí se define el tipo de 'response'
          console.log("Cliente actualizado con éxito", response);
        },
        (error: any) => { // 'error' puede ser de tipo 'any' o puedes definir un tipo más específico si lo prefieres
          console.error("Error al actualizar cliente", error);
        }
      );
    } else {
      console.error("Error: ID del cliente no encontrado");
    }
  }
  
  

}
