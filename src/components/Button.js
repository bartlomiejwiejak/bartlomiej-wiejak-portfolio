import React from 'react';
import cursorExpand from '../animations/cursorExpand';
import cursorBackToNormal from '../animations/cursorBackToNormal';
import { useLocation } from 'react-router-dom';
import cursorMultiDot from '../animations/cursorMultiDot';

const Button = ({ children, type }) => {

  const location = useLocation();

  let classes = ['button'];

  const selectType = () => {
    switch (type) {
      case 'black':
        classes.push('button--black')
        return;
      case 'white':
        classes.push('button--white');
        return;
      default: return;
    }
  }

  const mouseOver = () => {
    cursorExpand();
    if (location.pathname === '/work') {
      document.removeEventListener('mousedown', cursorMultiDot);
    }
  }
  const mouseOut = () => {
    cursorBackToNormal();
    if (location.pathname === '/work') {
      document.addEventListener('mousedown', cursorMultiDot);
    }
  }

  selectType()

  return (
    <div onMouseOver={mouseOver} onMouseOut={mouseOut} className={classes.join(' ')}>
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
