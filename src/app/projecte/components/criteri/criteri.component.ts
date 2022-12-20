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
  criteri:Criteri = new Criteri();

  constructor(private fb:FormBuilder) { }

  addCriteri(){
    let getItem = localStorage.getItem('criteris');
    if(getItem != null){
      let array = JSON.parse(getItem);
      array.push(this.criteri);
      array = JSON.stringify(array)
      localStorage.setItem('criteris', array);
    }
    else{
      const array = [this.criteri];
      const arrayString = JSON.stringify(array);
      localStorage.setItem('criteris', arrayString);
    }
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
