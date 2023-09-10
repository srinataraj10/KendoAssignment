import { Component, ViewChild, Input,  Output } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  constructor(private route:Router,){}
  @Input() new = false;
  @Input() login = true;
  @ViewChild('f') 'singupForm': NgForm;


  onSignIn(){
    this.new = true;
    this.login = false;
    this.route.navigate(["home"]);
  }

}


