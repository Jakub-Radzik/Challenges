import {Component, OnInit} from '@angular/core';
import ValidateIPaddress from "../../utils/ipAddressValidator";
import {IpGeolocationService} from "../../services/ip-geolocation.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {


  public placeholderText = 'Search for any IP address';
  public searchValue = "";
  public isValid: boolean = false;

  constructor(private ipGeoloaction: IpGeolocationService) {
  }

  public onSubmit() {
    if (this.isValid) {
      this.ipGeoloaction.getLocationByIP(this.searchValue);
    }
  }

  public inputChange(value: string) {
    this.searchValue = value;
    this.isValid = ValidateIPaddress(this.searchValue);
  }

  ngOnInit(): void {
  }

}
