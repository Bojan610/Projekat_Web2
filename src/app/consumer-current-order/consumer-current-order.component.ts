import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../Models/order.model';
import { RetString } from '../Models/retString.model';
import { StopWatch } from '../Models/stopwatch.model';
import { ConsumerService } from '../Services/consumer.service';
import { DelivererService } from '../Services/deliverer.service';

@Component({
  selector: 'app-consumer-current-order',
  templateUrl: './consumer-current-order.component.html',
  styleUrls: ['./consumer-current-order.component.css']
})
export class ConsumerCurrentOrderComponent implements OnInit {
  email: string = "";
  currentOrder: Order = new Order; 
  time: StopWatch = new StopWatch; 
  refresh: boolean = false;

  constructor(private service: ConsumerService, private router: Router, private route:ActivatedRoute) {
    route.params.subscribe(params => { this.email = params['email']; });

    this.service.getCurrentOrder(this.email).subscribe(
      
      (data : Order) => {
        this.currentOrder = data;
      },
      error => {
          window.alert('Something went wrong.');
      }
    );
    

    this.delay(1000).then(any=>{    
      console.log(this.currentOrder);
      if (this.currentOrder.id != -1)
      {
        //if (this.currentOrder.status == 'waiting')
          this.myFunction();                  
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
      if (this.currentOrder.status == 'waiting')
        this.myFunction();
      else if ((this.time.minutes + this.time.seconds) == 0 && this.refresh == true)
      {
        let param:RetString = new RetString();
        param.retValueNumer = this.currentOrder.id
        console.log(param.retValue);
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
      else if (this.currentOrder.status == 'picked up' && localStorage.getItem('token') != null)
        this.myFunction2();
    });
  }

  myFunction() {
    if (localStorage.getItem('token') != null) {
      this.delay2(3000).then( any=>{      
        if (localStorage.getItem('token') != null) {    
          this.service.getCurrentOrder(this.email).subscribe(
            (data : Order) => {
              this.currentOrder = data;
              console.log("waiting for pick up");
            },
            error => {
                window.alert('Something went wrong.');
            }
          );
        }
      });
    }
  }

  myFunction2() {   
    this.delay2(1000).then( any=>{      
      if (localStorage.getItem('token') != null) {    
        this.service.getTime(this.currentOrder.id).subscribe(
          (data : StopWatch) => {
            if (data != null)
            {
              this.time = data;
              console.log("picked up");
              this.refresh = true;
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
