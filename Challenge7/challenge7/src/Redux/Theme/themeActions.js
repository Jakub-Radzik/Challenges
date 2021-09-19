import { SET_LIGHT_THEME, SET_DARK_THEME } from './themeTypes';

export const setDarkTheme = () => {
  return {
    type: SET_DARK_THEME,
  };
};

export const toggleLightTheme = () => {
  return {
    type: SET_LIGHT_THEME,
  };
};
