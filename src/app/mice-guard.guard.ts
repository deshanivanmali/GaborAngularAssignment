import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, flatMap } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MiceGuardGuard implements CanActivate {
  constructor(private router:Router,private activeRoute:ActivatedRoute,private service:UserService){}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     var result:any;
     this.service.getRouveValidation().subscribe((res:any)=>{
        result=res;
      })
      
      console.log("res",result);
     if(!result){  
      alert("You need to visit Mace. So navigate Mice page")
      this.router.navigate(['/mice']);   
      return false
    }
    return true
  }
  
}
