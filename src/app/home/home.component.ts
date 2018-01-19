import { Component, OnInit } from '@angular/core';
import { TopChickenPizzaService } from './top-chicken-pizza.service';
import { TopFruitPizzaService } from './top-fruit-pizza.service';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topPizzaChicken :Array<any>=[];
  topPizzaFruit :Array<any>=[];;
  constructor(private topChickenPizzas:TopChickenPizzaService, private topFruitPizzas:TopFruitPizzaService) {
    this.topPizzaChicken = this.topChickenPizzas.topPizzaChicken;
    this.topPizzaFruit =  this.topFruitPizzas.topPizzaFruit;
   }
  ngOnInit() {
    console.log(this.topPizzaFruit);
  }
}


