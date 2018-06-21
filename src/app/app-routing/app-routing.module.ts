import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { EventCalenderComponent } from '../components/event-calender/event-calender.component';
import { EventCalender2Component } from '../components/event-calender2/event-calender2.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../gaurd/AuthGuard';
const routes : Routes = [
  {path:'ecl',component:EventCalenderComponent, canActivate: [AuthGuard]},
  {path:'ecl2',component:EventCalender2Component,canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent}
  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ enableTracing: false ,onSameUrlNavigation: 'reload'})
  ],
  exports:[RouterModule],
  declarations: [],
  providers:[EventCalenderComponent]
})
export class AppRoutingModule { }
export const routingComponents = [EventCalenderComponent]
