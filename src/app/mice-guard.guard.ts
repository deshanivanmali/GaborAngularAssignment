import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, flatMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiceGuardGuard implements CanActivate {
  constructor(private router:Router,private activeRoute:ActivatedRoute,){}
  // canActivate( ){
  //   const hasVisited=this.activeRoute.snapshot.queryParams['visitedMode']=='true'
  //   if(!hasVisited){
  //     this.router.navigate(['/mice',{visitedMode:true}])
  //     return false
  //   }else{
  //     return true;
  //   }
    
  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    const temp=sessionStorage.getItem('isVisited');
    // const hasVisited=this.activeRoute.snapshot.queryParams['visitedMode']==true || this.activeRoute.snapshot.queryParams['visitedMode']=='true';
    if(sessionStorage.getItem('isVisited')===undefined || sessionStorage.getItem('isVisited')===null || sessionStorage.getItem('isVisited')===""){  
      this.router.navigate(['/mice']);   
      return false
    }
    return true
  }
  
}
