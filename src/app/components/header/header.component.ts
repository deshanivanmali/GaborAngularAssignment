import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private service:UserService){
 
 
  }
 async ngOnInit(): Promise<void> {
  // this.service.validateRoute(true)
  //  await this.service.getProfileObs().subscribe(profile =>{
  //   console.log("22 {}",profile );
  //  })  
  
 }
}
