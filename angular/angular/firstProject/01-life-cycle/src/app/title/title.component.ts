import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = ''
  
  constructor() {
    console.log('contructor')
  }
  ngOnChanges(): void {
    console.log('OnChanges')
  }
  ngOnInit(): void {
    this.nome = `Opa, ${this.nome}`
    console.log('OnInit')

  }


}
