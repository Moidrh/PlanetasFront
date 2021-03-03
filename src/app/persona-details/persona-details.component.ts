import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../services/persona.service';
import { Persona } from '../models/persona.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-persona-details',
  templateUrl: './persona-details.component.html',
  styleUrls: ['./persona-details.component.css']
})
export class PersonaDetailsComponent implements OnInit {

  public persona: Persona;

  constructor(private activatedRoute: ActivatedRoute, private PersonaService: PersonaService,
              private location: Location) { }

  ngOnInit(): void {

    const {id} = this.activatedRoute.snapshot.params;

    this.PersonaService.findAPersonById(id)
        .subscribe(p=>{
          console.log(p.fechaNacimiento);
          this.persona = p;
        });
  }

  onRegresar() {
    this.location.back();
  }

}
