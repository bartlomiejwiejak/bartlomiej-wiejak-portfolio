import React from 'react';

const Cursor = () => {
  const moveCursor = (e) => {
    document.querySelector('.cursor__dot').style.top = `${e.pageY - 3}px`;
    document.querySelector('.cursor__dot').style.left = `${e.pageX - 3}px`;
    document.querySelector('.cursor__circle').style.top = `${e.pageY - 32.5}px`;
    document.querySelector('.cursor__circle').style.left = `${e.pageX - 32.5}px`;
  }
  const cursorExpand = () => {
    document.querySelector('.cursor__circle').classList.add('cursor__circle--shrink');
    document.querySelector('.cursor__dot').classList.add('cursor__dot--scroll');
    document.querySelector('.cursor__circle').style.transition = '0';
  }
  const cursorBackToNormal = () => {
    document.querySelector('.cursor__circle').classList.remove('cursor__circle--shrink');
    document.querySelector('.cursor__dot').classList.remove('cursor__dot--scroll');
  }
  document.addEventListener('mousemove', moveCursor)
  document.addEventListener('mousedown', cursorExpand)
  document.addEventListener('mouseup', cursorBackToNormal)
  return (
    <div className='cursor'>
      <div className="cursor__circle"></div>
      <div className="cursor__dot"></div>
    </div>
  );
}

export default Cursor;
