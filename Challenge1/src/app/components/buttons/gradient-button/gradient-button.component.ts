import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  templateUrl: './gradient-button.component.html',
  styleUrls: ['./gradient-button.component.css']
})
export class GradientButtonComponent implements OnInit {

  @Input()
  public text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
