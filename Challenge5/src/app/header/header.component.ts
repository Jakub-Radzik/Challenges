import {Component, OnInit} from '@angular/core';
import {ThemeEngineService} from "../services/theme-engine.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public togglerPosition: number = 1;
  public fontColor: string = "font-color-1"

  constructor() {
    ThemeEngineService.togglerPosition.subscribe({
      next: (value: any) => {
        this.togglerPosition = value
        this.fontColor = `font-color-${value}`
      }
    })
  }

  ngOnInit(): void {
  }

}
