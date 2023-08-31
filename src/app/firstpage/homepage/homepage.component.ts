import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private route:Router){}

   logout = false;

   suggestion = [{
    data1 : "Oil India Limited",
    data2: "Oil & Natural Gas Corporation Limited",
    data3: "Oil Country Tubular Limited",
    data4: "Dalmia Bharat Limited",
  }] 


  onLogut(){
    this.logout = true;
    this.route.navigate(["/logout"])
  }
}
 