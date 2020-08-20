import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';

import isMobile from '../../../functions/isMobile';
import HighLightText from '../../shared/HighlightText';
import showInterface from '../../../animations/showInterface';
import homeObjects from '../../../animations/homeObjects';
import { useHistory } from 'react-router-dom';
import { RoutingContext } from '../../../context';
import hideInterface from '../../../animations/hideInterface';
import { LoadingContext } from '../../../context';
import Contact from './Contact';
import Light from './Light';

const Home = ({ setBodyHeight }) => {

  const { animating, path, setAnimating } = useContext(RoutingContext);
  const { loaded } = useContext(LoadingContext);
  const history = useHistory();

  useEffect(() => {
    if (animating) {
      document.removeEventListener('mousemove', homeObjects)
      gsap.to('.light', .5, { opacity: 0 })
      hideInterface();
      gsap.to('.contact__item .button', 1, { y: '100%', ease: 'power2.out', delay: .2 });
      gsap.to('.home__welcome span span', .5, {
        color: 'transparent'
      })
      gsap.to('.home__welcome span span', .5, { delay: .6, y: '110%' })
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
    if (loaded) {
      document.querySelector('.background').style.setProperty('background-color', 'var(--dark)');
      gsap.to('.light', 2, { opacity: 1 })
      showInterface();
      gsap.to('.contact__item .button', 1, { y: 0, ease: 'power2.out' });
      gsap.to('.home__welcome span span', 1, { y: 0, stagger: .1, ease: 'power2.out', opacity: 1 });
    }
  }, [loaded])

  useEffect(() => {
    if (isMobile()) return;
    document.addEventListener('mousemove', homeObjects)
    return () => {
      document.removeEventListener('mousemove', homeObjects)
    }
  }, [])

  return (
    <>
      {ReactDOM.createPortal(<Contact />, document.getElementById('root'))}
      <Light />
      <div className="home">
        <h1 className="home__welcome">
          <span>
            <span>Hello,</span>
          </span>
          <span>
            <span>my</span>
          </span>
          <span>
            <span>name</span>
          </span>
          <span>
            <span>is</span>
          </span>
          <span>
            <span>Bartłomiej</span>
          </span>
          <HighLightText type='white' to='/about'>Wiejak.</HighLightText>
          <span>
            <span>I'm</span>
          </span>
          <span>
            <span>a</span>
          </span>
          <span>
            <span>web</span>
          </span>
          <span>
            <span>developer</span>
          </span>
          <span>
            <span> focussed</span>
          </span>
          <span>
            <span>on</span>
          </span>
          <span>
            <span>creative</span>
          </span>
          <span>
            <span>interactions</span>
          </span>
          <span>
            <span>& </span>
          </span>
          <span>
            <span>animations</span>
          </span>
          <span>
            <span>in</span>
          </span>
          <span>
            <span>my</span>
          </span>
          <HighLightText type='white' to='/work'>apps.</HighLightText>
        </h1>
      </div>
    </>
  );
}

export default Home;
