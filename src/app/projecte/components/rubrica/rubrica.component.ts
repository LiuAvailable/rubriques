import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Criteri } from '../../model/entitats/implementacions/criteri/criteri';
import { LocalStorage } from '../../model/entitats/implementacions/localStorage/localStorage';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit, AfterViewInit{
  localStorage:LocalStorage = new LocalStorage();
  puntuacions: Array<number> = this.localStorage.getValoracions().sort((a, b) => a - b);
  criteris!: Array<Criteri>;
  valoracionsActives:Array<Array<number>> = []//criteri, valoracio (posicions)
  constructor() {
    this.criteris = this.localStorage.getCriteris();
   }
  ngAfterViewInit(): void {
    this.selectValoracio();
    this.setActiveValues();
  }
  setActiveValues(): void {
    let valoracionsActives = this.localStorage.getActive();
    for (let i = 0; i < valoracionsActives.length; i++){
      let item = document.querySelectorAll('.row:not(:has(.puntuacions))')[valoracionsActives[i][0]]?.querySelectorAll('div')[valoracionsActives[i][1]];
      if (item != null) item.classList.add('active');
    }
  }
  selectValoracio(){
    document.querySelectorAll(".valoracio:has(p:not([valor-filter='-1']))")?.forEach(valoracio => valoracio.addEventListener('click', () =>{
      this.deleteAllRowActive(valoracio);
      this.setActive(valoracio);
      this.saveActiveValoracions();
    }))
  }
  deleteAllRowActive(valoracio:Element){
    valoracio.parentNode?.querySelectorAll('.valoracio').forEach(element => element.classList.remove('active'));
  }
  setActive(valoracio:Element){
    valoracio.classList.add('active');
  }
  saveActiveValoracions(){
    let taula = document.querySelectorAll('.row:not(:has(.puntuacions))');
    if(taula != null){
      for(let i = 0; i < taula.length; i++){
        let row = taula[i].querySelectorAll('div');
        if(row != null){
          for(let j = 0; j < row.length; j++){
            if(row[j].classList.contains('active')) this.valoracionsActives.push([i,j]);
          }
        }
      }
    }
    this.localStorage.saveActive(this.valoracionsActives);
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
  getValor(valor:number, criteri:Criteri){
    let paraula = -1;
    criteri.puntuacio.forEach(c => {
      if(c.valor == valor) paraula = c.valor;
    })
    return paraula;
  }

  calcMitjana(){
    let seleccions = document.querySelectorAll('.valoracio.active');
    console.log(seleccions.length)
    let mitjana = 0;
    let files = document.querySelectorAll('.row').length-1;
    if(seleccions.length > 0){
      seleccions.forEach(seleccio => {
        let valor = seleccio.querySelector('p')?.getAttribute('valor-filter')
        if(valor!=null) mitjana = mitjana + parseInt(valor);
      });
      let label = document.getElementById('mitjana')
      if(label != null) label.textContent=(mitjana/files).toString()
    }else{
      let label = document.getElementById('mitjana')
      if(label != null) label.textContent='no hi ha camps seleccionats'
    }
  }
}
