import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consumer-home',
  templateUrl: './consumer-home.component.html',
  styleUrls: ['./consumer-home.component.css']
})
export class ConsumerHomeComponent implements OnInit {
  email: string = "";

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(params => { this.email = params['email']; });
   }

  ngOnInit(): void {
   
  }

}
