import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SocialUser } from "@abacritt/angularx-social-login";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Login } from "../Models/login.model";
import { Registration } from "../Models/registration.model";
import { RetString } from "../Models/retString.model";
import { Token } from "../Models/token.model";
import { UpdateUser } from "../Models/updateUser.model";
import { UserDisplay } from "../Models/user-display.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  login(login:Login) :Observable<Token> {
    return this.http.post<Token>(environment.serverURL_1 + '/api/users/login', login);
  }

  register(registration:Registration, image:any) :Observable<Boolean> {
    registration.image = image as string;
    return this.http.post<Boolean>(environment.serverURL_1 + '/api/users/register', registration);
  }

  updateUser(updateUser:UpdateUser):Observable<Boolean> {
    return this.http.post<Boolean>(environment.serverURL_1 + '/api/users/updateUser', updateUser);
  }
 
  getUserByEmail(email:string) : Observable<UserDisplay> {
    return this.http.get<UserDisplay>(environment.serverURL_1 + '/api/users/' + email);
  }
  
  socialLogIn(formData:SocialUser) :Observable<Token>{
    return this.http.post<Token>(environment.serverURL_1 + '/api/users/socialLogin', formData);
  }
}