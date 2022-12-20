import { Component, OnInit } from '@angular/core';
import { Criteri } from '../../model/entitats/implementacions/criteri/criteri';

@Component({
  selector: 'app-valoracio',
  templateUrl: './valoracio.component.html',
  styleUrls: ['./valoracio.component.css']
})
export class ValoracioComponent implements OnInit {
  criteris!:Array<Criteri>;
  constructor() { }

  ngOnInit(): void {
    this.getCriteris()
  }
  getCriteris(){
    let criteris = localStorage.getItem('criteris');
    if(criteris!=null){
      this.criteris = JSON.parse(criteris);
    }
  }
}
