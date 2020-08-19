import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

import isMobile from '../../../functions/isMobile';

const Light = () => {

  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (!isMobile()) {
      function moveLight(e) {
        gsap.to('.light', .6, { x: `${e.clientX}`, y: `${e.clientY}` })
      }
      document.addEventListener('mousemove', moveLight)
      return () => document.removeEventListener('mousemove', moveLight)
    } else {
      setMounted(false)
    }
  }, [])

  return (
    mounted ? <div className='light'></div> : null
  );
}

export default Light;