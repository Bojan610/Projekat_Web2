import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDeliverersComponent } from './admin-deliverers/admin-deliverers.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AuthGuard } from './auth/auth.guard';
import { ConsumerCurrentOrderComponent } from './consumer-current-order/consumer-current-order.component';
import { ConsumerHomeComponent } from './consumer-home/consumer-home.component';
import { ConsumerMycartComponent } from './consumer-mycart/consumer-mycart.component';
import { ConsumerPreviousOrdersComponent } from './consumer-previous-orders/consumer-previous-orders.component';
import { ConsumerProductsComponent } from './consumer-products/consumer-products.component';
import { DelivererCurrentOrderComponent } from './deliverer-current-order/deliverer-current-order.component';
import { DelivererHomeComponent } from './deliverer-home/deliverer-home.component';
import { DelivererOrdersComponent } from './deliverer-orders/deliverer-orders.component';
import { DelivererPreviousOrdersComponent } from './deliverer-previous-orders/deliverer-previous-orders.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
   ]
  },
  {
  path: "admin-home/:email",
    children: [
      { path: "", component: AdminHomeComponent, canActivate:[AuthGuard]},
      { path: "myprofile", component: MyprofileComponent, canActivate:[AuthGuard], }, 
      { path: "deliverers", component: AdminDeliverersComponent, canActivate:[AuthGuard] },
      { path: "products", component: AdminProductsComponent, canActivate:[AuthGuard] },  
      { path: "allOrders", component: AdminOrdersComponent, canActivate:[AuthGuard] }            
    ]
  },
  {
    path:'consumer-home/:email',
    children: [
      { path: "", component: ConsumerHomeComponent, canActivate:[AuthGuard] },
      { path: "myprofile", component: MyprofileComponent, canActivate:[AuthGuard] },
      { path: "products", component: ConsumerProductsComponent, canActivate:[AuthGuard] },
      { path: "mycart", component: ConsumerMycartComponent, canActivate:[AuthGuard] },
      { path: "currentOrder", component: ConsumerCurrentOrderComponent, canActivate:[AuthGuard] }, 
      { path: "previousOrders", component: ConsumerPreviousOrdersComponent, canActivate:[AuthGuard] }    
    ]
  },
  {
    path:'deliverer-home/:email',
    children: [
      { path: "", component: DelivererHomeComponent, canActivate:[AuthGuard] },
      { path: "myprofile", component: MyprofileComponent, canActivate:[AuthGuard] },
      { path: "orders", component: DelivererOrdersComponent, canActivate:[AuthGuard] },
      { path: "currentOrder", component: DelivererCurrentOrderComponent, canActivate:[AuthGuard] },  
      { path: "previousOrders", component: DelivererPreviousOrdersComponent, canActivate:[AuthGuard] }                 
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
