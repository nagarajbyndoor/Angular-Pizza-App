import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../shared/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
  providers: [PizzaService]
})
export class PizzasComponent implements OnInit {

  constructor(private pizzaService:PizzaService) { }

  ngOnInit() {
  }

}
