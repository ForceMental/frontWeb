export class Cliente {
    id?: number;
    nombre: string = '';
    apellido: string = '';
    telefono: string = '';
    correo_electronico: string = '';
    direccion: string = '';
    rut: string = '';
    comuna?: { id: number; nombre_comuna: string; };
  
    constructor(init?: Partial<Cliente>) {
      Object.assign(this, init);
    }
  }
  