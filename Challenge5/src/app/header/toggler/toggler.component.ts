import { Component, OnInit } from '@angular/core';
import {ThemeEngineService} from "../../services/theme-engine.service";

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent implements OnInit {

  constructor() { }

  public changeTheme() {
    ThemeEngineService.getNextThemeSet();
  }

  ngOnInit(): void {
  }

}
