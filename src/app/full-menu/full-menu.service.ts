import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FullMenuService {
  // private _url: string = "./pizza-full-menu.json";
  constructor(private _http: Http) { } 
  getFullMenu() { 
      return this._http.get('./pizza-full-menu.json').map((response: Response) => response.json());
  }
  
}
