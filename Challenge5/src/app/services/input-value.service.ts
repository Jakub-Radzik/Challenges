import { Injectable } from '@angular/core';

@Injectable()
export class InputValueService {

  get input(): string | undefined {
    return this._input;
  }

  private _input: string | undefined;

  public insertToInput(value: string){
    console.log(value);
  }

  public deleteInput(){
    this._input="";
  }

  public removeLastChar(){
    this._input = this._input?.substr(0, this._input?.length-1)
  }

  public calculate(){
    if (typeof this._input === "string") {
      this._input = eval(this._input);
    }
  }

  constructor() { }
}
