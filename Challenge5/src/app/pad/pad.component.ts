import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  //GRID AREAS:
  public RESET = "5 / 1 / 6 / 3";
  public EQUAL = "5 / 3 / 6 / 5";
  public SEVEN = "1 / 1 / 2 / 2";
  public EIGHT = "1 / 2 / 2 / 3";
  public NINE = "1 / 3 / 2 / 4";
  public DELETE = "1 / 4 / 2 / 5";
  public FOUR = "2 / 1 / 3 / 2";
  public FIVE = "2 / 2 / 3 / 3";
  public SIX = "2 / 3 / 3 / 4";
  public ADD = "2 / 4 / 3 / 5";
  public SUBTRACT = "3 / 4 / 4 / 5";
  public MULTIPLY = "4 / 4 / 5 / 5";
  public DIVIDE = "4 / 3 / 5 / 4";
  public ONE = "3 / 1 / 4 / 2";
  public TWO = "3 / 2 / 4 / 3";
  public THREE = "3 / 3 / 4 / 4";
  public DOT = "4 / 1 / 5 / 2";
  public ZERO = "4 / 2 / 5 / 3";

  public YELLOW = "yellow";

  //todo: color theme service
  //todo: calculator service with ngrx subscribe

  constructor() {
  }

  ngOnInit(): void {
  }

}
