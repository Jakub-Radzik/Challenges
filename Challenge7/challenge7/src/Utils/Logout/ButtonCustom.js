import React, { Component } from 'react';
import './Logout.sass';

const ButtonCustom = ({ customAction = () => {}, title = 'Logout' }) => {
  return (
    <div className="Logout" onClick={() => customAction()}>
      {title}
    </div>
  );
};

export default ButtonCustom;
