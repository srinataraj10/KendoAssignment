import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private route:Router,){}
   logout = false;
   searchPage = false
   keyword = "name"
   suggestionList: any


    public suggestion = [
    {name: "Oil India Limited", value: "NSE:OIL"},
    {name: "Oil & Natural Gas Corporation Limited",  value: "NSE:ONGCA"},
    {name: "Oil Country Tubular Limited", value: "NSE:OILCOUNTUB" },
    {name: "Dalmia Bharat Limited", value: "NSE:DALBHARAT"},
  ] 

  selectEvent(newList: any) {
    this.searchPage = true;
    this.suggestionList = newList;
    console.log("Test",this.suggestionList);
    this.route.navigate(["/status"])
  }

  onFocused(e:any) {
   
  }

  onLogut(){
    this.logout = true;
    this.searchPage = true;
    this.route.navigate(["/logout"])
  }



}
 