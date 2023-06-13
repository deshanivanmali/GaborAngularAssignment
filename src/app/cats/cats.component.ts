import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit{
  
  constructor(private service:UserService){ }
 
   ngOnInit(){
     this.service.validateRoute(false)
  }
  
  
}
