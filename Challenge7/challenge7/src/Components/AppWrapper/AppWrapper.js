import React, { Component } from 'react';
import './AppWrapper.sass';
import Background from '../Background/Background';

const AppWrapper = ({ children }) => {
  return (
    <>
      <div className="AppWrapper">{children}</div>
      <Background />
    </>
  );
};

export default AppWrapper;
