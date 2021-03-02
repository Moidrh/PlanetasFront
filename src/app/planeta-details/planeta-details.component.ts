import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetaService } from '../services/planeta.service';
import { Planeta } from '../models/planeta.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-planeta-details',
  templateUrl: './planeta-details.component.html',
  styleUrls: ['./planeta-details.component.css']
})
export class PlanetaDetailsComponent implements OnInit {

  public planeta: Planeta;

  constructor(private activatedRoute: ActivatedRoute, private PlanetaService: PlanetaService,
              private location: Location) { }

  ngOnInit(): void {

    const {id} = this.activatedRoute.snapshot.params;

    this.PlanetaService.findAPlanetById(id)
      .subscribe(p=>{
        this.planeta = p;
      });
    
  }

  onRegresar() {
    this.location.back();
  }

}
