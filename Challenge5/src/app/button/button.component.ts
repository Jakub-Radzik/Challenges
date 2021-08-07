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
    InputValueService._input.subscribe({
      next: (value: any) => console.log(value)
    })
  }

  public onButtonClick() {
    if(this.symbol?.toLocaleLowerCase()==="x"){
      InputValueService.insertToInput('*');
    }else if(this.symbol?.toLocaleLowerCase()==="del"){
      InputValueService.removeLastChar();
    }else if(this.symbol?.toLocaleLowerCase()==="reset"){
      InputValueService.deleteInput();
    }else if(this.symbol?.toLocaleLowerCase()==="="){
      InputValueService.calculate();
    }else{
      InputValueService.insertToInput(this.symbol);
    }
  }

  ngOnInit(): void {
  }

}
