import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../Models/registration.model';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  imagePath!: string | ArrayBuffer | null;
  currentFile!: File;

  registrationForm = new FormGroup({
    Username: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Name: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Birth: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    UserKind: new FormControl('', Validators.required),
    Image: new FormControl('', Validators.required),
    Password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    PasswordConfirm: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let reg:Registration = new Registration();
    reg.username =  this.registrationForm.controls['Username'].value;
    reg.email = this.registrationForm.controls['Email'].value;
    reg.name = this.registrationForm.controls['Name'].value;
    reg.lastName = this.registrationForm.controls['LastName'].value;
    reg.birth = this.registrationForm.controls['Birth'].value;
    reg.address = this.registrationForm.controls['Address'].value;
    reg.userKind = this.registrationForm.controls['UserKind'].value;
    reg.image = this.registrationForm.controls['Image'].value;
    reg.password = this.registrationForm.controls['Password'].value;
    reg.passwordConfirm = this.registrationForm.controls['PasswordConfirm'].value;

    this.service.register(reg, this.imagePath?.toString()).subscribe(
      (data : Boolean) => {   
        if (data == true)    
          this.router.navigateByUrl('/user/login');
        else
          window.alert("Registration failed");
      },
      error => {
        window.alert("Registration failed.");
      }
    )
  }
  
  onPictureChosen(event:any):void{
    if (event.target.files) {
      const file: File | null = event.target.files.item(0);
      if (file) {
        this.currentFile = file;
        console.log(file);
        var promise = file.arrayBuffer();
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePath = reader.result;
          console.log(this.imagePath)
        };
        reader.readAsDataURL(this.currentFile);
      }
    }
  }

}