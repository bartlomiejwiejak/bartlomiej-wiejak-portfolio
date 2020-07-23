import React, { useEffect } from 'react';
import photo from '../assets/photo.jfif';
import circle from '../assets/circle.png';
import react from '../assets/technologies/react.png';
import js from '../assets/technologies/js.png';
import { ReactComponent as Gsap } from '../assets/technologies/gsap.svg';
import redux from '../assets/technologies/redux.png';
import html5 from '../assets/technologies/html5.png';
import css3 from '../assets/technologies/css3.png';
import node from '../assets/technologies/node.png';
import sass from '../assets/technologies/sass.png';
import webpack from '../assets/technologies/webpack.png';
import mongo from '../assets/technologies/mongo.png';
import threejs from '../assets/technologies/threejs.webp';
import Button from '../components/Button';
import HighlightText from '../components/HighlightText';
import showInterface from '../animations/showInterface';
import aboutheader from '../animations/aboutHeader';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {

  useEffect(() => {
    showInterface();
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.about__line', { x: 0, duration: 1, ease: 'Power2.easeOut', onComplete: aboutheader }, .2)
    document.querySelectorAll('.about span span').forEach(span => {
      gsap.to(span, {
        scrollTrigger: span, y: 0, ease: 'Power2.easeOut', duration: 1, delay: .5, opacity: 1
      }, 2)
    })
    gsap.to('.about__description__img', {
      scrollTrigger: {
        trigger: '.about__description__img-container',
        start: '-100px center'
      }, y: 0, duration: 1
    })
    gsap.to('.about__circle', {
      rotate: 720, scrollTrigger: {
        trigger: 'about__circle',
        scrub: 2
      }
    })
    gsap.to('.about__skills__technologies__technology--2 div', {
      scrollTrigger: {
        trigger: '.about__skills__technologies__technology--2',
        start: '100px bottom',
      },
      y: 0,
      x: 0,
      duration: .5
    })
    gsap.to('.about__skills__technologies__technology--3 div', {
      scrollTrigger: {
        trigger: '.about__skills__technologies__technology--2',
        start: '100px bottom',
      },
      y: 0,
      x: 0,
      duration: .5,
      delay: .5
    })
    gsap.to('.about__skills__technologies__technology--4 div', {
      scrollTrigger: {
        trigger: '.about__skills__technologies__technology--4',
        start: '100px bottom',
      },
      y: 0,
      x: 0,
      duration: .5,
      delay: .5
    })
    gsap.to('.about__skills__technologies__technology--5 div', {
      scrollTrigger: {
        trigger: '.about__skills__technologies__technology--4',
        start: '100px bottom',
      },
      y: 0,
      x: 0,
      duration: .5,
    })
    gsap.to('.about__skills__technologies__technology--6 div', {
      scrollTrigger: {
        trigger: '.about__skills__technologies__technology--4',
        start: '100px bottom',
      },
      y: 0,
      x: 0,
      duration: .5,
      delay: .5
    })
    gsap.to('.about__skills__technologies__technology--7 div', {
      scrollTrigger: {
        trigger: '.about__skills__technologies__technology--7',
        start: '100px bottom',
      },
      y: 0,
      x: 0,
      duration: .5,
    })
    gsap.to('.about__skills__technologies__technology--8 div', {
      scrollTrigger: {
        trigger: '.about__skills__technologies__technology--7',
        start: '100px bottom',
      },
      y: 0,
      x: 0,
      duration: .5,
      delay: .5
    })
    gsap.to('.about__skills__technologies__technology--9 div', {
      scrollTrigger: {
        trigger: '.about__skills__technologies__technology--7',
        start: '100px bottom',
      },
      y: 0,
      x: 0,
      duration: .5,
      delay: 1
    })
    gsap.to('.about__skills__technologies__technology--10 div', {
      scrollTrigger: {
        trigger: '.about__skills__technologies__technology--7',
        start: '100px bottom',
      },
      y: 0,
      x: 0,
      duration: .5,
      delay: 1.5
    })
    gsap.to('.about__skills__technologies__technology--11 div', {
      scrollTrigger: {
        trigger: '.about__skills__technologies__technology--11',
        start: '100px bottom',
      },
      y: 0,
      x: 0,
      duration: .5,
    })
    gsap.to('.about__skills__technologies__technology--12 div', {
      scrollTrigger: {
        trigger: '.about__skills__technologies__technology--11',
        start: '100px bottom',
      },
      y: 0,
      x: 0,
      duration: .5,
      delay: .5
    })
    gsap.to('.about .highlight-text', {
      scrollTrigger: {
        trigger: '.about .highlight-text',
        start: '-50px bottom'
      }, y: 0, ease: 'Power2.easeOut', duration: 1, delay: .5, opacity: 1
    }, 2)
  }, [])

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
            <p className="about__description__heading__line"><span><span>a creative developer.</span></span></p>
          </div>
          <p className='about__description__paragraph'>
            <span><span>I</span></span><span><span>enjoy</span></span><span><span>building</span></span><span><span>interactive,</span></span><span><span>heavy</span></span><span><span>javascript</span></span><span><span>application</span></span><span><span>with</span></span><span><span>slick</span></span><span><span>animations.</span></span><span><span>I</span></span><span><span>mostly</span></span><span><span>work</span></span><span><span>with</span></span><span><span>react.</span></span><span><span>Passionate</span></span><span><span>about</span></span><span><span>programming</span></span><span><span>since</span></span><span><span>wrote</span></span><span><span>first</span></span><span><span>program</span></span><span><span>"Towers</span></span><span><span>of</span></span><span><span>Hanoi"</span></span><span><span>during</span></span><span><span>studies.</span></span><span><span>If</span></span><span><span>I'm</span></span><span><span>not</span></span><span><span>hacking,</span></span><span><span>I</span></span><span><span>spend</span></span><span><span>time</span></span><span><span>active.</span></span>
          </p>
        </div>
        <div className="about__description__img-container">
          <img draggable={false} src={photo} alt="Bartlomiej Wiejak" className="about__description__img" />
        </div>
      </div>
      <p className="about__description__paragraph--mobile">
        <span><span>I</span></span><span><span>enjoy</span></span><span><span>building</span></span><span><span>interactive,</span></span><span><span>heavy</span></span><span><span>javascript</span></span><span><span>application</span></span><span><span>with</span></span><span><span>slick</span></span><span><span>animations.</span></span><span><span>I</span></span><span><span>mostly</span></span><span><span>work</span></span><span><span>with</span></span><span><span>react.</span></span><span><span>Passionate</span></span><span><span>about</span></span><span><span>programming</span></span><span><span>since</span></span><span><span>wrote</span></span><span><span>first</span></span><span><span>program</span></span><span><span>"Towers</span></span><span><span>of</span></span><span><span>Hanoi"</span></span><span><span>during</span></span><span><span>studies.</span></span><span><span>If</span></span><span><span>I'm</span></span><span><span>not</span></span><span><span>hacking,</span></span><span><span>I</span></span><span><span>spend</span></span><span><span>time</span></span><span><span>active.</span></span>
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
              <Gsap /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--5"><div><img draggable={false} src={redux} alt="redux" /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--6"><div><img draggable={false} src={html5} alt="html5" /></div></div>
            <div className="about__skills__technologies__technology about__skills__technologies__technology--7"><div><img draggable={false} src={css3} alt="css3" /></div></div>
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
          <li><span><span><Button>Facebook</Button></span></span></li>
          <li><span><span><Button>Github</Button></span></span></li>
          <li><span><span><Button>Linkedin</Button></span></span></li>
        </ul>
      </div>
      <footer className='about__footer'>
        <div className="about__footer__copyright"><span><span>© 2020</span></span></div>
        <div className="about__footer__author"><span><span>by</span></span><span><span><Button>WieJak.</Button></span></span></div>
      </footer>
      <div className="about__go-to-work">
        <p><span><span>Go to</span></span></p>
        <HighlightText>Work</HighlightText>
      </div>
    </div>
  );
}

export default About;