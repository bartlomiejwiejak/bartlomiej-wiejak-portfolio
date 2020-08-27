import { useState, useEffect } from "react";

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    document.querySelector('html').style.fontSize = 10 - (1920 - window.innerWidth) / 300 + 'px';
    function handleResize() {
      document.querySelector('html').style.fontSize = 10 - (1920 - window.innerWidth) / 300 + 'px';
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}