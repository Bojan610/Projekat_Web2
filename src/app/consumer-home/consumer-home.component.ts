import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-consumer-home',
  templateUrl: './consumer-home.component.html',
  styleUrls: ['./consumer-home.component.css']
})
export class ConsumerHomeComponent implements OnInit {
  email: string = "";
  time: number = 120;
  timeDisplay: string = "";

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(params => { this.email = params['email']; });
   }

  ngOnInit(): void {
    timer(0, 1000).subscribe(ellapsedCycles => {
      if (this.time > 0)
      {
        this.time--;
        this.getDisplayTimer(this.time);
      }
        
    });
  }

  getDisplayTimer(time: number) {
    let minutes = Math.floor(time / 60);
    let seconds = time - (minutes * 60)
   
    console.log(minutes.toString);
    //console.log(seconds);
    this.timeDisplay = minutes.toString() + ":" + seconds.toString();
  }
}
