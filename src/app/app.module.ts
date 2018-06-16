import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventCalenderComponent } from './components/event-calender/event-calender.component';
import { EventService } from './services/event.service';
import { DataHandlerService } from './services/data-handler.service';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EventCalenderComponent,routingComponents
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [EventService,DataHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
