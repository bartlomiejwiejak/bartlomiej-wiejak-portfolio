import React from 'react';
import cursorExpandBig from '../animations/cursorExpandBig';
import cursorBackToNormal from '../animations/cursorBackToNormal';
import Link from './Link';

const HighlightText = ({ children, type, to }) => {
  let classes = ['highlight-text']
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
  return (
    <span>
      <span data-text={children} onMouseOver={cursorExpandBig} onMouseOut={cursorBackToNormal} className={classes.join(' ')}>{content}</span>
    </span>
  );
}

export default HighlightText;
