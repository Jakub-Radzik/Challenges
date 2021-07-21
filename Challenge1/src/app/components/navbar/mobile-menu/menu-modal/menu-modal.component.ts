import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.css']
})
export class MenuModalComponent implements OnInit {

  public login: "Login" = "Login";
  public signUp: "Sign Up" = "Sign Up";
  //TODO: REMOVE DUPLICATES
  public listStructure = new Map<string, any>();

  constructor() {
    this.listStructure.set("Product", {
      header: "Product",
      items: ["About Blogr", "Buy Solution", "Invest"]
    });

    this.listStructure.set("Company", {
      "header": "Company",
      "items": ["History", "About Us"]
    });

    this.listStructure.set("Connect", {
      "header": "Connect",
      "items": ["Contact", "Newsletter", "LinkedIn"]
    });
  }

  ngOnInit(): void {
  }
}
