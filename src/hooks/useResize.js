import { useEffect } from "react";

const useResize = (callback) => {
  useEffect(() => {
    const html = document.querySelector('html');
    const documentEl = document.documentElement;

    function handleResize() {
      const fontSize = 10 - (1920 - window.innerWidth) / 300 + 'px';
      const vh = window.innerHeight * 0.01;
      html.style.fontSize = fontSize;
      documentEl.style.setProperty('--vh', `${vh}px`);
      callback();
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [callback]);
}

export default useResize;