import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
     this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

}
//login/ will be referred to as id, which is a route parameter.
// You can, of course, create multiple parameters within a single URL as such: login/:id/:whatever.
