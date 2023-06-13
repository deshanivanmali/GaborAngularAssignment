import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  
  constructor(private service:UserService){ }
 
  ngOnInit(){
    this.service.validateRoute(false)
  }
  
}
