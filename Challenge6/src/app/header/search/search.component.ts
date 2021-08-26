import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import ValidateIPaddress from "../../utils/ipAddressValidator";
import {IpGeolocationService} from "../../services/ip-geolocation.service";
import {searchResult} from "../../interfaces/searchResult";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {


  public placeholderText = 'Search for any IP address or domain';
  public searchValue = "";
  public isValid: boolean = true; //todo: should be false

  constructor(private ipGeoloaction: IpGeolocationService) {
  }

  @Output() ipInformation = new EventEmitter<searchResult>();

  public onSubmit() {
    if (this.isValid) {
      this.ipGeoloaction.getLocationByIP(this.searchValue).subscribe(data => {
        this.ipInformation.emit(data);
      })
    }
  }

  public inputChange(value: string) {
    this.searchValue = value;
    console.log(value)
    // this.isValid = ValidateIPaddress(this.searchValue);
    // console.log(ValidateIPaddress(this.searchValue))
  }

  //TODO: repair validation

  ngOnInit(): void {
  }

}
