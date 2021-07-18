import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', './footer.component.mobile.css']
})
export class FooterComponent implements OnInit {

  @Input()
  responsive = ""

  public linkStruct = [
    {
      "title": "Product",
      "links": ["Overview", "Pricing", "Marketplace", "Features", "Integrations"]
    },
    {
      "title": "Company",
      "links": ["About", "Team", "Blog", "Careers"]
    },
    {
      "title": "Connect",
      "links": ["Contact", "Newsletter", "Linkedin"]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
