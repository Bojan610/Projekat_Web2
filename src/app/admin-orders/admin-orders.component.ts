import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../Models/order.model';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  email: string = "";
  orders : Order[] = [];
  orderModal : Order = new Order();

  constructor(private service: AdminService, private router: Router, private route:ActivatedRoute) { 
    route.params.subscribe(params => { this.email = params['email']; });

    this.service.getAllOrders().subscribe(
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

  orderDetails(order: Order): void {
    this.orderModal = order;
  }
}
