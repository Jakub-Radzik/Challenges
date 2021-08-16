import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class InputValueService {

  private static myJoin(array: string[], start: number, end: number) {
    if (!start) start = 0;
    if (!end) end = this.length - 1;
    end++;
    return array.slice(start, end);
  };

  private static divideIntoArray(str: string): string[] {
    let resultArray: string[] = [];
    for (let i = 0; i < str.length; i++) {
      resultArray.push(str[i]);
    }

    let charsIndexes: number[] = [0];
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] === "+" || resultArray[i] === "-" || resultArray[i] === "/" || resultArray[i] === "*") {
        charsIndexes.push(i);
      }
    }
    charsIndexes.push(resultArray.length-1)

    // for (let i = 0; i < charsIndexes.length-1; i++) {
    //   resultArray = this.myJoin(resultArray, charsIndexes[i], charsIndexes[i+1])
    // }


    return resultArray;
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
    let arr = this.divideIntoArray(this._input.getValue());
    console.log(arr)
    let currVal: string = this._input.getValue();
    this._input.next(eval(currVal).toString());
  }
}
