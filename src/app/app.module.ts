import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriteriComponent } from './projecte/components/criteri/criteri.component';
import { ValoracioComponent } from './projecte/components/valoracio/valoracio.component';
import { RubricaComponent } from './projecte/components/rubrica/rubrica.component';

@NgModule({
  declarations: [
    AppComponent,
    CriteriComponent,
    ValoracioComponent,
    RubricaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
