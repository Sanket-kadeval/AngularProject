import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  // image 
  public contact = "assets/Image/contactus.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
