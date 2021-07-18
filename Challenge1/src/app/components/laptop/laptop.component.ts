import {Component, Input, OnInit} from '@angular/core';
import {ResizedEvent} from "angular-resize-event";

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css', "./laptop.component.mobile.css"]
})
export class LaptopComponent implements OnInit {
  public mobile: boolean = false;

  @Input()
  responsive = ""

  constructor() { }

  ngOnInit(): void {
    this.mobile = window.screen.width <= 1000;
    console.log(this.mobile);
  }

  onResized(event: ResizedEvent) {
    this.mobile = event.newWidth <= 1000;
    console.log(this.mobile);
  }
}
