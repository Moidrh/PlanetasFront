import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Planeta } from '../models/planeta.model';
import { PlanetaService } from '../services/planeta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  forma: FormGroup;

  public planetas: Planeta[] = [];

  public planeta= new Planeta();

  constructor( private fb: FormBuilder, private PlanetaService: PlanetaService, private router: Router) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {

    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      rotation: ['', [Validators.required, Validators.minLength(3)]],
      diametro: ['', [Validators.required, Validators.minLength(3)]],
      clima: ['', [Validators.required, Validators.minLength(3)]],
      terreno: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  findAllPlanets(){

    this.PlanetaService.findAllPlanets()
        .subscribe(e=>{
          this.planetas = e;
        });

  }

  findAPlanetByName(termino:string){
    this.PlanetaService.findAPlanetByName(termino)
        .subscribe(p=>{
          this.planeta = p;
        });
  }

  createPlanet(){
    console.log(this.planeta)
    if(this.forma.invalid){
      return ;
    }

    this.PlanetaService.createAPlanet(this.planeta)
        .subscribe();

  }

  onPlanetDetails(pla: Planeta){
    console.log(pla);
    this.router.navigate(['/planetas', pla.id]);
  }

  get nameNoValido() {
    return this.forma.get('name').invalid && this.forma.get('name').touched;
  }

  get rotationNoValido() {
    return this.forma.get('rotation').invalid && this.forma.get('rotation').touched;
  }

  get diametroNoValido() {
    return this.forma.get('diametro').invalid && this.forma.get('diametro').touched;
  }

  get climaNoValido() {
    return this.forma.get('clima').invalid && this.forma.get('clima').touched;
  }

  get terrenoNoValido() {
    return this.forma.get('terreno').invalid && this.forma.get('terreno').touched;
  }

}
