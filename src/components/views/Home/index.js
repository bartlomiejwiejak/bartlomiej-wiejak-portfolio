import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';

import isMobile from '../../../functions/isMobile';
import showInterface from '../../../animations/showInterface';
import homeObjects from '../../../animations/homeObjects';
import { useHistory } from 'react-router-dom';
import { RoutingContext } from '../../../context';
import hideInterface from '../../../animations/hideInterface';
import { LoadingContext } from '../../../context';
import Contact from './Contact';
import Light from './Light';
import Header from './Header';

const Home = ({ setBodyHeight }) => {

  const { animating, path, setAnimating } = useContext(RoutingContext);
  const { loaded } = useContext(LoadingContext);
  const history = useHistory();

  useEffect(() => {
    if (animating) {
      document.removeEventListener('mousemove', homeObjects)
      if (!isMobile()) {
        gsap.to('.light', .5, { opacity: 0 })
      }
      hideInterface();
      gsap.to('.contact__item .button', 1, { y: '100%', ease: 'power2.out', delay: .2 });
      gsap.to('.home > .home__welcome > span span', .5, {
        color: 'transparent'
      })
      gsap.to('.home > .home__welcome > span span', .5, { delay: .6, y: '110%' })
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
      if (!isMobile()) {
        gsap.to('.light', 2, { scale: .7, delay: 1.5 })
      }
      showInterface();
      gsap.to('.contact__item .button', 1, { y: 0, ease: 'power2.out' });
      gsap.to('.home__welcome--shadow', .1, { opacity: 1, delay: 1.5 })
      gsap.to('.home > .home__welcome > span span', 1, { y: 0, stagger: .1, ease: 'power2.out', opacity: 1 });
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
        <Header>
          <Header shadow />
        </Header>
      </div>
    </>
  );
}

export default Home;
