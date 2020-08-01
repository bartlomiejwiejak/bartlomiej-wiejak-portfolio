import React, { useEffect } from 'react';
import gsap from 'gsap';

const Light = () => {

  useEffect(() => {
    function moveLight(e) {
      gsap.to('.light', .6, { x: `${e.clientX}`, y: `${e.clientY}` })
    }
    document.addEventListener('mousemove', (e) => moveLight(e))
    return () => document.removeEventListener('mousemove', moveLight)
  }, [])

  return (
    <div className='light'></div>
  );
}

export default Light;
