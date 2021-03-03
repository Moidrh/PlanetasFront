import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  findAPersonByName(termino: string) {
    const url=`${base_url}/getAPerson`;

    let params = new HttpParams().set("fullname", termino);

    return this.http.get<Persona>(url, {params: params});
  }

  findAllPeople() {
    const url = `${base_url}/getAllPersons`;

    return this.http.get<Persona[]>(url).pipe();
  }

  findAPersonById(id: string){

    const url=`${base_url}/getAPersonById`;

    let params = new HttpParams().set("id", id);

    return this.http.get<Persona>(url,{params: params});

  }

  createAPerson(person: Persona){
    // const values={
    //   name: person.name,
    //   edad: person.edad,
    //   estatura: person.estatura,
    //   peso: person.peso,
    //   sexo: person.sexo,
    //   fechaNacimiento: person.fechaNacimiento,
    //   planeta: person.planeta.name
    // };

    let params = new HttpParams().set("fullname", person.name).set("edad", person.edad.toString())
    .set("estatura", person.estatura.toString()).set("peso", person.peso.toString())
    .set("sexo", person.sexo).set("fecha_nacimiento", person.fechaNacimiento.toString()).set("planeta_name", person.planeta.name);

    return this.http.post<any[]>(`${base_url}/createPerson`, { }, {params: params});
  }
}
