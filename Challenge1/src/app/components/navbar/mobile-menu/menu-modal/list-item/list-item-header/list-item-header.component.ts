import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-item-header',
  templateUrl: './list-item-header.component.html',
  styleUrls: ['./list-item-header.component.css']
})
export class ListItemHeaderComponent implements OnInit {

  @Input()
  public header: string = ""

  @Output()
  close = new EventEmitter<boolean>();

  public isClosed: boolean = true;


  openClose(event: any, value: boolean){
    this.isClosed = !value;
    this.close.emit(this.isClosed);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
