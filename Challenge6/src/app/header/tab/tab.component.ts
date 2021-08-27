import {Component, Input, OnInit} from '@angular/core';
import {IpGeolocationService} from "../../services/ip-geolocation.service";
import {searchResult} from "../../interfaces/searchResult";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  public data: searchResult | undefined;
  public showLoader: boolean = false;

  constructor() {
    IpGeolocationService.data.subscribe({
      next: (value: searchResult) => {
        this.data = value
        IpGeolocationService.loading.next(false);
      }
    })
    IpGeolocationService.loading.subscribe({
      next: (value: boolean) => this.showLoader = value
    })
  }

  ngOnInit(): void {
  }

}
