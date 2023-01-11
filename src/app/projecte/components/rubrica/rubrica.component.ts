import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Criteri } from '../../model/entitats/implementacions/criteri/criteri';
import { LocalStorage } from '../../model/entitats/implementacions/localStorage/localStorage';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit, AfterViewInit{
  puntuacions: Array<number> = [1,2,3,4,5,6];
  localStorage:LocalStorage = new LocalStorage();
  criteris!: Array<Criteri>;
  constructor() {
    this.criteris = this.localStorage.getCriteris();
   }
  ngAfterViewInit(): void {
    this.selectValoracio();
  }
  selectValoracio(){
    document.querySelectorAll('.valoracio')?.forEach(valoracio => valoracio.addEventListener('click', () =>{
      this.deleteAllRowActive(valoracio);
      this.setActive(valoracio);
    }))
  }
  deleteAllRowActive(valoracio:Element){
    valoracio.parentNode?.querySelectorAll('.valoracio').forEach(element => element.classList.remove('active'));
  }
  setActive(valoracio:Element){
    valoracio.classList.add('active');
  }

  ngOnInit(): void {
  }
  getDescripcio(valor:number, criteri:Criteri){
    let paraula = '';
    criteri.puntuacio.forEach(c => {
      if(c.valor == valor) paraula = c.descripcio;
    })
    return paraula;
  }
}
