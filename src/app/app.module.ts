import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventCalenderComponent } from './components/event-calender/event-calender.component';
import { EventService } from './services/event.service';
import { DataHandlerService } from './services/data-handler.service';
@NgModule({
  declarations: [
    AppComponent,
    EventCalenderComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
	HttpClientModule	

  ],
  providers: [EventService,DataHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
