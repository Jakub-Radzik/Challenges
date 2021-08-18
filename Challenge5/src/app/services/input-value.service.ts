import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Calc} from 'calc-js';

@Injectable({
  providedIn: 'root',
})
export class InputValueService {

  public static chars: string[] = ["+", "-", "*", "/"];

  private static divideIntoArray(str: string): string[] {
    let part: string = "";
    let resultArray: string[] = [];
    for (let i = 0; i < str.length; i++) {
      if (this.chars.includes(str[i])) {
        resultArray.push(part)
        resultArray.push(str[i])
        part = "";
      } else {
        part += str[i];
      }
    }
    resultArray.push(part);
    return resultArray;
  }

  private static calcJSvalue(resultArray: string[]): number{
    let result: Calc = new Calc(2137);
    for (let i = 0; i < resultArray.length; i++) {
      if (i === 0) {
        result = new Calc(parseFloat(resultArray[i]))
      } else {
        switch (resultArray[i]) {
          case "+":
            result?.sum(parseFloat(resultArray[i + 1]));
            break;
          case "-":
            result?.minus(parseFloat(resultArray[i + 1]));
            break;
          case "*":
            result?.multiply(parseFloat(resultArray[i + 1]));
            break;
          case "/":
            result?.divide(parseFloat(resultArray[i + 1]));
            break;
          default:
        }
        i++;
      }
    }
    return result?.finish();
  }

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
    let result = this.calcJSvalue(this.divideIntoArray(this._input.getValue()));
    this._input.next(result.toString());
  }
}
