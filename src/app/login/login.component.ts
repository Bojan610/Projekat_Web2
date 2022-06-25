import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../Models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
  });

  constructor() { }

  ngOnInit() {
    
  }
  
  onSubmit() {
    let login:Login = new Login();
    login.email = this.loginForm.controls['email'].value;
    login.password = this.loginForm.controls['password'].value;
   
  }
 

}

