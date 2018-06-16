import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCalender2Component } from './event-calender2.component';

describe('EventCalender2Component', () => {
  let component: EventCalender2Component;
  let fixture: ComponentFixture<EventCalender2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCalender2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCalender2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
