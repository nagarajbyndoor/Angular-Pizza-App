import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';

import { PizzaService } from '../../shared/pizza.service';
import { Pizza } from '../../shared/pizza.model';
import { element } from 'protractor';
@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzaList :  Pizza[];
  constructor(private pizzaService : PizzaService) { }

  ngOnInit() {
    var x = this.pizzaService.getData();
    x.snapshotChanges().subscribe(item => {
      this.pizzaList = [];
      item.forEach(element=>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.pizzaList.push(y as Pizza);
      })
    });
  }
  onItemCLick(piz: Pizza){
    this.pizzaService.selectedPizza = Object.assign({},piz);
  }

}
