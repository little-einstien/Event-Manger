import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventCalenderComponent } from './components/event-calender/event-calender.component';
import { EventService } from './services/event.service';
import { DataHandlerService } from './services/data-handler.service';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DemoModule } from './components/event-calender2/module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AuthGuard } from './gaurd/AuthGuard';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { FormViewerComponent } from './components/form-viewer/form-viewer.component';
@NgModule({
  declarations: [
    AppComponent,
    EventCalenderComponent,routingComponents, LoginComponent,SideNavComponent, FormViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    AppRoutingModule,
    HttpClientModule,DemoModule,FormsModule

  ],
  providers: [EventService,DataHandlerService,AuthGuard,JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
