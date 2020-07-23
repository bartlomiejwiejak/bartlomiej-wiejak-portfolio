import React from 'react'
import cursorExpand from '../animations/cursorExpand';
import cursorBackToNormal from '../animations/cursorBackToNormal';
import gsap from 'gsap';
import photoDark from '../assets/photoDark.jpg';
import photoLight from '../assets/photo.jfif';

export default function Switcher() {

  const switchToDark = () => {
    document.querySelector('.switcher__expand-dark').classList.add('switcher__expand-dark--expanded');
    document.querySelector('.switcher').classList.add('switcher--rotated');
    if (document.querySelector('.about__description__img')) {
      gsap.to('.about__description__img', {
        autoAlpha: 0, duration: 0.2, onComplete: () => {
          gsap.to('.about__description__img', { autoAlpha: 1, duration: .2 });
          document.querySelector('.about__description__img').setAttribute('src', photoDark);
        }
      })
    }
  }
  const switchToLight = () => {
    document.querySelector('.switcher__expand-dark').classList.remove('switcher__expand-dark--expanded');
    document.querySelector('.switcher').classList.remove('switcher--rotated');
    if (document.querySelector('.about__description__img')) {
      gsap.to('.about__description__img', {
        autoAlpha: 0, duration: .2, onComplete: () => {
          gsap.to('.about__description__img', { autoAlpha: 1, duration: .5, delay: .5 });
          document.querySelector('.about__description__img').setAttribute('src', photoLight);
        }
      })
    }
  }
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
