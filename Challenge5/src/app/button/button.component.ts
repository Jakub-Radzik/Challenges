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

  constructor(private inputValueService: InputValueService) {
  }

  public onButtonClick() {
    if(this.symbol?.toLocaleLowerCase()==="x"){
      this.inputValueService.insertToInput('*');
    }else if(this.symbol?.toLocaleLowerCase()==="del"){
      this.inputValueService.removeLastChar();
    }else if(this.symbol?.toLocaleLowerCase()==="reset"){
      this.inputValueService.deleteInput();
    }else if(this.symbol?.toLocaleLowerCase()==="="){
    }else{
      this.inputValueService.insertToInput(this.symbol);
    }
    console.log(this.inputValueService.input);
  }

  ngOnInit(): void {
  }

}
