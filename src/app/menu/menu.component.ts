import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isloggedIn: boolean;
  public subscription;
  constructor(private authService: AuthService, private router: Router) {
    this.subscription = authService.isAuthenticated()
      .subscribe(
        success => this.isloggedIn = success
      );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }
  ngOnInit() {
  }

  ngDestroy() {
    this.subscription.unsubscribe();
  }

}
