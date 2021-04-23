import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // image 
  public myImage1 = "assets/Image/electrician.jpg";
  public myImage2 = "assets/Image/plumber.jpg";
  public myImage3 = "assets/Image/civil.jpg";
  public myImage4 = "assets/Image/worker.jpg"; 
  public plumbing = "assets/Image/plumbing.jpg";
  public electrical = "assets/Image/electrical.jpg";
  public roomcleaning = "assets/Image/roomcleaning.jpg";
  public about1 = "assets/Image/worker1.jpg"; 
  constructor() { }

  ngOnInit(): void {
  }

}
