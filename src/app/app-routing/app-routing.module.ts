import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { EventCalenderComponent } from '../components/event-calender/event-calender.component';
import { EventCalender2Component } from '../components/event-calender2/event-calender2.component';
const routes : Routes = [
  {path:'ecl',component:EventCalenderComponent},
  {path:'ecl2',component:EventCalender2Component}
  
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
