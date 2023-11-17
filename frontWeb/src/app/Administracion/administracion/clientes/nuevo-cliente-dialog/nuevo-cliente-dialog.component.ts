import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nuevo-cliente-dialog',
  templateUrl: './nuevo-cliente-dialog.component.html',
  styleUrls: ['./nuevo-cliente-dialog.component.scss']
})
export class NuevoClienteDialogComponent implements OnInit {
  nuevoClienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NuevoClienteDialogComponent>
  ) {
    this.nuevoClienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: [''],
      correo_electronico: ['', [Validators.required, Validators.email]],
      direccion: [''],
      rut: ['', Validators.required],
      comuna: this.fb.group({
        id: [null, Validators.required],
        nombre_comuna: ['']
      })
      // Agrega cualquier otro campo que sea necesario
    });
  }

  ngOnInit(): void {
    // El ngOnInit queda vacío ya que estamos inicializando el formulario en el constructor
  }

  onSubmit(): void {
    if (this.nuevoClienteForm.valid) {
      this.dialogRef.close(this.nuevoClienteForm.value);
    } else {
      console.log('Formulario no es válido', this.nuevoClienteForm);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
