import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myBehaviorSubject = new BehaviorSubject<any>('');
  private profileObs$: BehaviorSubject<any> = new BehaviorSubject(null);

user:any[]=[
  {id:1,userName:"admin",password:"admin123"},
  {id:2,userName:"user",password:"user123"}
]
  constructor(private httpClient : HttpClient) { }
  
  login(bodyData:any){
    let loggedInUser=this.user.filter((u:any)=> u.userName==bodyData.username && u.password==bodyData.password)
   
    
    if(loggedInUser!=null){
      this.myBehaviorSubject.next(loggedInUser);
      this.setProfileObs(loggedInUser)
      return loggedInUser;
    }
    else{
      return null
    }
   
    
   
  }
  getValue() {
    return this.myBehaviorSubject.asObservable();
  }
  getProfileObs(): Observable<any> {
    return this.profileObs$.asObservable();
}

setProfileObs(profile: any) {
    this.profileObs$.next(profile);
}
}
