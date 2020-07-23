import React, { useEffect } from 'react';
import isMobile from '../functions/isMobile';
import HighLightText from '../components/HighlightText';
import gsap from 'gsap';
import HighlightText from '../components/HighlightText';
import showInterface from '../animations/showInterface';
import homeObjects from '../animations/homeObjects';

const Home = () => {

  useEffect(() => {
    showInterface();
    gsap.to('.home__welcome span span', { y: 0, duration: .5, stagger: .05, ease: 'Power2.easeOut', opacity: 1 }, .7);
  }, [])

  useEffect(() => {
    if (isMobile()) return;
    document.addEventListener('mousemove', homeObjects)
    return () => {
      document.removeEventListener('mousemove', homeObjects)
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
        <HighLightText>Wiejak.</HighLightText>
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
        <HighlightText>Apps.</HighlightText>
      </h1>
    </div>
  );
}

export default Home;
