import {Component, Input, OnInit} from '@angular/core';
import {IpGeolocationService} from "../../services/ip-geolocation.service";
import {searchResult} from "../../interfaces/searchResult";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() data: searchResult | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
