import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../Models/order.model';
import { DelivererService } from '../Services/deliverer.service';

@Component({
  selector: 'app-deliverer-previous-orders',
  templateUrl: './deliverer-previous-orders.component.html',
  styleUrls: ['./deliverer-previous-orders.component.css']
})
export class DelivererPreviousOrdersComponent implements OnInit {
  email: string = "";
  orders : Order[] = [];
  orderDetails: Order = new Order();

  constructor(private service: DelivererService, private router: Router, private route:ActivatedRoute) {
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
