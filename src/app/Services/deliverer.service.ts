import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Order } from "../Models/order.model";
import { PickupOrder } from "../Models/pickupOrder.model";
import { RetString } from "../Models/retString.model";
import { StopWatch } from "../Models/stopwatch.model";

@Injectable({
    providedIn: 'root'
  })

export class DelivererService {

    constructor( private http: HttpClient) { }

    verifyCheck(email:string) :Observable<RetString> {
        return this.http.get<RetString>(environment.serverURL_1 + '/api/users/verifyCheck/' + email);
      }

      getAllOrders() : Observable<Order[]> {
        return this.http.get<Order[]>(environment.serverURL_2 + '/api/deliverer/getOrders');
      }

      PickUpOrder(order:PickupOrder):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL_2 + '/api/deliverer/pickUpOrder', order);
      }

      getCurrentOrder(email:string) : Observable<Order> {
        return this.http.get<Order>(environment.serverURL_2 + '/api/deliverer/currentOrder/' + email);
      }

      getTime(id:number) : Observable<StopWatch> {
        return this.http.get<StopWatch>(environment.serverURL_2 + '/api/deliverer/getTime/' + id);
      }

      getPreviousOrders(email:string) : Observable<Order[]> {
        return this.http.get<Order[]>(environment.serverURL_2 + '/api/deliverer/getPreviousOrders/' + email);
      }

      ChangeOrderStatus(param:RetString):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL_2 + '/api/deliverer/changeOrderStatus', param);
      }
}