import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginpageComponent } from './firstpage/loginpage/loginpage.component';
import {HomepageComponent} from './firstpage/homepage/homepage.component'
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { StatusComponent } from './status/status.component';
import { FinallogoutComponent } from './finallogout/finallogout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    LogoutComponent,
    StatusComponent,
    FinallogoutComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutocompleteLibModule,
    TypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
