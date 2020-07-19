import React, { useEffect, useState } from 'react';

const Cursor = () => {

  const moveCursor = (e) => {
    document.querySelector('.cursor__dot').style.top = `${e.pageY - 3}px`;
    document.querySelector('.cursor__dot').style.left = `${e.pageX - 3}px`;
    document.querySelector('.cursor__circle').style.top = `${e.pageY - 32.5}px`;
    document.querySelector('.cursor__circle').style.left = `${e.pageX - 32.5}px`;
  }

  const [time, setTime] = useState(null);

  useEffect(() => {
    const cursorShrink = () => {
      document.querySelector('.cursor__circle').classList.add('cursor__circle--shrink');
      clearTimeout(time);
      setTime(setTimeout(() => {
        document.querySelector('.cursor__circle').style.transition = 'all 0s';
      }, 200))
    }

    const cursorBackToNormalFromShrink = () => {
      clearTimeout(time);
      document.querySelector('.cursor__circle').classList.remove('cursor__circle--shrink');
      document.querySelector('.cursor__circle').style.transition = 'all 0.2s ease-out';
    }

    const multiDot = () => {
      document.querySelector('.cursor__dot').classList.add('cursor__dot--multi');
      document.querySelector('.cursor__dot--inner').classList.add('cursor__dot--multi-inner');
    }

    const multiDotBackToNormal = () => {
      document.querySelector('.cursor__dot').classList.remove('cursor__dot--multi');
      document.querySelector('.cursor__dot--inner').classList.remove('cursor__dot--multi-inner');
    }
    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mousedown', cursorShrink)
    document.addEventListener('mouseup', cursorBackToNormalFromShrink)
    document.addEventListener('mousedown', multiDot)
    document.addEventListener('mouseup', multiDotBackToNormal)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mousedown', cursorShrink)
      document.removeEventListener('mouseup', cursorBackToNormalFromShrink)
      document.removeEventListener('mousedown', multiDot)
      document.removeEventListener('mouseup', multiDotBackToNormal)
    }

  }, [time])
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
