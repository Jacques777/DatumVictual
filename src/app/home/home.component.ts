import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myh1: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }


  justClick() {
    this.myh1 = true;
   
}

}
