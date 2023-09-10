import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private route:Router,){}
  title = 'sampleproject';
  @Input() login = false;
  @Input() data = true;

 ngOnInit(){
   this.login = true
 }
  
}
