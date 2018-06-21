import { CanActivate, Router } from "@angular/router";
import { DataHandlerService } from "../services/data-handler.service";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router:Router,private dataHandlerService:DataHandlerService){}
    canActivate() {
         if(this.dataHandlerService.isUserLoggedIn()){
            return true;
         }else{
             this.router.navigate(['']);
             return false;
         }
    }
}