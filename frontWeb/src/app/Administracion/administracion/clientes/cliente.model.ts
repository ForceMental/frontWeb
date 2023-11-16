export class Cliente {
    id?: number;
    nombre: string = '';
    apellido: string = '';
    telefono: string = '';
    correo_electronico: string = '';
    direccion: string = '';
    rut: string = '';
    comuna?: number;
    region?: number;
    constructor(init?: Partial<Cliente>) {
      Object.assign(this, init);
    }
  }
