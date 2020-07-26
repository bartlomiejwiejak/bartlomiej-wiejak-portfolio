import React, { useEffect, useContext } from 'react';
import isMobile from '../functions/isMobile';
import HighLightText from '../components/HighlightText';
import gsap from 'gsap';
import showInterface from '../animations/showInterface';
import homeObjects from '../animations/homeObjects';
import { useHistory } from 'react-router-dom';
import { RoutingContext } from '../context/routingContext';
import hideInterface from '../animations/hideInterface';

const Home = ({ setBodyHeight }) => {

  const { animating, path, setAnimating } = useContext(RoutingContext);
  const history = useHistory();

  useEffect(() => {
    if (animating) {
      document.removeEventListener('mousemove', homeObjects)
      hideInterface();
      gsap.to('.home__welcome span span', .5, {
        color: 'transparent'
      })
      gsap.to('.home__welcome span span', .5, { delay: .6, y: '110%' })
      gsap.to('.switcher', 1, { autoAlpha: 0 })
      setTimeout(() => {
        if (path === '/about') {
          gsap.to('.switcher__expand-dark', .5, {
            backgroundColor: '#f5efe1', onComplete: () => {
              setAnimating(false)
              history.push(path)
            }
          });
        }
        else if (path === '/work') {
          gsap.to('.switcher__expand-dark', .5, {
            backgroundColor: '#191919', onComplete: () => {
              setAnimating(false)
              history.push(path)
            }
          });
        }
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
    <div className='home-wrapper'>
      <div className="home">
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
          <HighLightText type='white' to='/about'>Wiejak.</HighLightText>
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
          <HighLightText type='white' to='/work'>apps.</HighLightText>
        </h1>
      </div>
    </div>
  );
}

export default Home;
