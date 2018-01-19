import { Component, OnInit } from '@angular/core';
import { FullMenuService } from './full-menu.service';

@Component({
  selector: 'app-full-menu',
  templateUrl: './full-menu.component.html',
  styleUrls: ['./full-menu.component.css']
})
export class FullMenuComponent implements OnInit {
  pizzaFullMenu = [];
  constructor(private _pizzaFullMenuService : FullMenuService) { }
 
  ngOnInit() {
    this._pizzaFullMenuService.getFullMenu()
        .subscribe((resPizzaFullMenu => this.pizzaFullMenu = resPizzaFullMenu));
  }

}
