import React, { useRef, useEffect } from 'react';

const Button = ({ children }) => {
  const btnRef = useRef();
  const cursorExpand = () => {
    document.querySelector('.cursor__circle').classList.add('cursor__circle--expand');
  }
  const cursorBackToNormalFromExpand = () => {
    document.querySelector('.cursor__circle').classList.remove('cursor__circle--expand');
  }
  useEffect(() => {
    btnRef.current.addEventListener('mouseover', cursorExpand)
    btnRef.current.addEventListener('mouseout', cursorBackToNormalFromExpand)
  }, [])

  return (
    <div ref={btnRef} className='button'>
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
  );
}

export default Button;
