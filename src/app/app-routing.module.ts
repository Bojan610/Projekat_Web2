import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDeliverersComponent } from './admin-deliverers/admin-deliverers.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ConsumerHomeComponent } from './consumer-home/consumer-home.component';
import { DelivererHomeComponent } from './deliverer-home/deliverer-home.component';
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
      { path: "", component: AdminHomeComponent },
      { path: "myprofile", component: MyprofileComponent }, 
      { path: "deliverers", component: AdminDeliverersComponent }      
    ]
  },
  {
    path:'consumer-home/:email',
    children: [
      { path: "", component: ConsumerHomeComponent },
      { path: "myprofile", component: MyprofileComponent }     
    ]
  },
  {
    path:'deliverer-home/:email',
    children: [
      { path: "", component: DelivererHomeComponent },
      { path: "myprofile", component: MyprofileComponent }     
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
