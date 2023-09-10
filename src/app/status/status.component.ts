import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as searchDetails from 'src/assets/json/data.json'


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  
  @Input() suggestionList: any;
 
  public newList:any    
  public data = false;
  public new = false;
  public list: any = searchDetails;
  max: number = 5;
  value: number = 3;

  constructor(private route:Router,){}

  ngOnInit(){
    console.log("List", this.list);
  }

  onLogout(){
    this.data = true;
    this.new = true;
    this.route.navigate(["logout"])
  }  




}
