import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, timer } from 'rxjs';
import { Order } from '../Models/order.model';
import { RetString } from '../Models/retString.model';
import { StopWatch } from '../Models/stopwatch.model';
import { DelivererService } from '../Services/deliverer.service';

@Component({
  selector: 'app-deliverer-current-order',
  templateUrl: './deliverer-current-order.component.html',
  styleUrls: ['./deliverer-current-order.component.css']
})
export class DelivererCurrentOrderComponent implements OnInit {
  email: string = "";
  currentOrder: Order = new Order; 
  time: StopWatch = new StopWatch; 

  constructor(private route:ActivatedRoute, private service: DelivererService, private router: Router) { 
    route.params.subscribe(params => { this.email = params['email']; });
  
    this.service.getCurrentOrder(this.email).subscribe(
      (data : Order) => {
        if (data != null)
          this.currentOrder = data;
        else
          window.alert('Something went wrong.');
      },
      error => {
          window.alert('Something went wrong.');
      }
    );

    this.delay(1000).then(any=>{    
      console.log(this.currentOrder);
      if (this.currentOrder.id != -1)
      {                 
        this.service.getTime(this.currentOrder.id).subscribe(
          (data : StopWatch) => {
            console.log(data);
            if (data != null)
            {
              this.time = data;
            }
            else
              window.alert('Something went wrong.');
          },
          error => {
              window.alert('Something went wrong.');
          }
          );  

          //this.delay(1000).then( any=>{  
          
            this.myFunction();
            
          //});
      }    
    });
  }
 
  ngOnInit(): void {
  }
 
  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms));
  }
 
  async delay2(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>{
      if ((this.time.minutes + this.time.seconds) > 0)
        this.myFunction();
      else if ((this.time.minutes + this.time.seconds) == 0)
      {
        let param:RetString = new RetString();
        param.retValueNumer = this.currentOrder.id
        this.service.ChangeOrderStatus(param).subscribe(
          (data : Boolean) => {
            if (data == false)
            {
              window.alert('Something went wrong.');
            }            
          },
          error => {
              window.alert('Something went wrong.');
          }
        );
        location.reload();
      }
    });
  }

  myFunction() {
    if (localStorage.getItem('token') != null) {
      this.delay2(1000).then( any=>{   
        if (localStorage.getItem('token') != null) {       
          this.service.getTime(this.currentOrder.id).subscribe(
            (data : StopWatch) => {
              if (data != null)
              {
                this.time = data;
                console.log(this.time);
              }
              else
                window.alert('Something went wrong.');
            },
            error => {
                window.alert('Something went wrong.');
            }
          );
        }
      });
    }
  }
}
