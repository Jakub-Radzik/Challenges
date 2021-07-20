import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public startForFree: string = "Start for Free";
  public learnMore: string = "Learn More";

  constructor() { }

  ngOnInit(): void {
  }

}
