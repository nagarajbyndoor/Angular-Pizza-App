import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public user$ = this.authService.user; 
  public form: FormGroup;
  public subcription;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router ) { 
    this.form = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  login(formValue:any) {
    console.log(formValue.email);
    console.log(formValue.password);
    if(formValue.email == "admin@admin.com" && formValue.password == "admin@123"){
      this.subcription = this.authService.login(formValue.email, formValue.password)
      .subscribe(
        success => this.router.navigate(['/admin']),
        error=>alert(error)
      );
    }
    else {
      this.subcription = this.authService.login(formValue.email, formValue.password)
      .subscribe(
        success => this.router.navigate(['full-menu']),
        error=>alert(error)
      );
    }
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }

  forgotPass() {
    this.router.navigate(['/forgot-password']);
  }

  ngDestroy(){
    this.subcription.unsubscribe();
  }
}
