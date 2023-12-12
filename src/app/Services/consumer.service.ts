import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { AddToCartModel } from "../Models/addToCart.model";
import { Order } from "../Models/order.model";
import { Product } from "../Models/product.model";
import { RetString } from "../Models/retString.model";
import { StopWatch } from "../Models/stopwatch.model";

@Injectable({
    providedIn: 'root'
  })

  export class ConsumerService {

    constructor( private http: HttpClient) { }

    getAllProducts() : Observable<Product[]> {
        return this.http.get<Product[]>(environment.serverURL_2 + '/api/consumer/getAllProducts');
      }

      addProductToCart(model:AddToCartModel):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL_2 + '/api/consumer/addProductToCart', model);
      }

      getProductsFromMyCart(email:string) : Observable<Product[]> {
        return this.http.get<Product[]>(environment.serverURL_2 + '/api/consumer/getMyProducts/' + email);
      }

      cancelProduct(product:AddToCartModel):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL_2 + '/api/consumer/cancelProduct', product);
      }

      OrderProducts(order:Order):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL_2 + '/api/consumer/makeOrder', order);
      }

      getCurrentOrder(email:string) : Observable<Order> {
        return this.http.get<Order>(environment.serverURL_2 + '/api/consumer/currentOrder/' + email);
      }

      getTime(id:number) : Observable<StopWatch> {
        return this.http.get<StopWatch>(environment.serverURL_2 + '/api/consumer/getTime/' + id);
      }

      getPreviousOrders(email:string) : Observable<Order[]> {
        return this.http.get<Order[]>(environment.serverURL_2 + '/api/consumer/getPreviousOrders/' + email);
      }

      ChangeOrderStatus(param:RetString):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL_2 + '/api/consumer/changeOrderStatus', param);
      }
}