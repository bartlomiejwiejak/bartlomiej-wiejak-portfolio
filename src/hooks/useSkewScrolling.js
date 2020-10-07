import { useEffect } from 'react';
import gsap from 'gsap';

import skewConfig from '../config/skewScrolling';
import isMobile from '../functions/isMobile';

const useSkewScrolling = () => {

  useEffect(() => {
    const body = document.querySelector('body');
    const scrollBarThumb = document.querySelector('.scrollbar__thumb');
    const scrollElement = document.querySelector('.scroll');
    const setScrollbarHeight = (bodyHeight) => {
      if (bodyHeight === 0) return;
      if (bodyHeight <= window.innerHeight) {
        scrollBarThumb.style.height = '0px';
      } else {
        scrollBarThumb.style.height = `${(window.innerHeight * window.innerHeight) / bodyHeight}px`
      }
    }

    const skewScrolling = () => {
      body.style.height = scrollElement.offsetHeight + 'px';
      skewConfig.current = window.scrollY;
      skewConfig.previous += (skewConfig.current - skewConfig.previous) * skewConfig.ease;
      skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

      const difference = skewConfig.current - skewConfig.rounded;
      const acceleration = difference / window.innerWidth;
      const velocity = +acceleration;
      const skew = velocity * 10;
      scrollElement.style.transform = `translate3d(0, -${skewConfig.rounded}px, 0) skewY(${skew}deg)`;

      const bodyHeight = body.offsetHeight;
      if (bodyHeight && !isMobile()) {
        setScrollbarHeight(bodyHeight);
        const y = (window.innerHeight / bodyHeight) * window.scrollY;
        gsap.to('.scrollbar__thumb', 1, { y: y })
      }

      requestAnimationFrame(skewScrolling);
    }
    const animationFrame = requestAnimationFrame(skewScrolling)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

}

export default useSkewScrolling;