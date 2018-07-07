import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
const FAILURE = "failure";
const SUCCESS = "success";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  public static FAILURE = "failure";
  public static SUCCESS = "success";
  public apiRoot: string = environment.api_endpoint;
  public nlu_ep = environment.nlu_endpoint;
  public project = 'f7W18EB';
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
  getForms() {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = `${this.apiRoot}/api/forms/c578e4a2d309f7198b9e98e9dc112b69`;
      this.http.get(url, httpOptions).subscribe((res: any) => {
        if (res.status == DataHandlerService.SUCCESS) {
          resolve(res.data);
        }
        // resolve(res);
      });
    });
  }
  getSlots(username){
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = `${this.apiRoot}/api/slots/u/${username}`;
      this.http.get(url, httpOptions).subscribe((res:any) => {
        if (res.status == SUCCESS) {
          resolve(res.data);
        }
        // resolve(res);
      });
    });
  }
  getSlotsDatewise(username,date){
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = `${this.apiRoot}/api/slots/u/${username}`;
      this.http.post(url,{date:date}, httpOptions).subscribe((res:any) => {
        if (res.status == SUCCESS) {
          resolve(res.data);
        }else{
          resolve(null);
        }
        // resolve(res);
      });
    });
  }
  getUsers(pid){
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = `${this.apiRoot}/api/users/p/${pid}`;
      this.http.get(url, httpOptions).subscribe((res:any) => {
        if (res.status == SUCCESS) {
          resolve(res.data);
        }
        // resolve(res);
      });
    });
  }
  getTemprature(lat,lon){
  
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = `${this.apiRoot}/api/weather/${lat}/${lon}`
      this.http.get(url, httpOptions).subscribe((res:any) => {
        if (res.status == SUCCESS) {
          resolve(res);
        }
        // resolve(res);
      });
    });
  }
  saveForm(details) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = this.apiRoot + '/api/forms/'+this.project ;
      this.http.post(url, details, httpOptions).subscribe(res => {
        resolve(res);
      });
    });
   }
   isUserRegistered(){
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = `${this.apiRoot}/chkusr` ;
      this.http.get(url, httpOptions).subscribe((res:any) => {
        if(res && res.data == '1'){
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });
   }
   registerUser(registrationData) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      let url = this.apiRoot + '/register';
  
      this.http.post(url, registrationData, httpOptions).subscribe(res => {
        resolve(res);
      });
    });
   }
  
}
