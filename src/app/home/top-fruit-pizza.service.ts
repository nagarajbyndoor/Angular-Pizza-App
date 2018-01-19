import { Injectable } from '@angular/core';
import { TopPizzaModel } from './top-pizza.model';

@Injectable()
export class TopFruitPizzaService {
  topPizzaFruit: TopPizzaModel[];
  constructor() { 
    this.topPizzaFruit = [
      new TopPizzaModel(1112,'Fruit Crust cocumber Pizza', 'Fruit Pizza', 'Crushed tomatoes, fresh mozzarella cheese, fresh basil.',13),
      new TopPizzaModel(1112,'Fruit Mixed Corn Pizza', 'Fruit Pizza', 'Marinara sauce, mozzarella cheese, roasted red peppers, sliced red onions.',14),
      new TopPizzaModel(1112,'Almond Plus Veg Pizza', 'Fruit Pizza', 'Crushed mangos, fresh mozzarella cheese, fresh basil.',15),
    ];
  }
}