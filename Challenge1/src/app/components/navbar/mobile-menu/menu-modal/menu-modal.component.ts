import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.css']
})
export class MenuModalComponent implements OnInit {

  public login: "Login" = "Login";
  public signUp: "Sign Up" = "Sign Up";

  constructor() { }

  ngOnInit(): void {
  }
}
