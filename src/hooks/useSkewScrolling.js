import { useEffect, useState } from 'react';
import gsap from 'gsap';

import skewConfig from '../config/skewScrolling';
import isMobile from '../functions/isMobile';

const useSkewScrolling = (callback) => {

  const [scrollElement, setScrollElement] = useState(null);

  useEffect(() => {
    if (!scrollElement) return;
    const skewScrolling = () => {
      skewConfig.current = window.scrollY;
      skewConfig.previous += (skewConfig.current - skewConfig.previous) * skewConfig.ease;
      skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

      const difference = skewConfig.current - skewConfig.rounded;
      const acceleration = difference / window.innerWidth;
      const velocity = +acceleration;
      const skew = velocity * 10;
      scrollElement.style.transform = `translate3d(0, -${skewConfig.rounded}px, 0) skewY(${skew}deg)`;
      const bodyHeight = document.querySelector('body').getBoundingClientRect().height;
      callback();
      if (bodyHeight && !isMobile()) {
        const y = (window.innerHeight / bodyHeight) * window.scrollY;
        gsap.to('.scrollbar__thumb', 1, { y: y })
      }

      requestAnimationFrame(skewScrolling);
    }
    const animationFrame = requestAnimationFrame(skewScrolling)
    return () => cancelAnimationFrame(animationFrame)
  }, [scrollElement, callback])

  return { setScrollElement };

}

export default useSkewScrolling;