import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { AddToCartModel } from "../Models/addToCart.model";
import { Order } from "../Models/order.model";
import { Product } from "../Models/product.model";

@Injectable({
    providedIn: 'root'
  })

  export class ConsumerService {

    constructor( private http: HttpClient) { }

    getAllProducts() : Observable<Product[]> {
        return this.http.get<Product[]>(environment.serverURL + '/api/consumer/getAllProducts');
      }

      addProductToCart(model:AddToCartModel):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL + '/api/consumer/addProductToCart', model);
      }

      getProductsFromMyCart(email:string) : Observable<Product[]> {
        return this.http.get<Product[]>(environment.serverURL + '/api/consumer/getMyProducts/' + email);
      }

      cancelProduct(product:AddToCartModel):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL + '/api/consumer/cancelProduct', product);
      }

      OrderProducts(order:Order):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL + '/api/consumer/makeOrder', order);
      }

      getCurrentOrder(email:string) : Observable<Order> {
        return this.http.get<Order>(environment.serverURL + '/api/consumer/currentOrder/' + email);
      }

}