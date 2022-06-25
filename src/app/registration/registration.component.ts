import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from '../Models/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Name: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Birth: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    Password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    PasswordConfirm: new FormControl('', Validators.required),
  });

  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    let reg:Registration = new Registration();
    reg.email = this.registrationForm.controls['Email'].value;
    reg.name = this.registrationForm.controls['Name'].value;
    reg.lastName = this.registrationForm.controls['LastName'].value;
    reg.birth = this.registrationForm.controls['Birth'].value;
    reg.address = this.registrationForm.controls['Address'].value;
    reg.password = this.registrationForm.controls['Password'].value;
    reg.passwordConfirm = this.registrationForm.controls['PasswordConfirm'].value;

  }

}