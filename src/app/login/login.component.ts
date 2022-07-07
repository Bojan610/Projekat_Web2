import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from '../Models/login.model';
import { Token } from '../Models/token.model';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl("", [Validators.required, Validators.email]),
    password : new FormControl("", [Validators.required, Validators.minLength(4)]),
  });

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    
  }
  
  onSubmit() {
    let login:Login = new Login();
    login.email = this.loginForm.controls['email'].value;
    login.password = this.loginForm.controls['password'].value;
    this.service.login(login).subscribe(
      (data : Token) => {
        if (data != null)
        {
          if (data.userType == "admin")
          {
            localStorage.setItem('token', data.token);
            this.router.navigateByUrl('/admin-home/' + login.email);
          }
          else if (data.userType == "deliverer")
          {
            localStorage.setItem('token', data.token);
            this.router.navigateByUrl('/deliverer-home/' + login.email);
          }
          else if (data.userType == "consumer")
          {
            localStorage.setItem('token', data.token);
            this.router.navigateByUrl('/consumer-home/' + login.email);
          }
        }
        else
          window.alert("Incorrect username or password. Authentication failed.");
      },
      error => {
          window.alert("Authentication failed.");
      }
    );
  }
 

}

