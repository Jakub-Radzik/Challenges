import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import {AngularResizedEventModule} from "angular-resize-event";
import { PhonesComponent } from './components/phones/phones.component';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LaptopComponent,
    PhonesComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AngularResizedEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
