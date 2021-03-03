import { Planeta } from './planeta.model';
export class Persona {
  id: string;
  name: string;
  edad: number;
  estatura: number;
  peso: number;
  sexo: string;
  contador: number;
  fechaNacimiento: Date;
  planeta: Planeta;
}