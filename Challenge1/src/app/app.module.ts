import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import {AngularResizedEventModule} from "angular-resize-event";
import { PhonesComponent } from './components/phones/phones.component';
import { EditorComponent } from './components/editor/editor.component';
import { MobileMenuComponent } from './components/navbar/mobile-menu/mobile-menu.component';
import { DesktopMenuComponent } from './components/navbar/desktop-menu/desktop-menu.component';
import { WhiteButtonComponent } from './components/buttons/white-button/white-button.component';
import { RedButtonComponent } from './components/buttons/red-button/red-button.component';
import { MenuModalComponent } from './components/navbar/mobile-menu/menu-modal/menu-modal.component';
import { WhiteBlackButtonComponent } from './components/buttons/white-black-button/white-black-button.component';
import { GradientButtonComponent } from './components/buttons/gradient-button/gradient-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LaptopComponent,
    PhonesComponent,
    EditorComponent,
    MobileMenuComponent,
    DesktopMenuComponent,
    WhiteButtonComponent,
    RedButtonComponent,
    MenuModalComponent,
    WhiteBlackButtonComponent,
    GradientButtonComponent
  ],
  imports: [
    BrowserModule,
    AngularResizedEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
