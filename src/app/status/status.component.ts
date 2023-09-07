import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() suggestionList: any[] = [];
  public newList:any    
  public data = false;
  public new = false;

  constructor(private route:Router,
              private share:SharedService ){}

  ngOnInit(){
    // console.log(this.suggestionList);
    // this.newList = JSON.stringify(this.suggestionList);
    // console.log(this.newList);
    this.share.dataList().subscribe((newList: any)=>{
      console.log(newList);
      this.newList = newList;
    })
  }

  onLogout(){
    this.data = true;
    this.new = true;
    this.route.navigate(["logout"])
  }  




}
