import React from 'react';

export const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export const useSemiPersistentSessionState = (key, initialState) => {
  const [value, setValue] = React.useState(
    sessionStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    sessionStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export const useSemiPersistentStateTheme = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
    document.documentElement.setAttribute(
      'data-theme',
      value === 'light' ? 'dark' : 'light'
    );
  }, [value, key]);

  return [value, setValue];
};
