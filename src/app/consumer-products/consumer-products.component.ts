import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCartModel } from '../Models/addToCart.model';
import { Product } from '../Models/product.model';
import { ConsumerService } from '../Services/consumer.service';

@Component({
  selector: 'app-consumer-products',
  templateUrl: './consumer-products.component.html',
  styleUrls: ['./consumer-products.component.css']
})
export class ConsumerProductsComponent implements OnInit {
  products : Product[] = [];
  email: string = "";
  product : Product = new Product();
  
  addToCartForm = new FormGroup({
    quantity : new FormControl("", Validators.required)
  });

  constructor(private service: ConsumerService, private router: Router, private route:ActivatedRoute) { 
    route.params.subscribe(params => { this.email = params['email']; });

    this.service.getAllProducts().subscribe(
      (data : Product[]) => {
        this.products = data;
      },
      error => {
          window.alert('Something went wrong.');
      }
    );
  }

  ngOnInit(): void {
  }

  modalAddToCart(product: Product): void {
    this.product = product;
  }

  addToCart(): void {
    let model:AddToCartModel = new AddToCartModel();
    model.productId = this.product.id;
    model.email = this.email;
    model.quantity = this.addToCartForm.controls['quantity'].value;
    this.service.addProductToCart(model).subscribe(
      (data : Boolean) => {   
        if (data == true)   
          location.reload();
        else
          window.alert("Adding product to mycart failed.");
      },
      error => {
        window.alert("Adding product to mycart failed.");
      }
    )
  }
}
