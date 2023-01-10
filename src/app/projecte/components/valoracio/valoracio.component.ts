import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criteri } from '../../model/entitats/implementacions/criteri/criteri';
import { LocalStorage } from '../../model/entitats/implementacions/localStorage/localStorage';

@Component({
  selector: 'app-valoracio',
  templateUrl: './valoracio.component.html',
  styleUrls: ['./valoracio.component.css']
})
export class ValoracioComponent implements OnInit {
  localStorage:LocalStorage = new LocalStorage();
  valoracioForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.valoracioForm = this.fb.group({
      valoracio:['',
    {
      validators:[
        Validators.required,
        Validators.minLength(5)
      ]
    }]})
  }
  addValoracio(){}
}
