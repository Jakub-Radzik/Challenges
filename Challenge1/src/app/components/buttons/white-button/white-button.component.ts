import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-white-button',
  templateUrl: './white-button.component.html',
  styleUrls: ['./white-button.component.css']
})
export class WhiteButtonComponent implements OnInit {

  @Input()
  public text:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
