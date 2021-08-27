import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import ValidateIPaddress from "../../utils/ipAddressValidator";
import {IpGeolocationService} from "../../services/ip-geolocation.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements AfterViewInit {

  public placeholderText = 'Search for any IP address';
  public searchValue = "";
  public isValid: boolean = false;
  @ViewChild('input') el: ElementRef | undefined;

  constructor(private ipGeolocationService: IpGeolocationService) {
  }

  ngAfterViewInit(): void {
    if (this.el) {
      this.el.nativeElement.focus();
    }
  }


  public onSubmit() {
    if (this.isValid) {
      this.ipGeolocationService.getLocationByIP(this.searchValue);
    }
  }

  public inputChange(value: string) {
    this.searchValue = value;
    this.isValid = ValidateIPaddress(this.searchValue);
  }

}
