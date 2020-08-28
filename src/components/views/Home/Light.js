import React, { useEffect } from 'react';
import gsap from 'gsap';

import isMobile from '../../../functions/isMobile';

const Light = () => {


  useEffect(() => {
    if (!isMobile()) {
      function moveLight(e) {
        gsap.to('.light', .6, { x: `${e.clientX}`, y: `${e.clientY}` })
      }
      document.addEventListener('mousemove', moveLight)
      return () => document.removeEventListener('mousemove', moveLight)
    } else {
      gsap.set('.light', { x: window.innerWidth / 2, y: window.innerHeight / 2 })
    }
  }, [])

  return <div className='light'></div>
}

export default Light;