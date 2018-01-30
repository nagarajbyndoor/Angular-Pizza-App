import { Injectable } from '@angular/core';
import { Pizza } from './pizza.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { firestore } from 'firebase/app';

@Injectable()
export class PizzaService {
  pizzaList : AngularFireList<any>;
  selectedPizza: Pizza = new Pizza();
  constructor(private firebase: AngularFireDatabase) { }
  getData() {
    this.pizzaList = this.firebase.list('pizza-full-menu');
    return this.pizzaList;
  }

  insertPizza(pizza: Pizza) {
    this.pizzaList.push({
      pizzaName: pizza.pizzaName,
      pizzaDescription: pizza.pizzaDescription,
      pizzaType: pizza.pizzaType,
      pizzaPrice: pizza.pizzaPrice,
      imgUrl: pizza.imgUrl 
    });
  }

  updatePizza(piz: Pizza) {
    this.pizzaList.update(piz.$key, {
      pizzaName: piz.pizzaName,
      pizzaDescription: piz.pizzaDescription,
      pizzaType: piz.pizzaType,
      pizzaPrice: piz.pizzaPrice,
      imgUrl: piz.imgUrl 
    })
  }

  deletePizza(key: string){
    this.pizzaList.remove(key);
  }
}
