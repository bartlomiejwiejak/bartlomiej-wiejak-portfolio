import { useEffect } from "react";

import isMobile from '../functions/isMobile';

const useResize = (callback) => {
  useEffect(() => {
    const html = document.querySelector('html');
    const documentEl = document.documentElement;
    let vh = window.innerHeight * 0.01;
    let fontSize = 10 - (1920 - window.innerWidth) / 300 + 'px';
    html.style.fontSize = fontSize;
    documentEl.style.setProperty('--vh', `${vh}px`);
    if (isMobile()) {
      document.querySelector('.cursor').style.display = 'none';
    } else {
      document.querySelector('.cursor').style.display = 'block';
    }
    function handleResize() {
      fontSize = 10 - (1920 - window.innerWidth) / 300 + 'px';
      vh = window.innerHeight * 0.01;
      html.style.fontSize = fontSize;
      documentEl.style.setProperty('--vh', `${vh}px`);
      if (isMobile()) {
        document.querySelector('.cursor').style.display = 'none';
      } else {
        document.querySelector('.cursor').style.display = 'block';
      }
      callback();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [callback]);
}

export default useResize;