import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class InputValueService {

  public static _input = new BehaviorSubject<string>('');

  public static insertToInput(value: string): void {
    this._input.next(this._input.getValue().concat(value));
  }

  public static deleteInput(): void {
    this._input.next('');
  }

  public static removeLastChar(): void {
    let currVal: string = this._input.getValue();
    let valToSet: string = String(currVal.substr(0, currVal.length - 1))
    this._input.next(valToSet)
  }

  public static calculate(): void {
    let currVal: string = this._input.getValue();
    this._input.next(eval(currVal).toString());
  }
}
