import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharing-data-between-components';
  //PROPIEDAD PARA MANDAR AL COMPONENTE HIJO
  currentBeverage = 'Coffee';

  beverages = ['Milk','Coke','Tea','Orange Juice'];

  addBeverage(newBeverage:string){
    this.beverages.push(newBeverage);
  }

}
