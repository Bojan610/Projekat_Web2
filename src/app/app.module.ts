import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './Services/user.service';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DelivererHomeComponent } from './deliverer-home/deliverer-home.component';
import { ConsumerHomeComponent } from './consumer-home/consumer-home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DelivererService } from './Services/deliverer.service';
import { AdminDeliverersComponent } from './admin-deliverers/admin-deliverers.component';
import { AdminService } from './Services/admin.service';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ConsumerProductsComponent } from './consumer-products/consumer-products.component';
import { ConsumerService } from './Services/consumer.service';
import { ConsumerMycartComponent } from './consumer-mycart/consumer-mycart.component';
import { ConsumerCurrentOrderComponent } from './consumer-current-order/consumer-current-order.component';


export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegistrationComponent,
    AdminHomeComponent,
    DelivererHomeComponent,
    ConsumerHomeComponent,
    MyprofileComponent,
    AdminDeliverersComponent,
    AdminProductsComponent,
    ConsumerProductsComponent,
    ConsumerMycartComponent,
    ConsumerCurrentOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
   
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains:environment.allowedDomains
    }
  }),
  ],
  providers: [
    UserService,
    DelivererService,
    AdminService,
    ConsumerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
