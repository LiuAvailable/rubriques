import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriteriComponent } from './projecte/components/criteri/criteri.component';
import { ValoracioComponent } from './projecte/components/valoracio/valoracio.component';

@NgModule({
  declarations: [
    AppComponent,
    CriteriComponent,
    ValoracioComponent
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
