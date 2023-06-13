import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, flatMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiceGuardGuard implements CanActivate {
  constructor(private router:Router,private activeRoute:ActivatedRoute,){}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(sessionStorage.getItem('isVisited')===undefined || sessionStorage.getItem('isVisited')===null || sessionStorage.getItem('isVisited')===""){  
      this.router.navigate(['/mice']);   
      return false
    }
    return true
  }
  
}
