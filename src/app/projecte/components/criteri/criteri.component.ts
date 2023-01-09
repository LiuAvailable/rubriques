import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Criteri } from '../../model/entitats/implementacions/criteri/criteri';

@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {
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
    let getItem = localStorage.getItem('criteris');
    if(getItem != null){
      let array = JSON.parse(getItem);
      array.push(new Criteri(this.criteriForm.get("nom")?.value));
      array = JSON.stringify(array)
      localStorage.setItem('criteris', array);
    }
    else{
      const array = [new Criteri(this.criteriForm.get("nom")?.value)];
      const arrayString = JSON.stringify(array);
      localStorage.setItem('criteris', arrayString);
    }
    this.removeInputValue();
  }
  removeInputValue(){
    let input = document.querySelector('input');
    if(input != null){
      input.value = '';
    }
  }
}
