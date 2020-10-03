import { useEffect } from "react";

const useResize = (callback) => {
  useEffect(() => {
    const html = document.querySelector('html');
    const documentEl = document.documentElement;
    let vh = window.innerHeight * 0.01;
    let fontSize = 10 - (1920 - window.innerWidth) / 300 + 'px';
    html.style.fontSize = fontSize;
    documentEl.style.setProperty('--vh', `${vh}px`);

    function handleResize() {
      fontSize = 10 - (1920 - window.innerWidth) / 300 + 'px';
      vh = window.innerHeight * 0.01;
      html.style.fontSize = fontSize;
      documentEl.style.setProperty('--vh', `${vh}px`);
      callback();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [callback]);
}

export default useResize;