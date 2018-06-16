import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventCalenderComponent } from './components/event-calender/event-calender.component';
import { EventService } from './services/event.service';
import { DataHandlerService } from './services/data-handler.service';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'angular-calendar'; 
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DemoModule } from './components/event-calender2/module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    EventCalenderComponent,routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    AppRoutingModule,
    HttpClientModule,DemoModule

  ],
  providers: [EventService,DataHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
