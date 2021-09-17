import React, { Component } from 'react';
import './ButtonCustom.sass';

const ButtonCustom = ({ customAction = () => {}, title = 'ButtonCustom' }) => {
  return (
    <div className="ButtonCustom" onClick={() => customAction()}>
      {title}
    </div>
  );
};

export default ButtonCustom;
