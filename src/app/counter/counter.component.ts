import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  valor : number = 0
  constructor() { }

  ngOnInit(): void {
    
  }

  decrement(): void{
    this.valor--
  }

  increment(): void{
    this.valor++
  }

  reset(): void{
    this.valor = 0
  }
}
