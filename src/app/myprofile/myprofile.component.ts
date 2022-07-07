import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUser } from '../Models/updateUser.model';
import { UserDisplay } from '../Models/user-display.model';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  email: string = "";
  user: UserDisplay = new UserDisplay;
  redirectString: string = "";

  myprofileForm = new FormGroup({
    Username: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Birth: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    Password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    PasswordConfirm: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(private service: UserService, private route:ActivatedRoute, private router: Router) { 
    route.params.subscribe(params => { this.email = params['email']; });

    this.service.getUserByEmail(this.email).subscribe(
      (data : UserDisplay) => {
        this.user = data;

        if (this.user.userKind == "admin")
          this.redirectString = '/admin-home/' + this.email;
        else if (this.user.userKind == "deliverer")
          this.redirectString = '/deliverer-home/' + this.email;
        else if (this.user.userKind == "consumer")
          this.redirectString = '/consumer-home/' + this.email;
      },
      error => {
          window.alert('Something went wrong.');
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let reg:UpdateUser = new UpdateUser();
    reg.username =  this.myprofileForm.controls['Username'].value;
    reg.email = this.email;
    reg.name = this.myprofileForm.controls['Name'].value;
    reg.lastName = this.myprofileForm.controls['LastName'].value;
    reg.birth = this.myprofileForm.controls['Birth'].value;
    reg.address = this.myprofileForm.controls['Address'].value;
    reg.password = this.myprofileForm.controls['Password'].value;
    reg.passwordConfirm = this.myprofileForm.controls['PasswordConfirm'].value;

    this.service.updateUser(reg).subscribe(
      (data : Boolean) => {   
        if (data == true)          
            this.router.navigateByUrl(this.redirectString);
        else
          window.alert("User update failed");
      },
      error => {
        window.alert("User update failed.");
      }
    )
  }

  cancel(): void {   
      this.router.navigateByUrl(this.redirectString);  
  }
}
