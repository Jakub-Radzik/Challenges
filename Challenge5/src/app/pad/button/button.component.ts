import {Component, Input, OnInit} from '@angular/core';
import {InputValueService} from "../../services/input-value.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers: [InputValueService]
})
export class ButtonComponent implements OnInit {

  public isDisabled: boolean = false;

  public operator: string[] = ["+", "-", "*", "/", "X"];
  public operatorAndDot: string[] = ["+", "-", "*", "/", ".", "X"];

  public lastChar = (str: string): string => {
    return str.charAt(str.length - 1);
  }

  @Input()
  public symbol: string = "";
  @Input()
  public btnClass: string = "";

  constructor() {
    InputValueService._input.subscribe({
      next: (value: any) => {

        if (this.symbol === "." && this.lastChar(value) === ".") {
          this.isDisabled = true;
        } else {
          this.isDisabled = false;


          if(this.operator.includes(this.lastChar(value)) && this.operatorAndDot.includes(this.symbol)){
            this.isDisabled = true;
          }else{
            this.isDisabled = false;
          }


        }



      }
    })
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
