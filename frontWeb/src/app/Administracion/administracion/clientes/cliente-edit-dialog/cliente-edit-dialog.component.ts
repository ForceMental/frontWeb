import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../cliente.model';
import { ComunaService } from '../comuna.service';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-cliente-edit-dialog',
  templateUrl: './cliente-edit-dialog.component.html',
  styleUrls: ['./cliente-edit-dialog.component.scss']
})
export class ClienteEditDialogComponent implements OnInit {
  editForm: FormGroup;
  comunas: any[] = [];
  regiones: any[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ClienteEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    private comunaService: ComunaService,
    private regionService: RegionService
  ) {
    this.editForm = this.fb.group({
      id: [data.id],
      nombre: [data.nombre],
      apellido: [data.apellido],
      telefono: [data.telefono],
      rut: [data.rut],
      correo_electronico: [data.correo_electronico],
      direccion: [data.direccion],
      comuna: [data.comuna ? data.comuna.id : ''], // Utiliza data.comuna.id para obtener el ID de la comuna
      region: [data.region ? data.region.id : ''], // Utiliza data.region.id para obtener el ID de la región
    });
  }

  ngOnInit(): void {
    this.cargarComunas();
    this.cargarRegiones();
  }

  cargarComunas(): void {
    this.comunaService.getComunas().subscribe(data => {
      this.comunas = data;
    });
  }

  cargarRegiones(): void {
    this.regionService.getRegiones().subscribe(data => {
      this.regiones = data;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }
}
