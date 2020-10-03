import React, { useEffect, useRef } from 'react';

function ScrollBar({ bodyHeight }) {
  const thumbRef = useRef();

  useEffect(() => {
    if (bodyHeight === 0) return;
    if (bodyHeight <= window.innerHeight) {
      thumbRef.current.style.height = '0px';
    } else {
      thumbRef.current.style.height = `${(window.innerHeight * window.innerHeight) / bodyHeight}px`
    }
  }, [bodyHeight])

  return (
    <div className='scrollbar'>
      <span ref={thumbRef} className="scrollbar__thumb"></span>
    </div>
  )
}

export default ScrollBar