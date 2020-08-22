import React from 'react';
import { useLocation } from 'react-router-dom';

import { cursorExpandBig } from '../../animations/cursor';
import { cursorBackToNormal } from '../../animations/cursor';
import Link from './Link';
import { cursorMultiDot } from '../../animations/cursor'
import isMobile from '../../functions/isMobile'

const HighlightText = ({ children, type, to }) => {
  let classes = ['highlight-text']
  const location = useLocation()
  let selectType = () => {
    switch (type) {
      case 'white':
        classes.push('highlight-text--white')
        return;
      case 'black': {
        classes.push('highlight-text--black')
        return;
      }
      case 'dark': {
        classes.push('highlight-text--dark')
        return;
      }
      default: return;
    }
  }
  selectType();
  let content = children;

  if (to) {
    content = <Link to={to}>{children}</Link>
  }

  const mouseOver = () => {
    if (isMobile()) return;
    if (location.pathname === '/') {
      document.querySelector(`.home__welcome--shadow span[data-text="${children}"]`).focus()
    }
    cursorExpandBig();
    if (location.pathname === '/work') {
      document.removeEventListener('mousedown', cursorMultiDot);
    }
  }
  const mouseOut = () => {
    if (isMobile()) return;
    if (location.pathname === '/') {
      document.querySelector(`.home__welcome--shadow span[data-text="${children}"]`).blur()
    }
    cursorBackToNormal();
    if (location.pathname === '/work') {
      document.addEventListener('mousedown', cursorMultiDot);
    }
  }

  return (
    <span>
      <span data-text={children} tabIndex="-1" onMouseOver={mouseOver} onMouseOut={mouseOut} className={classes.join(' ')}>{content}</span>
    </span>
  );
}

export default HighlightText;