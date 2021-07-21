import { Component, OnInit } from '@angular/core';
import {ListItemComponent} from "../../mobile-menu/menu-modal/list-item/list-item.component";

@Component({
  selector: 'app-menu-item-desktop',
  templateUrl: './menu-item-desktop.component.html',
  styleUrls: ['./menu-item-desktop.component.css']
})
export class MenuItemDesktopComponent extends ListItemComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
