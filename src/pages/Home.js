import React, { useEffect, useContext } from 'react';
import isMobile from '../functions/isMobile';
import HighLightText from '../components/HighlightText';
import gsap from 'gsap';
import HighlightText from '../components/HighlightText';
import showInterface from '../animations/showInterface';
import homeObjects from '../animations/homeObjects';
import { useHistory } from 'react-router-dom';
import { RoutingContext } from '../context/routingContext';
import hideInterface from '../animations/hideInterface';
import Link from '../components/Link';

const Home = ({ setBodyHeight }) => {

  const { animating, path, setAnimating } = useContext(RoutingContext);
  const history = useHistory();

  useEffect(() => {
    if (animating) {
      document.removeEventListener('mousemove', homeObjects)
      hideInterface();
      gsap.to('.home__welcome', .5, {
        opacity: 0,
        scale: .95,
        y: '-10%'
      })
      setTimeout(() => {
        setAnimating(false)
        history.push(path)
      }, 1200)
    }
  }, [animating, history, path, setAnimating])


  useEffect(() => {
    setTimeout(() => {
      setBodyHeight();
    }, 1000)
    setBodyHeight()
  }, [setBodyHeight])

  useEffect(() => {
    showInterface();
    gsap.to('.home__welcome span span', .5, { y: 0, stagger: .05, ease: 'Power2.easeOut', opacity: 1 });
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
        <Link to='/about'><HighLightText>Wiejak.</HighLightText></Link>
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
        <Link to='/work'><HighlightText>Apps.</HighlightText></Link>
      </h1>
    </div>
  );
}

export default Home;
