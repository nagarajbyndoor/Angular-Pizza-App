import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PizzaService } from '../../shared/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(private pizzaService : PizzaService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    if(form.value.$key == null){
      this.pizzaService.insertPizza(form.value);
    }else {
      this.pizzaService.updatePizza(form.value);
    }
    this.resetForm(form);
  }

  resetForm(form?: NgForm){
    if(form! = null)
    form.reset();
    this.pizzaService.selectedPizza= {
      $key:null, //because its a hidden field
      pizzaName: '',
      pizzaDescription: '',
      pizzaType: '',
      pizzaPrice: null,
      imgUrl: ''
    }
  }

  onDelete(form: NgForm) {
    if(confirm('Are you sure to delete this record?')==true){
      this.pizzaService.deletePizza(form.value.$key);
      this.resetForm(form);
    }
  }
}
