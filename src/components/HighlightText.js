import React from 'react';
import cursorExpandBig from '../functions/cursorExpandBig';
import cursorBackToNormalFromExpand from '../functions/cursorBackToNormalFromExpand';

const HighlightText = ({ children }) => {
  return (
    <span onMouseOver={cursorExpandBig} onMouseOut={cursorBackToNormalFromExpand}>
      <span data-text={children} className='highlight-text'>{children}</span>
    </span>
  );
}

export default HighlightText;
