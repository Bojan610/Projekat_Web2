import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { RetString } from "../Models/retString.model";

@Injectable({
    providedIn: 'root'
  })

export class DelivererService {

    constructor( private http: HttpClient) { }

    verifyCheck(email:string) :Observable<RetString> {
        return this.http.get<RetString>(environment.serverURL + '/api/deliverer/verifyCheck/' + email);
      }


}