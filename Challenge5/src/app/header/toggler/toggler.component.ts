import {Component, OnInit} from '@angular/core';
import {ThemeEngineService} from "../../services/theme-engine.service";

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent implements OnInit {

  public togglerPosition: string = "toggler-position-1";
  public background: string = "toggler-background-1";

  constructor() {
    ThemeEngineService.togglerPosition.subscribe({
      next: (value: any) => {
        this.togglerPosition = `toggler-position-${value}`
        this.background = `toggler-background-${value}`
      }
    })
  }

  ngOnInit(): void {
  }

}
