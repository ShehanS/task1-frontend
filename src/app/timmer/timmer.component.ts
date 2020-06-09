import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timmer',
  templateUrl: './timmer.component.html',
  styleUrls: ['./timmer.component.scss']
})
export class TimmerComponent implements OnInit {

  displayTimeTenSecond : number = 0;
  displayTimeSecond : number = 0;
  displayMillSecond : number =  0;
  displayTotalSecond : number =  0;
 

  intervalTenSecond;
  intervalSecond;
  intervalMillSecond;
  intervalTotalTimmer;


  subscribeTimer: any;
  TenSecondValue: string;
  SecondValue: string;
  MillSecondValue :string;
  TotleSecondsValue: string;
  isMillRunning : boolean = false;
  isSecondRunning : boolean = false;
  isTenRunning : boolean = false;;
  totleSeconds : number;

  constructor() { }

  ngOnInit(): void {
   this.totalTimer();
  }

 


  startTenSecondTimer() {
    this.isTenRunning = !this.isTenRunning;
    if (this.isTenRunning) {
   this.intervalTenSecond = setInterval(() => {
             this.displayTimeTenSecond++;  
             this.TenSecondValue = (new Date(this.displayTimeTenSecond * 1000).toISOString().substr(11, 8));    
    },10000)
  }else{
    clearInterval(this.intervalTenSecond);
  }
  
  }



  starSecondTimer() {
    this.isSecondRunning = !this.isSecondRunning;
    if (this.isSecondRunning) {
       this.intervalSecond = setInterval(() => {
             (this.displayTimeSecond++);    
           this.SecondValue = (new Date(this.displayTimeSecond * 1000).toISOString().substr(11, 8)); 
    },1000)
  }else{
    clearInterval(this.intervalSecond);
  }
  
  }

  
  starMillSecondTimer() {
    this.isMillRunning = !this.isMillRunning;
    if (this.isMillRunning) {
    this.intervalMillSecond = setInterval(() => {
             this.displayMillSecond++;     
             
             this.MillSecondValue = (new Date(this.displayMillSecond * 1000).toISOString().substr(11, 8)); 
            
    },100)
   
  }else{
    clearInterval(this.intervalMillSecond);
  }
  }



  totalTimer() {
  
    this.intervalTotalTimmer = setInterval(() => {
             this.displayTotalSecond++;     
             this.totleSeconds = this.displayTimeTenSecond+ this.displayTimeSecond+this.displayMillSecond;
            this.TotleSecondsValue = (new Date(this.totleSeconds * 1000).toISOString().substr(11, 8)); 
           
            
    },100)
   
 
  }




  pauseTenSecondTimer() {
    clearInterval(this.intervalTenSecond);
    this.intervalTenSecond = 0;
    this.TenSecondValue = "00:00:00";
  }

  pauseSecondTimer() {
    clearInterval(this.intervalSecond);
    this.SecondValue = "00:00:00";
    this.intervalSecond = 0;
    
  }

  pauseMillSecondTimer() {

    this.isMillRunning = false;
    clearInterval(this.intervalMillSecond);
    console.log(this.intervalMillSecond)
    this.MillSecondValue = "00:00:00";
   
   
    
  }


  
}
