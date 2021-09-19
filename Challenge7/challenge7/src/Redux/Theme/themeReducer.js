import { SET_LIGHT_THEME, SET_DARK_THEME } from './themeTypes';

const initialState = {
  theme: localStorage.getItem('theme') || 'dark',
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return { theme: 'dark' };
    case SET_DARK_THEME:
      return { theme: 'light' };
    default:
      return state;
  }
};
