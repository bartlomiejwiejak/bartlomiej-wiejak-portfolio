import React, { useEffect, useContext } from 'react';
import photo from '../assets/photo.jpg';
import circle from '../assets/circle.png';
import react from '../assets/technologies/react.png';
import js from '../assets/technologies/js.png';
import gsapLogo from '../assets/technologies/gsap.png';
import redux from '../assets/technologies/redux.png';
import firebase from '../assets/technologies/firebase.png';
import git from '../assets/technologies/git.png';
import node from '../assets/technologies/node.png';
import sass from '../assets/technologies/sass.png';
import webpack from '../assets/technologies/webpack.png';
import mongo from '../assets/technologies/mongo.png';
import threejs from '../assets/technologies/threejs.webp';
import Button from '../components/Button';
import HighLightText from '../components/HighlightText';
import showInterface from '../animations/showInterface';
import hideInterface from '../animations/hideInterface';
import aboutheader from '../animations/aboutHeader';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { moveLines } from '../animations/aboutHeader';
import { RoutingContext } from '../context/context';
import { useHistory } from 'react-router-dom';
import scrollTo from '../functions/scrollTo';
import { LoadingContext } from '../context/context';
import { useLockBodyScroll, useToggle } from 'react-use';
import isMobile from '../functions/isMobile';

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
    window.scrollTo({
      top: 0
    })
    if (loaded) {
      document.querySelector('html').classList.remove('scrollbar-light')
      document.querySelector('.background').style.setProperty('background-color', 'var(--light)');
      gsap.to('.about__description__img-reveal', .7, { opacity: 1 })
      gsap.to('.about__description__img', .7, { opacity: 1 })
      showInterface();
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.about__line', 1, { x: 0, ease: 'power2.out', onComplete: aboutheader }, .2)
      if (isMobile()) {
        gsap.to('.about__description__img-reveal', 1.6, {
          height: 0, ease: 'power2.out'
        })
      } else {
        gsap.to('.about__description__img-reveal', 1.6, {
          scrollTrigger: {
            trigger: '.about__description__img-container',
            start: 'top center',
          }, height: 0, ease: 'power2.out'
        })
      }
      setTimeout(() => {
        document.querySelectorAll('.about span span').forEach(span => {
          gsap.to(span, 1, {
            scrollTrigger: span, y: 0, ease: 'power2.out', delay: .5, opacity: 1
          })
        })
        gsap.from('.about__description__img', {
          scrollTrigger: {
            trigger: '.about__description__img-container',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          },
          scale: 1.2
        })
        gsap.to('.about__circle', {
          rotate: 360, scrollTrigger: {
            trigger: '.about__circle',
            scrub: 2,
            start: 'top bottom',
            end: 'bottom top'
          }
        })
        gsap.to('.about__skills__technologies__technology--2 div', .7, {
          scrollTrigger: {
            trigger: '.about__skills__technologies__technology--2',
            start: '100px bottom',
          },
          y: 0,
          x: 0,
          ease: 'power2.out'
        })
        gsap.to('.about__skills__technologies__technology--3 div', .7, {
          scrollTrigger: {
            trigger: '.about__skills__technologies__technology--2',
            start: '100px bottom',
          },
          y: 0,
          x: 0,
          delay: .7,
          ease: 'power2.out'
        })
        gsap.to('.about__skills__technologies__technology--4 div', .7, {
          scrollTrigger: {
            trigger: '.about__skills__technologies__technology--4',
            start: '100px bottom',
          },
          y: 0,
          x: 0,
          delay: .7,
          ease: 'power2.out'
        })
        gsap.to('.about__skills__technologies__technology--5 div', .7, {
          scrollTrigger: {
            trigger: '.about__skills__technologies__technology--4',
            start: '100px bottom',
          },
          y: 0,
          x: 0,
          ease: 'power2.out'
        })
        gsap.to('.about__skills__technologies__technology--6 div', .7, {
          scrollTrigger: {
            trigger: '.about__skills__technologies__technology--4',
            start: '100px bottom',
          },
          y: 0,
          x: 0,
          delay: .7,
          ease: 'power2.out'
        })
        gsap.to('.about__skills__technologies__technology--7 div', .7, {
          scrollTrigger: {
            trigger: '.about__skills__technologies__technology--7',
            start: '100px bottom',
          },
          y: 0,
          x: 0,
          ease: 'power2.out'
        })
        gsap.to('.about__skills__technologies__technology--8 div', .7, {
          scrollTrigger: {
            trigger: '.about__skills__technologies__technology--7',
            start: '100px bottom',
          },
          y: 0,
          x: 0,
          delay: .7,
          ease: 'power2.out'
        })
        gsap.to('.about__skills__technologies__technology--9 div', .7, {
          scrollTrigger: {
            trigger: '.about__skills__technologies__technology--7',
            start: '100px bottom',
          },
          y: 0,
          x: 0,
          delay: 1.4,
          ease: 'power2.out'
        })
        gsap.to('.about__skills__technologies__technology--10 div', .7, {
          scrollTrigger: {
            trigger: '.about__skills__technologies__technology--7',
            start: '100px bottom',
          },
          y: 0,
          x: 0,
          delay: 2.1,
          ease: 'power2.out'
        })
        gsap.to('.about__skills__technologies__technology--11 div', .7, {
          scrollTrigger: {
            trigger: '.about__skills__technologies__technology--11',
            start: '100px bottom',
          },
          y: 0,
          x: 0,
          delay: .7,
          ease: 'power2.out'
        })
        gsap.to('.about__skills__technologies__technology--12 div', .7, {
          scrollTrigger: {
            trigger: '.about__skills__technologies__technology--11',
            start: '100px bottom',
          },
          y: 0,
          x: 0,
          delay: .7,
          ease: 'power2.out'
        })
      }, 500)
    }
    return () => {
      document.removeEventListener('mousemove', moveLines);
    }
  }, [loaded])
  return (
    <div className='about'>
      <h1 className='about__heading'>
        <p className='about__line about__line--1'>
          <span>INTERACTIVE</span>
        </p>
        <p className='about__line about__line--2'>
          <span>& CREATIVE</span>
        </p>
        <p className='about__line about__line--3'>
          <span>DEVELOPER</span>
        </p>
      </h1>
      <div className="about__description">
        <div className="about__description__text">
          <div className="about__description__heading">
            <p className="about__description__heading__line"><span><span>Hey, I'm Bartłomiej Wiejak</span></span></p>
            <p className="about__description__heading__line"><span><span>a self taught developer.</span></span></p>
          </div>
          <p className='about__description__paragraph'>
            <span><span>I</span></span><span><span>enjoy</span></span><span><span>building</span></span><span><span>interactive,</span></span><span><span>heavy</span></span><span><span>javascript</span></span><span><span>application</span></span><span><span>with</span></span><span><span>slick</span></span><span><span>animations.</span></span><span><span>I</span></span><span><span>mostly</span></span><span><span>work</span></span><span><span>with</span></span><span><span>react.</span></span><span><span>I'm</span></span><span><span>simply</span></span><span><span>passionate</span></span><span><span>about</span></span><span><span>technology</span></span><span><span>and</span></span><span><span>seek</span></span><span><span>to</span></span><span><span>perfect</span></span><span><span>myself</span></span><span><span>every</span></span><span><span>day.</span></span><span><span>Now</span></span><span><span>I'm</span></span><span><span>focussing</span></span><span><span>on</span></span><span><span>WebGl</span></span><span><span>and</span></span><span><span>GLSL.</span></span>
          </p>
        </div>
        <div className="about__description__img-container">
          <img draggable={false} src={photo} alt="Bartlomiej Wiejak" className="about__description__img" />
          <div className="about__description__img-reveal"></div>
        </div>
      </div>
      <p className="about__description__paragraph--mobile">
        <span><span>I</span></span><span><span>enjoy</span></span><span><span>building</span></span><span><span>interactive,</span></span><span><span>heavy</span></span><span><span>javascript</span></span><span><span>application</span></span><span><span>with</span></span><span><span>slick</span></span><span><span>animations.</span></span><span><span>I</span></span><span><span>mostly</span></span><span><span>work</span></span><span><span>with</span></span><span><span>react.</span></span><span><span>I'm</span></span><span><span>simply</span></span><span><span>passionate</span></span><span><span>about</span></span><span><span>technology</span></span><span><span>and</span></span><span><span>seek</span></span><span><span>to</span></span><span><span>perfect</span></span><span><span>myself</span></span><span><span>every</span></span><span><span>day.</span></span><span><span>Now</span></span><span><span>I'm</span></span><span><span>focussing</span></span><span><span>on</span></span><span><span>WebGl</span></span><span><span>and</span></span><span><span>GLSL.</span></span>
      </p>
      <div className="about__circle">
        <img draggable={false} className="about__circle__img" src={circle} alt='Creative developer' />
      </div>
      <div className="about__skills">
        <p className="about__skills__heading"><span><span>I'm</span></span><span><span>ambitious</span></span><span><span>and</span></span><span><span>love</span></span><span><span>new</span></span><span><span>challenges.</span></span><span><span>My</span></span><span><span>variety</span></span><span><span>of</span></span><span><span>skills</span></span><span><span>is</span></span><span><span>continuosly</span></span> <span><span>expanding..</span></span></p>
        <div className="about__skills__technologies-wrapper">
          <div className="about__skills__technologies">
            <div className="about__skills__technologies__technology about__skills__technologies__technology--1"><div>Technologies:</div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--2"><div>
              <img draggable={false} src={react} alt="react" />
            </div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--3"><div>
              <img draggable={false} src={js} alt="react" /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--4"><div>
              <img draggable={false} src={gsapLogo} alt="gsap" /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--5"><div><img draggable={false} src={redux} alt="redux" /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--6"><div><img draggable={false} src={firebase} alt="firebase" /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--7"><div><img draggable={false} src={git} alt="css3" /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--8"><div><img draggable={false} src={node} alt="node" /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--9"><div><img draggable={false} src={sass} alt="sass" /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--10"><div><img draggable={false} src={webpack} alt="webpack" /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--11"><div><img draggable={false} src={mongo} alt="mongo" /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--12"><div><img draggable={false} src={threejs} alt="threejs" /></div></div></div>
        </div>
      </div>
      <div className="about__contact">
        <ul>
          <li><span><span>Email</span></span></li>
          <li><span><span>hello@bartlomiejwiejak.com</span></span></li>
        </ul>
        <ul>
          <li><span><span>Social</span></span></li>
          <li><span><span><a href='https://twitter.com/BartekWiejak' target='blank'><Button type='black'>Twitter</Button></a></span></span></li>
          <li><span><span><a href='https://github.com/bartlomiejwiejak' target='blank'><Button type='black'>Github</Button></a></span></span></li>
          <li><span><span><a href='https://www.linkedin.com/in/bart%C5%82omiej-wiejak-4b9a891b3/' target='blank'><Button type='black'>Linkedin</Button></a></span></span></li>
        </ul>
      </div>
      <footer className='about__footer'>
        <div className="about__footer__copyright"><span><span>© 2020</span></span></div>
        <div className="about__footer__author"><span><span>by</span></span><span><span><a href='https://github.com/bartlomiejwiejak' target='blank'><Button type='black'>Bartłomiej Wiejak.</Button></a></span></span></div>
      </footer>
      <div className="about__go-to-work">
        <p><span><span>Go to</span></span></p>
        <HighLightText type='black' to='/work'>Work</HighLightText>
      </div>
    </div>
  );
}

export default About;