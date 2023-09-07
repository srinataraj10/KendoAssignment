import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './firstpage/homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { StatusComponent } from './status/status.component';
import { FinallogoutComponent } from './finallogout/finallogout.component';




const routes: Routes = [
  {path:'', redirectTo:'', pathMatch:'full'},
  {path:'logout', component: LogoutComponent},
  {path:'home', component: HomepageComponent},
  {path:'status', component: StatusComponent},
  // {path:'Logout', component: FinallogoutComponent},
 

  ];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
