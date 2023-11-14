export class Cliente {
    id?: number;
    nombre: string = '';
    apellido: string = '';
    telefono: string = '';
    email: string = '';
    direccion: string = '';
    rut: string = '';
    comuna?: number;
  
    constructor(init?: Partial<Cliente>) {
      Object.assign(this, init);
    }
  }
  