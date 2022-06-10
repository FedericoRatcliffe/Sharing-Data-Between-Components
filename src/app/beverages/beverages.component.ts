import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

  //EL INPUT NOS PERMITE MANDAR INFORMACION A UN PADRE
  @Input() beverage = "tea";
  //EL OUTPUT MANDA DEL HIJO AL PADRE
  @Output() newBeverageEvent = new EventEmitter<string>();
  

  constructor() {
  }
  ngOnInit(): void {
  }


  addNewBeverage( value:string){
    this.newBeverageEvent.emit(value);
  }




}
