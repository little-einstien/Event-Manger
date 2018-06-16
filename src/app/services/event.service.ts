import { Inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

import { Observable, of } from 'rxjs';
import { DataHandlerService } from './data-handler.service';
@Injectable()
export class EventService {
    data = [];
    constructor(private dataHandlerService:DataHandlerService){}
    public getEvents(): Observable<any> {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        if(this.data.length != 0){
            return of(this.data);
        }else{
            this.dataHandlerService.getAppointments("f7W18EB").then((events:Array<any>)=>{
                for(var i = 0 ; i< events.length ; i++){
                    this.data.push({

                        title: events[i].title,
                        start : events[i].st,
                        end : events[i].et
                    });
                    if(i == events.length-1 ){
                        return of(this.data);
                    }
                }
            })
        }
    }
};
