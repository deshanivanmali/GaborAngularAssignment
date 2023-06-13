import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mice',
  templateUrl: './mice.component.html',
  styleUrls: ['./mice.component.scss']
})
export class MiceComponent implements OnInit{
  constructor(private service:UserService){

  }
  async ngOnInit(): Promise<void> {    
    await this.service.validateRoute(true);
  }

}
