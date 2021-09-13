import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import './AuthLoader.sass';

const AuthLoader = () => {
  return (
    <div className="AuthLoader">
      <Loader />
    </div>
  );
};

export default AuthLoader;
