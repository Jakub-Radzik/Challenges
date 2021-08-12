import {Component, OnInit} from '@angular/core';
import {InputValueService} from "../services/input-value.service";
import {ThemeEngineService} from "../services/theme-engine.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public value: string = "";
  public togglerPosition = 1;

  constructor() {
    InputValueService._input.subscribe({
      next: (value: any) => this.value = value
    })

    ThemeEngineService.togglerPosition.subscribe({
      next: (value: any) => {
        this.togglerPosition = value
        this.background = `background-display-${this.togglerPosition}`
      }
    })
  }

  public background: string = `background-${this.togglerPosition}`

  ngOnInit(): void {
  }

}
