import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.css']
})
export class DesktopMenuComponent implements OnInit {

  public login: "Login" = "Login";
  public signUp: "Sign Up" = "Sign Up";

  constructor() { }

  ngOnInit(): void {
  }

}
