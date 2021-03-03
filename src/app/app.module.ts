import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlanetaComponent } from './planeta/planeta.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { PlanetaDetailsComponent } from './planeta-details/planeta-details.component';
import { PersonaDetailsComponent } from './persona-details/persona-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetaComponent,
    HeaderComponent,
    PersonaComponent,
    PlanetaDetailsComponent,
    PersonaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
