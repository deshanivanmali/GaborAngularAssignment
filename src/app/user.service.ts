import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private checkVisitedPage$: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor() { }
  
 validateRoute(isVisited:boolean){
  
  this.checkVisitedPage$.next(isVisited)
 }
 getRouveValidation(): Observable<any>{
  return this.checkVisitedPage$.asObservable();
 }
 unSbuscribeObjervable(){
  this.checkVisitedPage$.unsubscribe();
 }
 
}
