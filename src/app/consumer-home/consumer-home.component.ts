import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-consumer-home',
  templateUrl: './consumer-home.component.html',
  styleUrls: ['./consumer-home.component.css']
})
export class ConsumerHomeComponent implements OnInit {
  email: string = "";

  constructor(private route:ActivatedRoute, private router: Router) {
    route.params.subscribe(params => { this.email = params['email']; });
   }

  ngOnInit(): void {
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/user/login');
  }
}
