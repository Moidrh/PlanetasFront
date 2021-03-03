import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../models/persona.model';
import { PersonaService } from '../services/persona.service';
import { Router } from '@angular/router';
import { Planeta } from '../models/planeta.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public persona= new Persona();

  forma: FormGroup;

  public people: Persona[] = [];

  constructor( private fb: FormBuilder, private PersonaService: PersonaService, private router: Router) {
     this.crearFormulario();
     this.persona.planeta = new Planeta();
  }

  ngOnInit(): void {
  }

  crearFormulario() {

    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      edad: ['', [Validators.required, Validators.minLength(3)]],
      estatura: ['', [Validators.required, Validators.minLength(3)]],
      peso: ['', [Validators.required, Validators.minLength(3)]],
      sexo: ['', [Validators.required, Validators.minLength(1)]],
      fechaNacimiento: ['', [Validators.required, Validators.minLength(1)]],
      planetaName: ['', [Validators.required, Validators.minLength(1)]]
    });

  }

  findAPersonByName(termino:string) {
    this.PersonaService.findAPersonByName(termino)
        .subscribe(p=>{
          this.persona = p;
          this.persona.planeta = p.planeta;
        });
  }

  onPersonDetails(persona: Persona) {
    console.log(persona);
    this.router.navigate(['/personas', persona.id]);
  }

  findAllPeople(){

    this.PersonaService.findAllPeople()
        .subscribe(e=>{
          this.people = e;
        });

  }

  createPerson(){
    console.log(this.persona);
    if(this.forma.invalid) {
      return ;
    }

    this.PersonaService.createAPerson(this.persona)
        .subscribe();
  }

}
