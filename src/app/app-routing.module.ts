import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriteriComponent } from './projecte/components/criteri/criteri.component';
import { RubricaComponent } from './projecte/components/rubrica/rubrica.component';
import { ValoracioComponent } from './projecte/components/valoracio/valoracio.component';

const routes: Routes = [
  { path: 'valoracio', component: ValoracioComponent },
  { path: 'criteri', component: CriteriComponent },
  { path: 'rubrica', component: RubricaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }