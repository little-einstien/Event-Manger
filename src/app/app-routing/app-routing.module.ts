import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { EventCalenderComponent } from '../components/event-calender/event-calender.component';
const routes : Routes = [
  {path:'ecl',component:EventCalenderComponent},
  
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
