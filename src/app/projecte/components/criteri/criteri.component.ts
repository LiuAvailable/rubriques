import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Criteri } from '../../model/entitats/implementacions/criteri/criteri';
import { LocalStorage } from '../../model/entitats/implementacions/localStorage/localStorage';

@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {
  localStorage: LocalStorage = new LocalStorage();
  criteriForm!: FormGroup;

  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.criteriForm = this.fb.group({
      nom:['',
    {
      validators:[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]
    }]})
  }
  addCriteri(){
    this.localStorage.saveCriteri(this.criteriForm.get("nom")?.value);
    this.removeInputValue();
  }
  removeInputValue(){
    let input = document.querySelector('input');
    if(input != null){
      input.value = '';
    }
  }
}
