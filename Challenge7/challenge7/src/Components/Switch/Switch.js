import React from 'react';

const Switch = ({ clickHandler, children }) => {
  return (
    <div className="Switch" onClick={clickHandler}>
      {children}
    </div>
  );
};

export default Switch;
