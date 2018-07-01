import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  public static FAILURE = "failure";
  public static SUCCESS = "success";
  public apiRoot: string = environment.api_endpoint;
  public nlu_ep = environment.nlu_endpoint;
  constructor(private http: HttpClient) { }


  saveAppointment(appointment) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = `${this.apiRoot}/api/appointments`;
      this.http.post(url, appointment, httpOptions).subscribe(res => {
        if (res) {
          alert("Appointment saved");
        }
        // resolve(res);
      });
    });
  }
  getAppointments(id) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = `${this.apiRoot}/api/appointments/${id}`;
      this.http.get(url, httpOptions).subscribe((res: any) => {
        if (res.status == DataHandlerService.SUCCESS) {
          resolve(res.data);
        }
        // resolve(res);
      });
    });
  }
  login(username,password) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = `${this.apiRoot}/api/users/login`;
      this.http.post(url,{username:username,password:password}, httpOptions).subscribe((res: any) => {
          localStorage.setItem('token',res.token);
          resolve(res);
        
      });
    });

  }
  isUserLoggedIn() {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
  
    return !new JwtHelperService().isTokenExpired(token);
  }
  saveSlots(slots){
    slots.token = localStorage.getItem('token');
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = `${this.apiRoot}/api/slots`;
      this.http.post(url,slots , httpOptions).subscribe(res => {
        if (res) {
          alert("Slots saved");
        }
        // resolve(res);
      });
    });
  }
  
  deleteAppointment(id) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = `${this.apiRoot}/api/appointments/${id}`;
      this.http.delete(url, httpOptions).subscribe((res: any) => {
        if (res.status == DataHandlerService.SUCCESS) {
          resolve(res.data);
        }
        // resolve(res);
      });
    });
  }


}
