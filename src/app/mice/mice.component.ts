import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-mice',
  templateUrl: './mice.component.html',
  styleUrls: ['./mice.component.scss']
})
export class MiceComponent implements OnInit{
  ngOnInit(): void {    
    sessionStorage.setItem('isVisited','true')
  }

}
