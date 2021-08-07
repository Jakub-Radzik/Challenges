import {Component, Input, OnInit} from '@angular/core';
import {InputValueService} from "../services/input-value.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers: [InputValueService]
})
export class ButtonComponent implements OnInit {

  @Input()
  public symbol: string = "";

  constructor() {
  }

  public onButtonClick() {
    switch (this.symbol?.toLocaleLowerCase()) {
      case "x":
        InputValueService.insertToInput('*');
        break;
      case "del":
        InputValueService.removeLastChar();
        break;
      case "reset":
        InputValueService.deleteInput();
        break;
      case "=":
        InputValueService.calculate();
        break;
      default:
        InputValueService.insertToInput(this.symbol);
    }
  }

  ngOnInit(): void {
  }

}
