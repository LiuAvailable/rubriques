import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criteri } from '../../model/entitats/implementacions/criteri/criteri';
import { Valoracio } from '../../model/entitats/implementacions/valoracio/valoracio';

@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {
  valoracioForm!:FormGroup;
  nom!:string;
  valoracio:Valoracio = new Valoracio();
  criteri!:Criteri;

  constructor(private fb:FormBuilder) { }
  addCriteri(){
    this.criteri = new Criteri(this.nom);
    console.log(this.criteri);
  }
  addValoracio(){
    this.criteri.afegirValoracio(this.valoracio);
    console.log(this.criteri);
  }

  ngOnInit(): void {
    this.valoracioForm = this.fb.group({
      codi:['',
    {
      validators:[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8),
      ]
    }],
    })
  }

}
