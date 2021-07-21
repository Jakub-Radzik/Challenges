import {Component, Input, OnInit} from '@angular/core';
import {MobileMenuListItemInterface} from "../../../../../MobileMenuListItemInterface";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  public isClosed: boolean = true;

  changeOpenCloseState(newState: boolean){
    this.isClosed=newState;
  }

  @Input()
  public listElement: MobileMenuListItemInterface = {
    header: "",
    items: [""]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
