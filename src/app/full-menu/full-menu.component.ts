import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-full-menu',
  templateUrl: './full-menu.component.html',
  styleUrls: ['./full-menu.component.css']
})
export class FullMenuComponent implements OnInit {
  pizzaFullMenuObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.pizzaFullMenuObservable = this.getPizzaFullMenu('/pizza-full-menu');
  }
  getPizzaFullMenu(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
