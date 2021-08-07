export interface ThemeSet {
  togglerPosition: number,
  background: {
    main: string,
    toggle: string,
    keypad: string,
    screen: string
  },
  keys: {
    basic: {
      background: string,
      shadow: string
    },
    strongAccent: {
      background: string,
      shadow: string
    },
    lightAccent: {
      background: string,
      shadow: string
    },
    toggler: {
      color: string
    },
  },
  text: {
    color1: string,
    color2: string,
    text: string
  }
}
