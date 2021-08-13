import {Component, OnInit} from '@angular/core';
import {ThemeEngineService} from "../../../services/theme-engine.service";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  public changeTheme() {
    ThemeEngineService.getNextThemeSet();
  }

  ngOnInit(): void {
  }

}
