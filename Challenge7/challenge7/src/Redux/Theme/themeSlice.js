import { createSlice } from '@reduxjs/toolkit';

import {
  THEME_KEY,
  LIGHT_THEME,
  DARK_THEME,
  LIGHT,
  DARK,
  DARK_THEME_ICONS,
  LIGHT_THEME_ICONS,
} from './themeStateItems';

export const themeSlice = createSlice({
  name: THEME_KEY,
  initialState: {
    theme: localStorage.getItem(THEME_KEY) || DARK,
    iconSet:
      localStorage.getItem(THEME_KEY) === DARK
        ? DARK_THEME_ICONS
        : LIGHT_THEME_ICONS,
    nameNext:
      localStorage.getItem(THEME_KEY) === DARK ? LIGHT_THEME : DARK_THEME,
  },
  reducers: {
    setDarkTheme: (state) => {
      state.theme = DARK;
      state.nameNext = LIGHT_THEME;
      state.iconSet = DARK_THEME_ICONS;
      localStorage.setItem(THEME_KEY, DARK);
      document.documentElement.setAttribute('data-theme', DARK);
    },
    setLightTheme: (state) => {
      state.theme = LIGHT;
      state.nameNext = DARK_THEME;
      state.iconSet = LIGHT_THEME_ICONS;
      localStorage.setItem(THEME_KEY, LIGHT);
      document.documentElement.setAttribute('data-theme', LIGHT);
    },
  },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;
export default themeSlice.reducer;
