import React, { useEffect } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  useEffect(() => {
    const moveCursor = (e) => {
      gsap.set('.cursor__dot', { y: `${e.clientY - 3}px` })
      gsap.set('.cursor__dot', { x: `${e.clientX - 3}px` })
      gsap.set('.cursor__circle', { x: `${e.clientX - 32.5}px` })
      gsap.set('.cursor__circle', { y: `${e.clientY - 32.5}px` })
    }

    const cursorMouseDown = () => {
      gsap.to('.cursor__circle', .25, { scale: 0.5 })
    }
    const cursorMouseUp = () => {
      gsap.to('.cursor__circle', .25, { scale: 1 })
    }

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', cursorMouseDown);
    document.addEventListener('mouseup', cursorMouseUp);
  }, [])
  return (
    <div className='cursor'>
      <div className="cursor__circle"></div>
      <div className="cursor__dot">
        <div className="cursor__dot--inner"></div>
      </div>
    </div>
  );
}

export default Cursor;
