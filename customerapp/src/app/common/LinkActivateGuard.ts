import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LinkActivateGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // browser console:
        // window.sessionStorage.setItem("user","banu@gmail.com")
        let user = window.sessionStorage.getItem("user");
        if(user) {
            return true;
        } else {
            return false;
        }
    }
    
}