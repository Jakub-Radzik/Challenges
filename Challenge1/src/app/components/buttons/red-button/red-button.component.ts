import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-red-button',
  templateUrl: './red-button.component.html',
  styleUrls: ['./red-button.component.css']
})
export class RedButtonComponent implements OnInit {

  @Input()
  public text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
