import {Component, OnInit} from '@angular/core';
import {ResizedEvent} from "angular-resize-event";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css', './editor.component.mobile.css']
})
export class EditorComponent implements OnInit {
  public mobile: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.mobile = window.screen.width <= 700;
    console.log(this.mobile);
  }

  onResized(event: ResizedEvent) {
    this.mobile = event.newWidth <= 700;
    console.log(this.mobile);
  }
}
