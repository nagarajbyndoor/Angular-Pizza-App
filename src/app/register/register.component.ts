import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSuccess:boolean=false;
  registerForm : FormGroup;
  constructor(fb: FormBuilder) { 
    this.registerForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(10)])],
      'email' : [null,Validators.compose([Validators.required, Validators.email])],
      'gender' : [null, Validators.required],
      'password' : [null, Validators.required]
    })
  }

  ngOnInit() {
  }
  
  submitForm(value: any){
    console.log(value);
    if (this.registerForm.valid) {
      console.log("Form Submitted!");
      this.isSuccess =true;
      this.registerForm.reset();
    }
  }
}
