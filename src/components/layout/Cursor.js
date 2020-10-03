import React, { useEffect } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  useEffect(() => {
    const moveCursor = (e) => {
      gsap.set('.cursor__dot-container', { y: `${e.clientY - 3}px`, x: `${e.clientX - 3}px` })
      gsap.to('.cursor__circle', .6, { x: `${e.clientX - 32.5}px`, y: `${e.clientY - 32.5}px`, ease: 'power2.out' })
    }

    const cursorMouseDown = () => {
      gsap.to('.cursor__circle', .25, { scale: 0.5 })
    }
    const cursorMouseUp = () => {
      gsap.to('.cursor__circle', .25, { scale: 1 })
      gsap.to('.cursor__dot', .25, { y: 0 })
      gsap.to('.cursor__dot--inner', .25, { y: 0 })
    }

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', cursorMouseDown);
    document.addEventListener('mouseup', cursorMouseUp);
  }, [])
  return (
    <div className='cursor'>
      <div className="cursor__circle"></div>
      <div className="cursor__dot-container">
        <div className="cursor__dot"></div>
        <div className="cursor__dot--inner"></div>
      </div>
    </div>
  );
}

export default Cursor;