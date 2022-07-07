import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { DelivererDisplay } from "../Models/deliverer-display.model";
import { RetString } from "../Models/retString.model";

@Injectable({
    providedIn: 'root'
  })

export class AdminService {

    constructor( private http: HttpClient) { }

    getProcessingDeliverers() : Observable<DelivererDisplay[]> {
        return this.http.get<DelivererDisplay[]>(environment.serverURL + '/api/admin/getProcessing');
      }

      getDeniedDeliverers() : Observable<DelivererDisplay[]> {
        return this.http.get<DelivererDisplay[]>(environment.serverURL + '/api/admin/getDenied');
      }

      getAcceptedDeliverers() : Observable<DelivererDisplay[]> {
        return this.http.get<DelivererDisplay[]>(environment.serverURL + '/api/admin/getAccepted');
      }

      acceptDeliverer(param:RetString):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL + '/api/admin/acceptDeliverer', param);
      }

      declineDeliverer(param:RetString):Observable<Boolean> {
        return this.http.post<Boolean>(environment.serverURL + '/api/admin/declineDeliverer', param);
      }
}