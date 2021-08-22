import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Calc} from 'calc-js';

@Injectable({
  providedIn: 'root',
})
export class InputValueService {

  public static operators: string[] = ["+", "-", "*", "/"];

  //state booleans
  public static shouldMoveNumberToValue = true;

  private static isOperator(value: string) {
    return this.operators.includes(value);
  }

  private static divideIntoArray(str: string): string[] {
    let part: string = "";
    let resultArray: string[] = [];
    for (let i = 0; i < str.length; i++) {
      if (this.isOperator(str[i])) {
        resultArray.push(part)
        resultArray.push(str[i])
        part = "";
      } else {
        part += str[i];
      }
    }
    resultArray.push(part);
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] === "-") {
        resultArray[i] = "+";
        resultArray[i + 1] = "-".concat(resultArray[i + 1]);
      }
    }
    return resultArray;
  }

  private static calcJSvalue(resultArray: string[]): number {

    const localConfig = {
      throwNaN: true,
      throwInfinite: true,
      throwUnsafeNumber: false
    }

    let result: Calc = new Calc(2137); // ;)

    for (let i = 0; i < resultArray.length; i++) {
      if (i === 0) {
        result = new Calc(parseFloat(resultArray[i]), localConfig)
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

    try {
      return result?.finish();
    } catch (e) {
      return 0;
      // TODO: weź coś z tym kurwa zrób
      //Infinity and NaN
    }
  }

  public static _input = new BehaviorSubject<string>('');
  public static _currentNumber = new BehaviorSubject<string>('0')
  public static _dotCount = new BehaviorSubject(0);

  public static insertToInput(value: string): void {
    if (this.isOperator(value) && this.shouldMoveNumberToValue) { //is operator and number was not moved to 2nd display
      if (this._input.getValue().charAt(this._input.getValue().length - 1) === "=") {
        this._input.next(this._currentNumber.getValue().concat(value));
      } else {
        this._input.next(this._input.getValue().concat(this._currentNumber.getValue().concat(value)));
      }
      this.shouldMoveNumberToValue = false;
    } else if (this.isOperator(value) && !this.shouldMoveNumberToValue) { //is operator and we moved number
      //changing operator in input
      let inputValue = this._input.getValue();
      this._input.next(inputValue.substring(0, inputValue.length - 1).concat(value));
    } else if (!this.isOperator(value) && !this.shouldMoveNumberToValue) { //we creating new number after move
      this.shouldMoveNumberToValue = true
      if (value === ".") {
        this._currentNumber.next("0.");
        this._dotCount.next(1);
      } else {
        this._currentNumber.next(value);
      }
    } else {
      if (this._currentNumber.getValue() === "0" && value != ".") {
        this._currentNumber.next("".concat(value));
      } else if (this._input.getValue().charAt(this._input.getValue().length - 1) === "=") {
        this._input.next("");
        this._currentNumber.next(value);
      } else {
        if (value === "." && this._dotCount.getValue() === 1) {
        } else if (value === "." && this._dotCount.getValue() === 0) {
          this._dotCount.next(1);
          this._currentNumber.next(this._currentNumber.getValue().concat(value));
        } else {
          this._currentNumber.next(this._currentNumber.getValue().concat(value));
        }
      }
    }
  }

  public static deleteInput(): void {
    this._input.next('');
    this._currentNumber.next('0');
  }

  public static removeLastChar(): void {
    let currVal: string = this._currentNumber.getValue();
    if (currVal.length === 1) {
      this._currentNumber.next('0');
    } else {

      if (currVal.charAt(currVal.length - 1) === ".") {
        this._dotCount.next(0);
      }

      let valToSet: string = String(currVal.substr(0, currVal.length - 1))
      this._currentNumber.next(valToSet)
    }
  }

  public static calculate(): void {
    let inputVal = this._input.getValue();
    let result;

    if (inputVal.charAt(inputVal.length - 1) === "=") {
      let lastOperation: string = "";
      //find last operator
      for (let i = inputVal.length - 1; i >= 0; i--) {
        if (this.isOperator(inputVal[i])) {
          lastOperation = inputVal.substring(i, inputVal.length)
          break;
        }
      }
      console.log(`lastOperation ${lastOperation}`)
      let newOperation = this._currentNumber.getValue().concat(lastOperation);

      if (newOperation.charAt(0) === "-") {
        newOperation = "0".concat(newOperation);
        this._input.next(newOperation.substr(1));
      } else {
        this._input.next(newOperation);
      }
      result = this.calcJSvalue(this.divideIntoArray(newOperation));
      this._currentNumber.next(result.toString());

    } else {
      let toCalculate = this._input.getValue().concat(this._currentNumber.getValue())
      result = this.calcJSvalue(this.divideIntoArray(toCalculate));
      this._input.next(toCalculate.concat("="));
    }
    console.log(result)
    this._currentNumber.next(result.toString());


  }
}
