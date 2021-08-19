import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeEngineService {


  //TODO: save current theme in LocalStorage and load after refresh

  private static incrementer = 1;

  public static togglerPosition:BehaviorSubject<number> = new BehaviorSubject<number>(1);

  public static getNextThemeSet(){
    if(this.incrementer===3){
      this.incrementer = 1
    }else{
      this.incrementer++;
    }
    console.log(this.incrementer)
    this.togglerPosition.next(this.incrementer);
  }

  constructor() {
  }
}
