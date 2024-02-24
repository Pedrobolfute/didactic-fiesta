import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';


@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
  implements OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

    quantidade:number = 0
    isAliveCheckSample:boolean = true
    
    
    constructor() { 
      console.log(this.isAliveCheckSample)
    }

  //checked > content > view
  incrementar(){
    this.quantidade +=1
  }

  decrementar(){
    this.quantidade -=1
  }

  disposeCheckSample(){
    this.isAliveCheckSample = false
    console.log(this.isAliveCheckSample)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      console.log('Adios, boia!!')
  }


}
