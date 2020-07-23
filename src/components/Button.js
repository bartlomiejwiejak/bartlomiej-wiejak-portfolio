import React from 'react';
import cursorExpand from '../functions/cursorExpand';
import cursorBackToNormalFromExpand from '../functions/cursorBackToNormalFromExpand';

const Button = ({ children }) => {

  return (
    <div className='button'>
      <div onMouseOver={cursorExpand} onMouseOut={cursorBackToNormalFromExpand} className="button__content">{children}</div>
      <div className="button__underline">
        <div className="button__underline--left">
          <div className="button__underline--fill"></div>
        </div>
        <div className="button__underline--right">
          <div className="button__underline--fill"></div>
        </div>
      </div>
    </div>
  );
}

export default Button;
