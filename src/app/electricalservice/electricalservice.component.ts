import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electricalservice',
  templateUrl: './electricalservice.component.html',
  styleUrls: ['./electricalservice.component.css']
})
export class ElectricalserviceComponent implements OnInit {
  public electrical = "assets/Image/electrical.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
