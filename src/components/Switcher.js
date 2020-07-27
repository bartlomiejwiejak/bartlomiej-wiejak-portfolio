import React, { useEffect } from 'react'
import cursorExpand from '../animations/cursorExpand';
import cursorBackToNormal from '../animations/cursorBackToNormal';
import gsap from 'gsap';

export default function Switcher() {

  const switchToDark = () => {
    gsap.to('.switcher__expand-dark', 1, { scale: 50 });
    gsap.to('.switcher', 1, { rotate: '181deg' });
  }
  const switchToLight = () => {
    gsap.to('.switcher__expand-dark', .7, { scale: 1 });
    gsap.to('.switcher', 1, { rotate: 0 });
  }

  useEffect(() => {
    gsap.to('.switcher', 1, { opacity: 1 })
  }, [])

  return (
    <>
      <div className="switcher__expand-dark"></div>
      <div className='switcher'>
        <div onClick={switchToDark} onMouseOver={cursorExpand} onMouseOut={cursorBackToNormal} className="switcher__moon-container">
          <i className="fas fa-moon"></i>
          <div className="switcher__text">Dark</div>
        </div>
        <div onClick={switchToLight} onMouseOver={cursorExpand} onMouseOut={cursorBackToNormal} className="switcher__sun-container">
          <i className="fas fa-sun"></i>
          <div className="switcher__text">Light</div>
        </div>
      </div>

    </>
  )
}
