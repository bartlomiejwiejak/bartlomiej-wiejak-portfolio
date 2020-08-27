import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLockBodyScroll, useToggle } from 'react-use';
import gsap from 'gsap';

import { showInterface } from '../../../animations/interface';
import { hideInterface } from '../../../animations/interface';
import { RoutingContext } from '../../../context';
import scrollTo from '../../../functions/scrollTo';
import { LoadingContext } from '../../../context';
import isMobile from '../../../functions/isMobile';
import scrollInstant from '../../../functions/scrollInstant';
import { moveLines } from '../../../animations/aboutHeader'
import Header from './Header';
import Description from './Description';
import Circle from './Circle';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import { cursorBackToNormal, cursorHide } from '../../../animations/cursor';
import { scrollbarAppear, scrollbarHide } from '../../../animations/scrollBar';

const About = ({ setBodyHeight }) => {

  const { animating, path, setAnimating } = useContext(RoutingContext);
  const { loaded } = useContext(LoadingContext);
  const history = useHistory();
  const [locked, setLocked] = useToggle(loaded);
  useLockBodyScroll(locked);

  useEffect(() => {
    if (!loaded) return;
    setBodyHeight()
    setTimeout(setBodyHeight, 2000)
  }, [setBodyHeight, loaded])

  useEffect(() => {
    if (animating) {
      document.removeEventListener('mousemove', moveLines);
      hideInterface();
      cursorHide();
      setLocked(true);
      scrollTo(0, () => {
        setTimeout(() => {
          scrollbarHide();
          gsap.to('.about__line--1', 1, {
            x: '150%', ease: 'power2.out', onComplete: () => {
              setAnimating(false);
              history.push(path)
            }
          })
          gsap.to('.about *:not(.about__heading)', 1, { ease: 'power2.out', autoAlpha: 0 })
          gsap.to('.about__line--2', 1, { x: '-150%', ease: 'power2.out' })
          gsap.to('.about__line--3', 1, { x: '150%', ease: 'power2.out' })
        }, 1000)
      })
      setLocked(true);
    }
  }, [animating, history, path, setAnimating, setLocked])

  useEffect(() => {
    scrollInstant(0);
    let timeout;
    if (loaded) {
      let time1 = 700;
      let time2 = 1200;
      const background = document.querySelector('.background')
      if (getComputedStyle(background).backgroundColor !== 'rgb(25, 25, 25)') {
        time1 = 200;
        time2 = 700;
      } else {
        background.style.setProperty('background-color', 'var(--light)');
      }
      cursorBackToNormal();
      showInterface();
      let topText = '100px';
      if (isMobile()) {
        topText = '50px';
      }
      setTimeout(scrollbarAppear, time1);
      timeout = setTimeout(() => {
        setLocked(false);
        setBodyHeight();
        gsap.registerPlugin(ScrollTrigger)
        document.querySelectorAll('.about span span').forEach(span => {
          if (span.classList.contains('highlight-text')) return;
          gsap.to(span, 1.5, {
            scrollTrigger: { trigger: span, start: `${topText} bottom` }, y: 0, ease: 'power2.out', delay: .2, opacity: 1
          })
        })
        gsap.to('.about .highlight-text', 1.5, { y: 0, autoAlpha: 1, scrollTrigger: '.about .highlight-text' })
      }, time2)
    }
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [loaded, setLocked, setBodyHeight])

  return (
    <div className='about'>
      <Header />
      <Description />
      <Circle />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default About;