import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './header/search/search.component';
import { TabComponent } from './header/tab/tab.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MediaLinkComponent } from './other/media-link/media-link.component';
import { LoaderComponent } from './other/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    SearchComponent,
    TabComponent,
    MediaLinkComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
