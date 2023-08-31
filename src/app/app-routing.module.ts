import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './firstpage/homepage/homepage.component';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './firstpage/loginpage/loginpage.component';
import { LogoutComponent } from './logout/logout.component';




const routes: Routes = [
  {path:'', redirectTo:'', pathMatch:'full'},
  {path:'logout', component: LogoutComponent},
  {path:'home', component: HomepageComponent}
 

  ];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
