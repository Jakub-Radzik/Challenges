import {Component, Input, OnInit} from '@angular/core';
import {ThemeEngineService} from "../../../services/theme-engine.service";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  @Input()
  public position: string = "";

  @Input()
  public background: string = "";

  constructor() {
  }

  public changeTheme() {
    ThemeEngineService.getNextThemeSet();
  }

  ngOnInit(): void {
  }

}
