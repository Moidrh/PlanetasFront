import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Planeta } from '../models/planeta.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {

  constructor(private http: HttpClient) { }

  findAllPlanets() {
    const url = `${base_url}/getAllPlanets`;

    return this.http.get<any[]>(url).pipe();
  }

  findAPlanetById(id: string){

    const url=`${base_url}/getAPlanetById`;

    let params = new HttpParams().set("id", id);

    return this.http.get<Planeta>(url,{params: params});

  }

  findAPlanetByName(termino:string){
    const url=`${base_url}/getAPlanet`;

    let params = new HttpParams().set("name", termino);

    return this.http.get<Planeta>(url, {params: params});
  }

  createAPlanet(planeta: Planeta) {

    const values = {
      name: planeta.name,
      rotation: planeta.rotation,
      diametro: planeta.diametro,
      clima: planeta.clima,
      terreno: planeta.terreno
    };

    let params = new HttpParams().set("name", planeta.name).set("rotation", planeta.rotation.toString())
                                 .set("diametro", planeta.diametro.toString()).set("clima", planeta.clima)
                                 .set("terreno", planeta.terreno);

    return this.http.post<any[]>(`${base_url}/createPlanet`, { }, {params: params});
  }
}

