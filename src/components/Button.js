import React from 'react';
import cursorExpand from '../utilities/cursorExpand';
import cursorBackToNormalFromExpand from '../utilities/cursorBackToNormalFromExpand';

const Button = ({ children }) => {

  return (
    <div onMouseOver={cursorExpand} onMouseOut={cursorBackToNormalFromExpand} className='button'>
      <div className="button__content">{children}</div>
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
