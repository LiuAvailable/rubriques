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
  constructor() { }

  ngOnInit(): void {
    this.localStorage.getCriteri('patata');
    this.localStorage.saveCriteri('pAtata333');
  }
}
