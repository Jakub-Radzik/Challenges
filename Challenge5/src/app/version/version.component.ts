import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

  //version in package json
  public version: string = "1.1.1";

  constructor() {
  }

  ngOnInit(): void {
  }

}
