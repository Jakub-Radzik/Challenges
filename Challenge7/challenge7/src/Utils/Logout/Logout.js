import React, { Component } from 'react';
import './Logout.sass';

const Logout = ({ customAction }) => {
  return (
    <div className="Logout" onClick={() => customAction()}>
      Logout
    </div>
  );
};

export default Logout;
