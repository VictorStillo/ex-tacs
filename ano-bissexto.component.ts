import { Component, OnInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-ano-bissexto',
  templateUrl: './ano-bissexto.component.html',
  styleUrls: ['./ano-bissexto.component.css']
})
export class AnoBissextoComponent implements OnInit {

  constructor() { }

  anoBissexto(ano: number) {
    if(ano % 4 === 0) {
      return true;
    }
    return false;
  }

  converterNumerosRomanos(numero: number) {
    if(Math.floor(numero / 1000) > 0) {
      
    }
  }

  ngOnInit() {
  }

}
