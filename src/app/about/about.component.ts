import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public myImage1 = "assets/Image/about1.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
