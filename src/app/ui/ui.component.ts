import { Component, OnInit } from '@angular/core';
import {formula} from '../tests/formula'

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formula:formula = new formula();
  n=0;
  c=0;
  o=0;
  calcular(){
    let r:number;
    let form:formula=new formula();
    r=form.calcular(this.n);
    this.c=r;
  }
}