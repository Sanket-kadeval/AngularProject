import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  // image 
  myImage1 = "assets/Image/login.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
