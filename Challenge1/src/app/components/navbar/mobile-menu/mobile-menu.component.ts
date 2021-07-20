import {Component, Input, OnInit} from '@angular/core';
import {ResizedEvent} from "angular-resize-event";

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {

  public show_menu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onResized(event: ResizedEvent) {
    this.show_menu = false;
  }

}
