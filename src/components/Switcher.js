import React from 'react'
import cursorExpand from '../utilities/cursorExpand';
import cursorBackToNormalFromExpand from '../utilities/cursorBackToNormalFromExpand';

export default function Switcher() {
  const switchToDark = () => {
    document.querySelector('.switcher__expand-dark').classList.add('switcher__expand-dark--expanded');
    document.querySelector('.switcher').classList.add('switcher--rotated');
  }
  const switchToLight = () => {
    document.querySelector('.switcher__expand-dark').classList.remove('switcher__expand-dark--expanded');
    document.querySelector('.switcher').classList.remove('switcher--rotated');
  }
  return (
    <>
      <div className="switcher__background-light"></div>
      <div className="switcher__expand-dark"></div>
      <div className='switcher'>
        <div onClick={switchToDark} onMouseOver={cursorExpand} onMouseOut={cursorBackToNormalFromExpand} className="switcher__moon-container">
          <i class="fas fa-moon"></i>
          <div className="switcher__text">Dark</div>
        </div>
        <div onClick={switchToLight} onMouseOver={cursorExpand} onMouseOut={cursorBackToNormalFromExpand} className="switcher__sun-container">
          <i class="fas fa-sun"></i>
          <div className="switcher__text">Light</div>
        </div>
      </div>

    </>
  )
}
