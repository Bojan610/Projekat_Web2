import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../Models/order.model';
import { PickupOrder } from '../Models/pickupOrder.model';
import { DelivererService } from '../Services/deliverer.service';

@Component({
  selector: 'app-deliverer-orders',
  templateUrl: './deliverer-orders.component.html',
  styleUrls: ['./deliverer-orders.component.css']
})
export class DelivererOrdersComponent implements OnInit {
  email: string = "";
  orders : Order[] = [];
  orderModal : Order = new Order();
  currentOrder: Order = new Order;

  constructor(private route:ActivatedRoute, private service: DelivererService, private router: Router) {
    route.params.subscribe(params => { this.email = params['email']; });

    this.service.getCurrentOrder(this.email).subscribe(
      (data : Order) => {
        if (data != null)
          this.currentOrder = data;
        else
          window.alert('Something went wrong.');
      },
      error => {
          window.alert('Something went wrong.');
      }
    );

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

  pickUpOrder(order: Order): void {
    let pickUpOrder:PickupOrder = new PickupOrder();
    pickUpOrder.address = order.address;
    pickUpOrder.comment = order.comment;
    pickUpOrder.email = order.email;
    pickUpOrder.emailDeliverer = this.email;
    pickUpOrder.id = order.id;
    pickUpOrder.price = order.price;
    pickUpOrder.products = order.products;
    pickUpOrder.status = order.status;

    this.service.PickUpOrder(pickUpOrder).subscribe(
      (data : Boolean) => {
        if (data == true)
          this.router.navigateByUrl('/deliverer-home/' + this.email + '/currentOrder');
        else
          window.alert('Something went wrong.');
      },
      error => {
          window.alert('Something went wrong.');
      }
    );
  }
}
