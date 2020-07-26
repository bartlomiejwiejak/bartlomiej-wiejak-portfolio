import React from 'react';
import cursorExpand from '../animations/cursorExpand';
import cursorBackToNormal from '../animations/cursorBackToNormal';

const Button = ({ children, type }) => {

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

  selectType()

  return (
    <div onMouseOver={cursorExpand} onMouseOut={cursorBackToNormal} className={classes.join(' ')}>
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
