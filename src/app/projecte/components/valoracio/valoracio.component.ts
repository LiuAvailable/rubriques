import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criteri } from '../../model/entitats/implementacions/criteri/criteri';

@Component({
  selector: 'app-valoracio',
  templateUrl: './valoracio.component.html',
  styleUrls: ['./valoracio.component.css']
})
export class ValoracioComponent implements OnInit {
  criteris!:Array<Criteri>;
  valoracioForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getCriteris()
    this.valoracioForm = this.fb.group({
      valoracio:['',
    {
      validators:[
        Validators.required,
        Validators.minLength(5)
      ]
    }]})
  }
  getCriteris(){
    let criteris = localStorage.getItem('criteris');
    if(criteris!=null){
      this.criteris = JSON.parse(criteris);
    }
  }
  addValoracio(){
    let criteris = localStorage.getItem('criteris');
    let nomCriteri = this.valoracioForm.get('valoracio')?.value
    if(criteris != null){
      criteris = JSON.parse(criteris);
      this.modificarcriteri();
    }
  }
  modificarcriteri(){
    let nomCriteri = document.querySelector('select');
    if(nomCriteri !=null){
      let contador = -1;
      do{
        contador ++;
      }while(nomCriteri.value != this.criteris[contador]['nom']);
      console.log(contador);
    }
  }
}
