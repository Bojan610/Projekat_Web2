import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../Models/order.model';
import { ConsumerService } from '../Services/consumer.service';

@Component({
  selector: 'app-consumer-previous-orders',
  templateUrl: './consumer-previous-orders.component.html',
  styleUrls: ['./consumer-previous-orders.component.css']
})
export class ConsumerPreviousOrdersComponent implements OnInit {
  email: string = "";
  orders : Order[] = [];
  orderDetails: Order = new Order();

  constructor(private service: ConsumerService, private router: Router, private route:ActivatedRoute) {
    route.params.subscribe(params => { this.email = params['email']; });

    this.service.getPreviousOrders(this.email).subscribe(
      (data : Order[]) => {
        this.orders = data;
      },
      error => {
          window.alert('Something went wrong.');
      }
    );
   }

  ngOnInit(): void {
  }

  Details(order: Order): void {
    this.orderDetails = order;
  }
}
