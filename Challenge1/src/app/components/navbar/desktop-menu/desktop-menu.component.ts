import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.css']
})
export class DesktopMenuComponent implements OnInit {

  public login: "Login" = "Login";
  public signUp: "Sign Up" = "Sign Up";

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
