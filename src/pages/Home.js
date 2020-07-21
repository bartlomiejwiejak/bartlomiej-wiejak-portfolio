import React, { useEffect } from 'react';
import cursorBackToNormalFromShrink from '../functions/cursorBackToNormalFromExpand';
import cursorExpandBig from '../functions/cursorExpandBig';
import isMobile from '../functions/isMobile';
import gsap from 'gsap';

const Home = () => {

  useEffect(() => {
    gsap.to('.home__welcome span span', { y: 0, duration: .5, stagger: .05, ease: 'Power2.easeOut', opacity: 1 }, .7);
  }, [])

  useEffect(() => {
    if (isMobile()) return;
    const moveObjects = (e) => {
      const positionX = -(window.innerWidth / 2 - e.clientX) * 0.05;
      const positionY = -(window.innerHeight / 2 - e.clientY) * 0.03;
      const rotateX = -((((window.innerWidth / 2) - e.clientX) / window.innerWidth) * 10);
      const rotateY = ((((window.innerHeight / 2) - e.clientY) / window.innerHeight) * 10);

      document.querySelector('.home__welcome').style.transform = `translate(${positionX}px,${positionY}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    }
    document.addEventListener('mousemove', moveObjects)
    return () => {
      document.removeEventListener('mousemove', moveObjects)
    }
  }, [])

  return (
    <div className='home'>
      <h1 className="home__welcome">
        <span>
          <span>Hello, </span>
        </span>
        <span>
          <span>my </span>
        </span>
        <span>
          <span>name </span>
        </span>
        <span>
          <span>is </span>
        </span>
        <span>
          <span>Bartłomiej </span>
        </span>
        <span onMouseOver={cursorExpandBig} onMouseOut={cursorBackToNormalFromShrink}>
          <span data-text='Wiejak.' className='home__welcome--highlight-text'>
            Wiejak.
            </span>
        </span>
        <span>
          <span> I </span>
        </span>
        <span>
          <span>am a </span>
        </span>
        <span>
          <span>web </span>
        </span>
        <span>
          <span>developer </span>
        </span>
        <span>
          <span> focussed </span>
        </span>
        <span>
          <span>on </span>
        </span>
        <span>
          <span>creative </span>
        </span>
        <span>
          <span>interactions </span>
        </span>
        <span>
          <span>& </span>
        </span>
        <span>
          <span>animations </span>
        </span>
        <span>
          <span>in </span>
        </span>
        <span>
          <span>my </span>
        </span>
        <span onMouseOver={cursorExpandBig} onMouseOut={cursorBackToNormalFromShrink}>
          <span data-text='apps.' className='home__welcome--highlight-text'>apps.</span>
        </span>
      </h1>
    </div>
  );
}

export default Home;
