import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 public userDetails?:any
  constructor(private service:UserService){
 
 
  }
 async ngOnInit(): Promise<void> {
  this.userDetails=localStorage.getItem('userDetails');   

  //  await this.service.getValue().subscribe(res=>{
  //   console.log("22 {}",res);
  //  })
   
  
 }
}
