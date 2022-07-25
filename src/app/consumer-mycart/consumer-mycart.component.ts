import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCartModel } from '../Models/addToCart.model';
import { Order } from '../Models/order.model';
import { Product } from '../Models/product.model';
import { ConsumerService } from '../Services/consumer.service';

@Component({
  selector: 'app-consumer-mycart',
  templateUrl: './consumer-mycart.component.html',
  styleUrls: ['./consumer-mycart.component.css']
})
export class ConsumerMycartComponent implements OnInit {
  myProducts : Product[] = [];
  email: string = "";
  deliveryService: number = 100;
  totalAmount: number = this.deliveryService;

  orderForm = new FormGroup({
    address : new FormControl("", Validators.required),
    comment : new FormControl()  
  });

  constructor(private service: ConsumerService, private router: Router, private route:ActivatedRoute) { 
    route.params.subscribe(params => { this.email = params['email']; });

    this.service.getProductsFromMyCart(this.email).subscribe(
      (data : Product[]) => {
        this.myProducts = data;
      },
      error => {
          window.alert('Something went wrong.');
      }
    );

    this.delay(500).then(any=>{
      for (let i = 0; i < this.myProducts.length; i++) {
        this.totalAmount += this.myProducts[i].price;
      }
 });
  }

  ngOnInit(): void {
  }

  cancelItem(product: Product): void {
    let model:AddToCartModel = new AddToCartModel();
    model.productId = product.id;
    model.email = this.email;

    this.service.cancelProduct(model).subscribe(
      (data : Boolean) => {   
        if (data == true)   
          location.reload();
        else
          window.alert("Deleting product from mycart failed.");
      },
      error => {
        window.alert("Deleting product from mycart failed.");
      }
    )
  }

  orderClick(): void {
    let order:Order = new Order();
    for (let i = 0; i < this.myProducts.length; i++) {
      order.products.push(this.myProducts[i]);
    }
    order.price = this.totalAmount;
    order.email = this.email;
    order.address =  this.orderForm.controls['address'].value;
    order.comment = this.orderForm.controls['comment'].value;
    order.status = "waiting";

    this.service.OrderProducts(order).subscribe(
      (data : Boolean) => {   
        if (data == true)   
          this.router.navigateByUrl('/consumer-home/' + this.email + '/currentOrder');
        else
          window.alert("Order product failed.");
      },
      error => {
        window.alert("Order product failed.");
      }
    )
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms));
  }
}
