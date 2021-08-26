import { Component, OnInit } from '@angular/core';
import {searchResult} from "../interfaces/searchResult";
import {IpGeolocationService} from "../services/ip-geolocation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public data: searchResult | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  setData(data: searchResult){
    this.data = data;
  }


}
