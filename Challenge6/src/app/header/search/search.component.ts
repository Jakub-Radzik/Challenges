import {Component, OnInit} from '@angular/core';
import ValidateIPaddress from "../../utils/ipAddressValidator";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public placeholderText = 'Search for any IP address or domain';
  public searchValue = "";
  public isValid: boolean = false;

  constructor() {
  }

  public inputChange(value: string) {
    console.log(value)
    this.isValid = ValidateIPaddress(this.searchValue);
    console.log(ValidateIPaddress(this.searchValue))
  }
  //TODO: repair validation

  ngOnInit(): void {
  }

}
