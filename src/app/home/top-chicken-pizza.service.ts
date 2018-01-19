import { Injectable } from '@angular/core';
import { TopPizzaModel } from './top-pizza.model';

@Injectable()
export class TopChickenPizzaService {
  topPizzaChicken: TopPizzaModel[];
  constructor() { 
    this.topPizzaChicken = [
      new TopPizzaModel(111,'Thin Crust Cheese Pizza','Chicken Pizza','Classic cheese or create your own pizza.',11)
    ];
  }
}
