import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  valorRef: AngularFireObject<any>
  valor : number = 0
  holder: any;
  constructor(private db: AngularFireDatabase) {
    this.valorRef = this.db.object('/Objetos');
    let teste = this.db.object('/Objetos/valor').valueChanges().subscribe(data => {
      this.valor = Number(data)
      this.holder = data
    });
  }

  ngOnInit(): void {
    
  }

  decrement(): void{
    this.valor--
    this.valorRef.update({valor: this.valor });
  }

  increment(): void{
    this.valor++
    this.valorRef.update({valor: this.valor });
  }

  reset(): void{
    this.valor = 0
    this.valorRef.update({valor: this.valor });
  }

}
