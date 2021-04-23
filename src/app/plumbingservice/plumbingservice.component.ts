import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plumbingservice',
  templateUrl: './plumbingservice.component.html',
  styleUrls: ['./plumbingservice.component.css']
})
export class PlumbingserviceComponent implements OnInit {
  public plumbing = "assets/Image/plumbing.jpg";
  public men1 = "assets/Image/men1.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
