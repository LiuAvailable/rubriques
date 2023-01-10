import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Criteri } from '../../model/entitats/implementacions/criteri/criteri';

@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }
}
