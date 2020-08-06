import React, { useEffect } from 'react';
import gsap from 'gsap';
import isMobile from '../functions/isMobile';

const Light = () => {

  useEffect(() => {
    if (!isMobile()) {
      function moveLight(e) {
        gsap.to('.light', .6, { x: `${e.clientX}`, y: `${e.clientY}` })
      }
      document.addEventListener('mousemove', moveLight)
      return () => document.removeEventListener('mousemove', moveLight)
    } else {
      gsap.set('.light', { left: '50%', top: '50%', x: '-50%', y: '-50%' })
      gsap.to('.light', 1, { opacitY: 1 })
    }
  }, [])

  return (
    <div className='light'></div>
  );
}

export default Light;
