import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DelivererDisplay } from '../Models/deliverer-display.model';
import { RetString } from '../Models/retString.model';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin-deliverers',
  templateUrl: './admin-deliverers.component.html',
  styleUrls: ['./admin-deliverers.component.css']
})
export class AdminDeliverersComponent implements OnInit {
  deliverers : DelivererDisplay[] = [];
  deniedDeliverers : DelivererDisplay[] = [];
  acceptedDeliverers : DelivererDisplay[] = [];
  delDetails : DelivererDisplay = new DelivererDisplay();
  email: string = "";

  constructor(private service: AdminService, private router: Router, private route:ActivatedRoute) { 
    route.params.subscribe(params => { this.email = params['email']; });

    this.service.getProcessingDeliverers().subscribe(
      (data : DelivererDisplay[]) => {
        this.deliverers = data;
      },
      error => {
          window.alert('Something went wrong.');
      }
    );

    this.service.getDeniedDeliverers().subscribe(
      (data : DelivererDisplay[]) => {
        this.deniedDeliverers = data;
      },
      error => {
          window.alert('Something went wrong.');
      }
    );

    this.service.getAcceptedDeliverers().subscribe(
      (data : DelivererDisplay[]) => {
        this.acceptedDeliverers = data;
      },
      error => {
          window.alert('Something went wrong.');
      }
    );
  }

  ngOnInit(): void {
  }

  delivererDetails(deliverer: DelivererDisplay): void {
    this.delDetails = deliverer;
  }

  acceptDeliverer(deliverer: DelivererDisplay): void {
    let param:RetString = new RetString();
    param.retValue = deliverer.email;
    this.service.acceptDeliverer(param).subscribe(
      (data : Boolean) => {   
        if (data == true)    
          this.router.navigateByUrl('/admin-home/' + this.email);
        else
          window.alert("Accept failed");
      },
      error => {
        window.alert("Accept failed.");
      }
    )
  }

  declineDeliverer(deliverer: DelivererDisplay): void {
    let param:RetString = new RetString();
    param.retValue = deliverer.email;
    this.service.declineDeliverer(param).subscribe(
      (data : Boolean) => {   
        if (data == true)    
          this.router.navigateByUrl('/admin-home/' + this.email);
        else
          window.alert("Decline failed");
      },
      error => {
        window.alert("Decline failed.");
      }
    )
  }
}
