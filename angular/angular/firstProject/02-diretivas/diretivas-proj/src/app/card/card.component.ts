import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  menuType:string = 'admin'

  constructor() { 
    this.produtos = [
      "mouse",
      "teclado",
      "font",
      "cabo",
    ]
   }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push('Pedro')
  }

  remover(index:number){
    this.produtos.splice(index, 1)
  }

}
