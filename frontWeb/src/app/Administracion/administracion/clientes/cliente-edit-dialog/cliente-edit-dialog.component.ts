import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from "c:/Users/fabia/OneDrive/Escritorio/CrudJefatura/frontWeb/src/app/Administracion/administracion/clientes/cliente.model";// Asegúrate de que la ruta al modelo de Cliente sea correcta

@Component({
  selector: 'app-cliente-edit-dialog',
  templateUrl: './cliente-edit-dialog.component.html'
})
export class ClienteEditDialogComponent {
  clienteForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ClienteEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente
  ) {
    this.clienteForm = new FormGroup({
      nombre: new FormControl(data.nombre),
      email: new FormControl(data.email),
      // Agrega controles para las propiedades restantes del cliente
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardarCliente(): void {
    if (this.clienteForm.valid) {
      // Llama a tu servicio de cliente para guardar los cambios
      // o usa dialogRef.close() para devolver los datos actualizados
      this.dialogRef.close(this.clienteForm.value);
    }
  }
}