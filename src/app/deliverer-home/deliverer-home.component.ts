import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RetString } from '../Models/retString.model';
import { DelivererService } from '../Services/deliverer.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-deliverer-home',
  templateUrl: './deliverer-home.component.html',
  styleUrls: ['./deliverer-home.component.css']
})
export class DelivererHomeComponent implements OnInit {
  email: string = "";
  verified: String = "";

  constructor(private route:ActivatedRoute, private service: DelivererService) {
    route.params.subscribe(params => { this.email = params['email']; });

    this.service.verifyCheck(this.email).subscribe(
      (data : RetString) => {
        this.verified = data.retValue;
      },
      error => {
          window.alert('Something went wrong.');
      }
    );
   }

  ngOnInit(): void {
   

  }

}
