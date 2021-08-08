import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './pad/button/button.component';
import { PadComponent } from './pad/pad.component';
import { DisplayComponent } from './display/display.component';
import { HeaderComponent } from './header/header.component';
import {InputValueService} from "./services/input-value.service";
import {ThemeEngineService} from "./services/theme-engine.service";
import { TogglerComponent } from './header/toggler/toggler.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PadComponent,
    DisplayComponent,
    HeaderComponent,
    TogglerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InputValueService, ThemeEngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
