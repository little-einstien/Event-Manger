import { Component, OnInit, TemplateRef, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import * as moment from 'moment';
import * as M from 'materialize-css';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataHandlerService } from '../../services/data-handler.service';
import * as _ from 'lodash';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-event-calender2',
  templateUrl: './event-calender2.component.html',
  styleUrls: ['./event-calender2.component.css']
})
export class EventCalender2Component implements OnInit ,AfterViewInit{
  ngAfterViewInit(): void {
    setTimeout(() => {M.Collapsible.init(document.querySelectorAll('.collapsible'), {})},500);
  }
  showEditorPane = false;
  morning_slots = [];
  evening_slots = [];
  morning_slots_input = [];
  evening_slots_input = [];
  ngOnInit(): void {
    const day_start = moment().startOf('day').hours(9); // 7 am
    const day_end = moment().startOf('day').hours(13) // 10 pm
    while (day_start <= day_end) {
      this.morning_slots.push({id : `s${moment(day_start)}` , l : moment(day_start).format('HH:mm')});
      day_start.add(30, 'minutes');
    }
    const day_start1 = moment().startOf('day').hours(15); // 7 am
    const day_end1 = moment().startOf('day').hours(20) // 10 pm
    while (day_start1 <= day_end1) {
      this.evening_slots.push({id : `s${moment(day_start1)}`, l :  moment(day_start1).format('HH:mm')});
      day_start1.add(30, 'minutes');
    }
  }
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: colors.red,
  //     actions: this.actions
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: colors.yellow,
  //     actions: this.actions
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: colors.blue
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: new Date(),
  //     title: 'A draggable and resizable event',
  //     color: colors.yellow,
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   }
  // ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, private dataHandlerServie: DataHandlerService) {
    this.dataHandlerServie.getAppointments('f7W18EB').then((appointments: Array<any>) => {
      this.events = [
      ];

      for (let i = 0; i < appointments.length; i++) {
        this.events.push({
          start: new Date(appointments[i].date),
          end: new Date(appointments[i].date),
          title: `slot : ${appointments[i].slot.l} | ${appointments[i].user.name} | ${appointments[i].user.mobile} | ${appointments[i].user.email}`,
          color: colors.yellow,
          actions: this.actions,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        });
      }

    });
  }
  dateClicked = new Date();
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
        this.dateClicked = date;
        this.dateClicked.setMinutes(0);
        this.dateClicked.setHours(0);
        this.dateClicked.setSeconds(0);
        
        console.log(this.dateClicked);
        this.showEditorPane = !this.showEditorPane
        //alert(this.viewDate);
      } else {
        this.viewDate = date;
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }
  public events_ = [];
  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });

  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
  selectedMorningSlots = [];
  selectedEveningSlots = [];
  saveSlots(){
    for(let i = 0 ; i < this.morning_slots.length ; i++ ){
      if(this.morning_slots[i].val){
        this.selectedMorningSlots.push(this.morning_slots[i]);
      }
    }
    for(let i = 0 ; i < this.evening_slots.length ; i++ ){
      if(this.evening_slots[i].val){
        this.selectedEveningSlots.push(this.evening_slots[i]);
      }
    }
    this.dataHandlerServie.saveSlots({date : this.dateClicked.getTime(),m_slts:this.selectedMorningSlots,e_slts:this.selectedEveningSlots});
    console.log(this.selectedMorningSlots);
    console.log(this.selectedEveningSlots);
  }
  addMorningSlots(i){
    // if(this.morning_slots_input[i]){
    //   this.selectedMorningSlots.push(this.morning_slots_input[i]);
    //   //this.selectedMorningSlots.push(date);
    // }else{
    //   _.remove(this.selectedMorningSlots, function(n) {
    //     return this.selectedMorningSlots[n] === date;
    //   });
    // }
  }
  addEveningSlots(i){
    // if(this.evening_slots_input[i]){
    //   this.selectedEveningSlots.push(date);
    // }else{
    //   _.remove(this.selectedEveningSlots, function(n) {
    //     return this.selectedEveningSlots[n] == date;
    //   });
    // }
  }
}
