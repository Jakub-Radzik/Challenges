import {Component, OnChanges} from '@angular/core';
import {ThemeEngineService} from "./services/theme-engine.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Challenge5';


  constructor() {
    ThemeEngineService.currentSet.subscribe({
      next: (value: any) => console.log(value)
    })
  }


}
