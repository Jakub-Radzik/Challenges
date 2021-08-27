import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-media-link',
  templateUrl: './media-link.component.html',
  styleUrls: ['./media-link.component.css']
})
export class MediaLinkComponent implements OnInit {

  @Input() link: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
