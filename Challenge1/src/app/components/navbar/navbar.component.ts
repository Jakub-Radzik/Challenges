import { Component, OnInit } from '@angular/core';
import {ResizedEvent} from "angular-resize-event";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public mobileBreakPoint = 900;
  public mobile: boolean = false;

  public startForFree: string = "Start for Free";
  public learnMore: string = "Learn More";

  constructor() { }

  ngOnInit(): void {
    this.mobile = window.screen.width <= this.mobileBreakPoint;
  }

  onResized(event: ResizedEvent) {
    this.mobile = event.newWidth <= this.mobileBreakPoint;
  }
}
