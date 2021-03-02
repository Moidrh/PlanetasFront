import { Persona } from './persona.model';
export class Planeta {
  id: string;
  name: string;
  contador: string;
  rotation: number;
  diametro: number;
  clima: string;
  terreno: string;
  personas: Persona[];
}