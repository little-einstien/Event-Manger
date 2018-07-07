import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentHandlerComponent } from './appointment-handler.component';

describe('AppointmentHandlerComponent', () => {
  let component: AppointmentHandlerComponent;
  let fixture: ComponentFixture<AppointmentHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
