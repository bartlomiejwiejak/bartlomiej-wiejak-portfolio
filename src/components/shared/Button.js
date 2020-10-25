import React, { useContext, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

import { cursorExpand } from '../../animations/cursor';
import { cursorBackToNormal } from '../../animations/cursor';
import { cursorMultiDot } from '../../animations/cursor';
import isMobile from '../../functions/isMobile';
import { RoutingContext } from '../../context/index';

const Button = ({ children, type, href, arrow }) => {

  const location = useLocation();
  const { routingState } = useContext(RoutingContext)
  const fillLeftRef = useRef(null);
  const fillRightRef = useRef(null);

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
      case 'brown':
        classes.push('button--brown');
        return;
      default: return;
    }
  }

  const mouseEnterHandle = useCallback(() => {
    if (isMobile() || type === 'inactive') return;
    cursorExpand();
    gsap.set([fillLeftRef.current, fillRightRef.current], { x: '-100%' })
    gsap.to([fillLeftRef.current, fillRightRef.current], .5, { x: 0 })
    if (location.pathname === '/work') {
      document.removeEventListener('mousedown', cursorMultiDot);
    }
  }, [location.pathname, type])
  const mouseOutHandle = useCallback(() => {
    if (isMobile() || type === 'inactive') return;
    cursorBackToNormal();
    gsap.set([fillLeftRef.current, fillRightRef.current], { x: 0 })
    gsap.to([fillLeftRef.current, fillRightRef.current], .5, { x: '100%', ease: 'power2.out' })
    if (location.pathname === '/work') {
      document.addEventListener('mousedown', cursorMultiDot);
    }
  }, [type, location.pathname])

  selectType()

  const content = <div style={arrow ? { paddingRight: '2.5rem' } : {}} onMouseEnter={routingState.animating ? null : mouseEnterHandle} onMouseOut={routingState.animating ? null : mouseOutHandle} onClick={mouseOutHandle} className={classes.join(' ')}>
    <div className="button__content">
      {children}
      <div className="button__underline">
        <div className="button__underline--left">
          <div ref={fillLeftRef} className="button__underline--fill"></div>
        </div>
        <div className="button__underline--right">
          <div ref={fillRightRef} className="button__underline--fill"></div>
        </div>
      </div>
    </div>
    {arrow && <i className="fas fa-arrow-right"></i>}
  </div>

  if (href) return <a draggable={false} href={href} target='blank'>{content}</a>

  return content;
}

export default Button;