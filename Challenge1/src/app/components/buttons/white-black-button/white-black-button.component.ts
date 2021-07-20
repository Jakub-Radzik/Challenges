import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-white-black-button',
  templateUrl: './white-black-button.component.html',
  styleUrls: ['./white-black-button.component.css']
})
export class WhiteBlackButtonComponent implements OnInit {

  @Input()
  public text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
