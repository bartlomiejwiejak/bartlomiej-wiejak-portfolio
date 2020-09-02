import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { cursorExpand } from '../../animations/cursor';
import { cursorBackToNormal } from '../../animations/cursor';
import { cursorMultiDot } from '../../animations/cursor';
import isMobile from '../../functions/isMobile';
import { RoutingContext } from '../../context/index';

const Button = ({ children, type, href, inactive }) => {

  const location = useLocation();
  const { animating } = useContext(RoutingContext)

  let classes = ['button'];

  const selectType = () => {
    switch (type) {
      case 'black':
        classes.push('button--black')
        return;
      case 'white':
        classes.push('button--white');
        return;
      case 'inactive':
        classes.push('button--inactive');
        return;
      default: return;
    }
  }

  const mouseOver = () => {
    if (isMobile() || type === 'inactive') return;
    cursorExpand();
    if (location.pathname === '/work') {
      document.removeEventListener('mousedown', cursorMultiDot);
    }
  }
  const mouseOut = () => {
    if (isMobile() || type === 'inactive') return;
    cursorBackToNormal();
    if (location.pathname === '/work') {
      document.addEventListener('mousedown', cursorMultiDot);
    }
  }

  selectType()

  const content = <div onMouseOver={animating ? null : mouseOver} onMouseOut={animating ? null : mouseOut} className={classes.join(' ')}>
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

  if (href) return <a draggable={false} href={href} target='blank'>{content}</a>

  return content;
}

export default Button;
