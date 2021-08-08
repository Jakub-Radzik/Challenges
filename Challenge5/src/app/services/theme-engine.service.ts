import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ThemeSet} from "../interfaces/ThemeSet";

@Injectable({
  providedIn: 'root'
})
export class ThemeEngineService {

  public static set1:ThemeSet = {
    togglerPosition: 1,
    background: {
      main: 'hsl(222, 26%, 31%)',
      toggle: 'hsl(223, 31%, 20%)',
      keypad: 'hsl(223, 31%, 20%)',
      screen: 'hsl(224, 36%, 15%)'
    },
    keys: {
      basic: {
        background: 'hsl(30, 25%, 89%)',
        shadow: 'hsl(28, 16%, 65%)'
      },
      strongAccent: {
        background: 'hsl(6, 63%, 50%)',
        shadow: 'hsl(6, 70%, 34%)'
      },
      lightAccent: {
        background: 'hsl(225, 21%, 49%)',
        shadow: 'hsl(224, 28%, 35%)'
      },
      toggler: {
        color: 'hsl(6, 63%, 50%)'
      },
    },
    text: {
      color1: 'hsl(221, 14%, 31%)',
      color2: '',
      text: 'hsl(0,0%,100%)'
    }
  };
  public static set2:ThemeSet = {
    togglerPosition: 2,
    background: {
      main: 'hsl(0, 0%, 90%)',
      toggle: 'hsl(0, 5%, 81%)',
      keypad: 'hsl(0, 5%, 81%)',
      screen: 'hsl(0, 0%, 93%)'
    },
    keys: {
      basic: {
        background: 'hsl(45, 7%, 89%)',
        shadow: 'hsl(35, 11%, 61%)'
      },
      strongAccent: {
        background: 'hsl(25, 98%, 40%)',
        shadow: 'hsl(25, 99%, 27%)'
      },
      lightAccent: {
        background: 'hsl(185, 42%, 37%)',
        shadow: 'hsl(185, 58%, 25%)'
      },
      toggler: {
        color: 'hsl(25, 98%, 40%)'
      },
    },
    text: {
      color1: 'hsl(60, 10%, 19%)',
      color2: '',
      text: 'hsl(0, 0%, 100%)'
    }
  }
  public static set3:ThemeSet = {
    togglerPosition: 3,
    background: {
      main: 'hsl(268, 75%, 9%)',
      toggle: 'hsl(268, 71%, 12%)',
      keypad: 'hsl(268, 71%, 12%)',
      screen: 'hsl(268, 71%, 12%)'
    },
    keys: {
      basic: {
        background: 'hsl(268, 47%, 21%)',
        shadow: 'hsl(290, 70%, 36%)'
      },
      strongAccent: {
        background: 'hsl(176, 100%, 44%)',
        shadow: 'hsl(177, 92%, 70%)'
      },
      lightAccent: {
        background: 'hsl(281, 89%, 26%)',
        shadow: 'hsl(285, 91%, 52%)'
      },
      toggler: {
        color: 'hsl(176, 100%, 44%)'
      },
    },
    text: {
      color1: 'hsl(52, 100%, 62%)',
      color2: 'hsl(198, 20%, 13%)',
      text: 'hsl(0,0%,100%)'
    }
  };

  public static sets: ThemeSet[] = [ThemeEngineService.set1, ThemeEngineService.set2, ThemeEngineService.set3]
  //TODO: save current theme in LocalStorage and load after refresh

  private static incrementer = 1;

  public static currentSet:BehaviorSubject<ThemeSet> = new BehaviorSubject<ThemeSet>(ThemeEngineService.set1);

  public static getNextThemeSet(){
    this.currentSet.next(ThemeEngineService.sets[ThemeEngineService.incrementer++ % 3])
  }

  constructor() {
  }
}
