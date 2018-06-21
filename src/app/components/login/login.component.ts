import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../services/data-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username : string;
  public password : string;
  constructor(private dataHandlerService : DataHandlerService,private router:Router) { }

  ngOnInit() {}
  login(){
   this.dataHandlerService.login(this.username,this.password).then((res:any) => {
      if(res.status != "success"){
        alert(res.msg);
      }else{
        this.router.navigate(['ecl2']);
      }
   });
     
  }
}
