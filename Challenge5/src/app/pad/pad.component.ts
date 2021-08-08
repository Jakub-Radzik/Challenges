import {Component, Input, OnInit} from '@angular/core';
import {InputValueService} from "../services/input-value.service";
import {ThemeEngineService} from "../services/theme-engine.service";
import {ThemeSet} from "../interfaces/ThemeSet";

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {

  public theme: ThemeSet = {
    togglerPosition: 1,
    background: {
      main: 'hsl(222, 26%, 31%)',
      toggle: 'hsl(223, 31%, 20%)',
      keypad: 'hsl(223, 31%, 20%)',
      screen: 'hsl(224, 36%, 15%)'
    },
    keys: {
      basic: {
        background: 'hsl(30, 25%, 89%)',
        shadow: 'hsl(28, 16%, 65%)'
      },
      strongAccent: {
        background: 'hsl(6, 63%, 50%)',
        shadow: 'hsl(6, 70%, 34%)'
      },
      lightAccent: {
        background: 'hsl(225, 21%, 49%)',
        shadow: 'hsl(224, 28%, 35%)'
      },
      toggler: {
        color: 'hsl(6, 63%, 50%)'
      },
    },
    text: {
      color1: 'hsl(221, 14%, 31%)',
      color2: '',
      text: 'hsl(0, 0%, 100%)'
    }
  };

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

  //todo: color theme service
  //button class names:
  public basic: string = `btn-basic-${this.theme.togglerPosition}`
  public strong: string = `btn-strong-${this.theme.togglerPosition}`
  public accent: string = `btn-accent-${this.theme.togglerPosition}`
  //background
  public background: string = `background-${this.theme.togglerPosition}`

  constructor() {
    InputValueService._input.subscribe({
      next: (value: any) => console.log(value)
    })

    ThemeEngineService.currentSet.subscribe({
      next: (value: any) => {
        this.theme = value
        this.basic = `btn-basic-${this.theme.togglerPosition}`
        this.strong = `btn-strong-${this.theme.togglerPosition}`
        this.accent = `btn-accent-${this.theme.togglerPosition}`
        this.background = `background-${this.theme.togglerPosition}`
      }
    })
  }


  ngOnInit(): void {
  }

}
