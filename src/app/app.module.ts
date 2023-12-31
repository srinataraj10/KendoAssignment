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
import { RatingModule  } from 'ngx-bootstrap/rating';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    LogoutComponent,
    StatusComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutocompleteLibModule,
    TypeaheadModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
