import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { DelivererDisplay } from "../Models/deliverer-display.model";
import { Order } from "../Models/order.model";
import { Product } from "../Models/product.model";
import { RetString } from "../Models/retString.model";

@Injectable({
    providedIn: 'root'
  })

export class AdminService {

    constructor( private http: HttpClient) { }

    getProcessingDeliverers() : Observable<DelivererDisplay[]> {
        return this.http.get<DelivererDisplay[]>(environment.serverURL_1 + '/api/admin/getProcessing');
      }

      getDeniedDeliverers() : Observable<DelivererDisplay[]> {
        return this.http.get<DelivererDisplay[]>(environment.serverURL_1 + '/api/admin/getDenied');
      }

      getAcceptedDeliverers() : Observable<DelivererDisplay[]> {
        return this.http.get<DelivererDisplay[]>(environment.serverURL_1 + '/api/admin/getAccepted');
      }

      acceptDeliverer(param:RetString):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL_1 + '/api/admin/acceptDeliverer', param);
      }

      declineDeliverer(param:RetString):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL_1 + '/api/admin/declineDeliverer', param);
      }

      getAllProducts() : Observable<Product[]> {
        return this.http.get<Product[]>(environment.serverURL_2 + '/api/deliverer/getAllProducts');
      }

      addNewProduct(product:Product):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL_2 + '/api/deliverer/addNewProduct', product);
      }

      getAllOrders() : Observable<Order[]> {
        return this.http.get<Order[]>(environment.serverURL_2 + '/api/deliverer/getOrdersAdmin');
      }
}