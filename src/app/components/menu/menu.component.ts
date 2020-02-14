import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  message: string= "Bonjour ma chère Yali";
  constructor() { }

  ngOnInit() {
  }

  clickEvent(p: string = null): void{
    if (p == null){
      alert("You just clicked me!!");
    } else {
      alert(`You just clicked ${p}`);
    }
    
  }

}
