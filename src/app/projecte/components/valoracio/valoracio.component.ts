import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criteri } from '../../model/entitats/implementacions/criteri/criteri';
import { LocalStorage } from '../../model/entitats/implementacions/localStorage/localStorage';
import { Valoracio } from '../../model/entitats/implementacions/valoracio/valoracio';

@Component({
  selector: 'app-valoracio',
  templateUrl: './valoracio.component.html',
  styleUrls: ['./valoracio.component.css']
})
export class ValoracioComponent implements OnInit {
  localStorage:LocalStorage = new LocalStorage();
  valoracioForm!:FormGroup;
  criteriSelected:string = '';
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.valoracioForm = this.fb.group({
      valoracio:['',
      {
        validators:[
          Validators.required,
          Validators.minLength(5)
        ]
      }],
      valor:['',
      {
        validators:[
          Validators.required
        ]
      }]
    })
  }

  addValoracio(){
    let valoracio = new Valoracio(this.valoracioForm.get("valoracio")?.value,this.valoracioForm.get("valor")?.value);
    this.addValoracioToCriteri(valoracio)
    this.removeInputValue();
  }

  addValoracioToCriteri(valoracio:Valoracio){
    let nomCriteri = document.querySelector('select');
    if(nomCriteri!=null){
      let criteri = this.localStorage.getCriteri(nomCriteri.value);
      criteri.puntuacio.push(valoracio);
      this.localStorage.saveCriteri(criteri);
    }
  }

  removeInputValue(){
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      if(input != null){
        input.value = '';
      }
    });
  }
}
