import React from 'react';
import { useLocation } from 'react-router-dom';

import cursorExpandBig from '../../animations/cursorExpandBig';
import cursorBackToNormal from '../../animations/cursorBackToNormal';
import Link from './Link';
import cursorMultiDot from '../../animations/cursorMultiDot'

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
      default: return;
    }
  }
  selectType();
  let content = children;

  if (to) {
    content = <Link to={to}>{children}</Link>
  }

  const mouseOver = () => {
    cursorExpandBig();
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

  return (
    <span>
      <span data-text={children} onMouseOver={mouseOver} onMouseOut={mouseOut} className={classes.join(' ')}>{content}</span>
    </span>
  );
}

export default HighlightText;
