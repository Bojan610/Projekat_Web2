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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthInterceptor } from './auth/auth.interceptor';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { DelivererOrdersComponent } from './deliverer-orders/deliverer-orders.component';
import { DelivererCurrentOrderComponent } from './deliverer-current-order/deliverer-current-order.component';
import { ConsumerPreviousOrdersComponent } from './consumer-previous-orders/consumer-previous-orders.component';
import { DelivererPreviousOrdersComponent } from './deliverer-previous-orders/deliverer-previous-orders.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';


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
    ConsumerCurrentOrderComponent,
    DelivererOrdersComponent,
    DelivererCurrentOrderComponent,
    ConsumerPreviousOrdersComponent,
    DelivererPreviousOrdersComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    SocialLoginModule,
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
    ConsumerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
     
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '148517665605-jspahbqleats6lvlag9kasc2c11b5g7o.apps.googleusercontent.com'
            )
          }        
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
