import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../Models/order.model';
import { ConsumerService } from '../Services/consumer.service';

@Component({
  selector: 'app-consumer-current-order',
  templateUrl: './consumer-current-order.component.html',
  styleUrls: ['./consumer-current-order.component.css']
})
export class ConsumerCurrentOrderComponent implements OnInit {
  email: string = "";
  currentOrder: Order = new Order; 

  constructor(private service: ConsumerService, private router: Router, private route:ActivatedRoute) {
    route.params.subscribe(params => { this.email = params['email']; });

    this.service.getCurrentOrder(this.email).subscribe(
      (data : Order) => {
        this.currentOrder = data;
      },
      error => {
          window.alert('Something went wrong.');
      }
    );
   }

  
  ngOnInit(): void {
  }

}
