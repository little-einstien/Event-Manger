import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  public static FAILURE = "failure";
  public static SUCCESS = "success";
  public apiRoot: string = environment.api_endpoint;
  public nlu_ep = environment.nlu_endpoint;
  constructor(private http: HttpClient) { }

  
  saveAppointment(appointment)  {
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
      this.http.get(url, httpOptions).subscribe((res:any) => {
        if (res.status == DataHandlerService.SUCCESS) {
          resolve(res.data);
        }
        // resolve(res);
      });
    });
  }
}
