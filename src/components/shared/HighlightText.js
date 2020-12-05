import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { cursorExpandBig } from '../../animations/cursor';
import { cursorBackToNormal } from '../../animations/cursor';
import Link from './Link';
import { cursorMultiDot } from '../../animations/cursor'
import isMobile from '../../functions/isMobile'
import { RoutingContext } from '../../context/index';

const HighlightText = ({ children, type, to, arrow }) => {
  const { routingState } = useContext(RoutingContext)

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
        classes.push('highlight-text--black')
        return;
      }
      default: return;
    }
  }
  selectType();
  let content = children;

  if (to) {
    if (arrow) {
      content = <Link to={to}>{children}<i className="fas fa-arrow-right"><i className="fas fa-arrow-right"></i></i></Link>
    } else {
      content = <Link to={to}>{children}</Link>
    }
  }

  const mouseOver = () => {
    if (isMobile() || type === 'dark') return;
    if (location.pathname === '/') {
      document.querySelector(`.home__welcome--shadow span[data-text="${children}"]`).focus()
    }
    cursorExpandBig();
    if (location.pathname === '/work') {
      document.removeEventListener('mousedown', cursorMultiDot);
    }
  }
  const mouseOut = () => {
    if (isMobile() || type === 'dark') return;
    if (location.pathname === '/') {
      document.querySelector(`.home__welcome--shadow span[data-text="${children}"]`).blur()
    }
    cursorBackToNormal();
    if (location.pathname === '/work') {
      document.addEventListener('mousedown', cursorMultiDot);
    }
  }

  return (
    <span className='highlight-text-container'>
      <span style={routingState.animating ? { pointerEvents: 'none' } : {}} data-text={children} tabIndex="-1" onMouseOver={routingState.animating ? null : mouseOver} onMouseOut={routingState.animating ? null : mouseOut} className={classes.join(' ')}>{content}
      </span>
    </span>
  );
}

export default HighlightText;