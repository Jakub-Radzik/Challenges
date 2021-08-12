import {Component, OnInit} from '@angular/core';
import {InputValueService} from "../services/input-value.service";
import {ThemeEngineService} from "../services/theme-engine.service";

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

  public togglerPosition = 1;

  //button class names:
  public basic: string = `btn-basic-${this.togglerPosition}`
  public strong: string = `btn-strong-${this.togglerPosition}`
  public accent: string = `btn-accent-${this.togglerPosition}`
  //background
  public background: string = `background-${this.togglerPosition}`

  constructor() {
    InputValueService._input.subscribe({
      next: (value: any) => console.log(value)
    })

    ThemeEngineService.togglerPosition.subscribe({
      next: (value: any) => {
        this.basic = `btn-basic-${value}`
        this.strong = `btn-strong-${value}`
        this.accent = `btn-accent-${value}`
        this.background = `background-${value}`
      }
    })
  }


  ngOnInit(): void {
  }

}
