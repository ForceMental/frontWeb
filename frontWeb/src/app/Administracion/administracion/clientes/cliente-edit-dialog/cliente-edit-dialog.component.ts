import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-edit-dialog',
  templateUrl: './cliente-edit-dialog.component.html',
  styleUrls: ['./cliente-edit-dialog.component.scss']
})
export class ClienteEditDialogComponent {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ClienteEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente
  ) {
    this.editForm = this.fb.group({
      id: [data.id], // Asegúrate de que el ID está incluido
      nombre: [data.nombre],
      apellido: [data.apellido],
      telefono: [data.telefono],
      rut: [data.rut],
      correo_electronico: [data.correo_electronico],
      direccion: [data.direccion],
      comuna: [data.comuna],
      region: [data.region],
      // ...otros campos
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value); // Esto devolverá todos los valores del formulario, incluyendo el id
    }
  }

}
