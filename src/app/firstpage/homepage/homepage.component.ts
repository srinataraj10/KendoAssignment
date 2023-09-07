import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private route:Router,
    private shared:SharedService){}
   logout = false;
   searchPage = false
   keyword = "name"
   suggestionList: string = ''


    public suggestion = [
    {name: "Oil India Limited", value: "NSE:ONGCA"},
    {name: "Oil & Natural Gas Corporation Limited",  value: "NSE:OIL"},
    {name: "Oil Country Tubular Limited", value: "NSE:OILCOUNTUB" },
    {name: "Dalmia Bharat Limited", value: "NSE:DALBHARAT"},
  ] 

  selectEvent(newList: any) {
    this.searchPage = true;
    this.suggestionList = JSON.stringify(event);
    console.log("Test",this.suggestionList);
    this.shared.setList(newList);
    console.log("sddf", newList)
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
 