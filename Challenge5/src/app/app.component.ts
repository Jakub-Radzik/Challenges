import {Component, OnInit} from '@angular/core';
import {ThemeEngineService} from "./services/theme-engine.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Challenge5';
  public background: string = "background-app-1";

  constructor() {
    ThemeEngineService.togglerPosition.subscribe({
      next: (value: any) => this.background = `background-app-${value}`,
    })
  }

  ngOnInit(): void {
  }


}
