import React, { useEffect, useContext } from 'react';

import showInterface from '../../../animations/showInterface';
import hideInterface from '../../../animations/hideInterface';
import gsap from 'gsap';
import { RoutingContext } from '../../../context';
import { useHistory } from 'react-router-dom';
import scrollTo from '../../../functions/scrollTo';
import { LoadingContext } from '../../../context';
import { useLockBodyScroll, useToggle } from 'react-use';
import isMobile from '../../../functions/isMobile';
import scrollInstant from '../../../functions/scrollInstant';
import { moveLines } from '../../../animations/aboutHeader'
import Header from './Header';
import Description from './Description';
import Circle from './Circle';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const About = ({ setBodyHeight }) => {

  const { animating, path, setAnimating } = useContext(RoutingContext);
  const { loaded } = useContext(LoadingContext);
  const history = useHistory();
  const [locked, setLocked] = useToggle(false);
  useLockBodyScroll(locked);

  useEffect(() => {
    setTimeout(setBodyHeight, 1000)
    setBodyHeight()
  }, [setBodyHeight])

  useEffect(() => {
    if (animating) {
      document.removeEventListener('mousemove', moveLines);
      hideInterface();
      if (navigator.userAgent.indexOf("Firefox") > -1) {
        setTimeout(() => {
          gsap.to('.about__line--1', 1, {
            x: '150%', ease: 'power2.out', onComplete: () => {
              setAnimating(false);
              history.push(path)
            }
          })
          gsap.to('.about *:not(.about__heading)', 1, { ease: 'power2.out', autoAlpha: 0 })
          gsap.to('.about__line--2', 1, { x: '-150%', ease: 'power2.out' })
          gsap.to('.about__line--3', 1, { x: '150%', ease: 'power2.out' })
        }, 1500)
      }
      setLocked(true)
      scrollTo(0, () => {
        setTimeout(() => {
          gsap.to('.about__line--1', 1, {
            x: '150%', ease: 'power2.out', onComplete: () => {
              setAnimating(false);
              history.push(path)
            }
          })
          gsap.to('.about *:not(.about__heading)', 1, { ease: 'power2.out', autoAlpha: 0 })
          gsap.to('.about__line--2', 1, { x: '-150%', ease: 'power2.out' })
          gsap.to('.about__line--3', 1, { x: '150%', ease: 'power2.out' })
        }, 1500)
      })
    }
  }, [animating, history, path, setAnimating, setLocked])

  useEffect(() => {
    scrollInstant(0);
    if (loaded) {
      document.querySelector('html').classList.remove('scrollbar-light')
      document.querySelector('.background').style.setProperty('background-color', 'var(--light)');

      showInterface();

      let topText = '100px';
      if (isMobile()) {
        topText = '50px';
      }
      setTimeout(() => {
        document.querySelectorAll('.about span span').forEach(span => {
          if (span.classList.contains('highlight-text')) return;
          gsap.to(span, 1.5, {
            scrollTrigger: { trigger: span, start: `${topText} bottom` }, y: 0, ease: 'power2.out', delay: .2, opacity: 1
          })
        })
        gsap.to('.about .highlight-text', 1.5, { y: 0, autoAlpha: 1, scrollTrigger: '.about .highlight-text' })
      }, 500)
    }

  }, [loaded])
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