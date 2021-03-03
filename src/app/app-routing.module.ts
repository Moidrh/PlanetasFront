import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetaComponent } from './planeta/planeta.component';
import { PersonaComponent } from './persona/persona.component';
import { PlanetaDetailsComponent } from './planeta-details/planeta-details.component';
import { PersonaDetailsComponent } from './persona-details/persona-details.component';

const routes: Routes = [
  {path: 'planetas', component: PlanetaComponent},
  {path: 'planetas/:id', component: PlanetaDetailsComponent},
  {path: 'personas', component: PersonaComponent},
  {path: 'personas/:id', component: PersonaDetailsComponent},
  {path: '**', redirectTo: '/planetas'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
