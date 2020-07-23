import React from 'react';
import cursorExpandBig from '../animations/cursorExpandBig';
import cursorBackToNormal from '../animations/cursorBackToNormal';

const HighlightText = ({ children }) => {
  return (
    <span>
      <span data-text={children} onMouseOver={cursorExpandBig} onMouseOut={cursorBackToNormal} className='highlight-text'>{children}</span>
    </span>
  );
}

export default HighlightText;
