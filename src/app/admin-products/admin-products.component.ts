import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/product.model';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products : Product[] = [];
  email: string = "";

  addProductForm = new FormGroup({
    name : new FormControl("", Validators.required),
    price : new FormControl("", Validators.required),
    ingredients : new FormControl("", Validators.required),
  });

  constructor(private service: AdminService, private router: Router, private route:ActivatedRoute) {
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

  addNewProduct(): void {
    let product:Product = new Product();
    product.productName = this.addProductForm.controls['name'].value;
    product.price = this.addProductForm.controls['price'].value;
    product.ingredients = this.addProductForm.controls['ingredients'].value;

    this.service.addNewProduct(product).subscribe(
      (data : Boolean) => {   
        if (data == true)   
          location.reload();
        else
          window.alert("Adding new product failed.");
      },
      error => {
        window.alert("Adding new product failed.");
      }
    )
  }
}
