import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  
  public alertClosed=false;
  constructor() { }

  ngOnInit() {
  }
  showAlert(){
    this.alertClosed=false;
  }
  
  hideAlert(){
    this.alertClosed=true;
  }

  showAlertTime(miliseconds){
    setTimeout(() => this.alertClosed = true, 2000);
    
  }

}
