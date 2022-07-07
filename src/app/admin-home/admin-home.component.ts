import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  email: string = "";

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(params => { this.email = params['email']; });
   }

  ngOnInit(): void {
   

  }

}
