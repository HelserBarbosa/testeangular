import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isMouse : boolean = false;


  mouseOverOut()
  {
    this.isMouse = !this.isMouse;
  }

  constructor() { }

  ngOnInit() {
  }

}
