import React, { useEffect, useContext } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import react from '../../../assets/about/technologies/react.png';
import js from '../../../assets/about/technologies/js.png';
import gsapLogo from '../../../assets/about/technologies/gsap.png';
import redux from '../../../assets/about/technologies/redux.png';
import firebase from '../../../assets/about/technologies/firebase.png';
import git from '../../../assets/about/technologies/git.png';
import node from '../../../assets/about/technologies/node.png';
import sass from '../../../assets/about/technologies/sass.png';
import webpack from '../../../assets/about/technologies/webpack.png';
import mongo from '../../../assets/about/technologies/mongo.png';
import threejs from '../../../assets/about/technologies/threejs.webp';
import isMobile from '../../../functions/isMobile';
import { LoadingContext } from '../../../context';

function Skills() {

  const { loaded } = useContext(LoadingContext)

  useEffect(() => {
    if (!loaded) return;
    let topTechnologies = '400px'
    if (isMobile()) {
      topTechnologies = '100px';
    }
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      gsap.to('.about__skills__technologies__technology--2 div', .7, {
        scrollTrigger: {
          trigger: '.about__skills__technologies__technology--2',
          start: `${topTechnologies} bottom`,
        },
        y: 0,
        x: 0,
        ease: 'power2.out'
      })
      gsap.to('.about__skills__technologies__technology--3 div', .7, {
        scrollTrigger: {
          trigger: '.about__skills__technologies__technology--2',
          start: `${topTechnologies} bottom`,
        },
        y: 0,
        x: 0,
        delay: .7,
        ease: 'power2.out'
      })
      gsap.to('.about__skills__technologies__technology--4 div', .7, {
        scrollTrigger: {
          trigger: '.about__skills__technologies__technology--4',
          start: `${topTechnologies} bottom`,
        },
        y: 0,
        x: 0,
        delay: .7,
        ease: 'power2.out'
      })
      gsap.to('.about__skills__technologies__technology--5 div', .7, {
        scrollTrigger: {
          trigger: '.about__skills__technologies__technology--4',
          start: `${topTechnologies} bottom`,
        },
        y: 0,
        x: 0,
        ease: 'power2.out'
      })
      gsap.to('.about__skills__technologies__technology--6 div', .7, {
        scrollTrigger: {
          trigger: '.about__skills__technologies__technology--4',
          start: `${topTechnologies} bottom`,
        },
        y: 0,
        x: 0,
        delay: .7,
        ease: 'power2.out'
      })
      gsap.to('.about__skills__technologies__technology--7 div', .7, {
        scrollTrigger: {
          trigger: '.about__skills__technologies__technology--7',
          start: `${topTechnologies} bottom`,
        },
        y: 0,
        x: 0,
        ease: 'power2.out'
      })
      gsap.to('.about__skills__technologies__technology--8 div', .7, {
        scrollTrigger: {
          trigger: '.about__skills__technologies__technology--7',
          start: `${topTechnologies} bottom`,
        },
        y: 0,
        x: 0,
        delay: .7,
        ease: 'power2.out'
      })
      gsap.to('.about__skills__technologies__technology--9 div', .7, {
        scrollTrigger: {
          trigger: '.about__skills__technologies__technology--7',
          start: `${topTechnologies} bottom`,
        },
        y: 0,
        x: 0,
        delay: 1.4,
        ease: 'power2.out'
      })
      gsap.to('.about__skills__technologies__technology--10 div', .7, {
        scrollTrigger: {
          trigger: '.about__skills__technologies__technology--7',
          start: `${topTechnologies} bottom`,
        },
        y: 0,
        x: 0,
        delay: 2.1,
        ease: 'power2.out'
      })
      gsap.to('.about__skills__technologies__technology--11 div', .7, {
        scrollTrigger: {
          trigger: '.about__skills__technologies__technology--11',
          start: `${topTechnologies} bottom`,
        },
        y: 0,
        x: 0,
        delay: .7,
        ease: 'power2.out'
      })
      gsap.to('.about__skills__technologies__technology--12 div', .7, {
        scrollTrigger: {
          trigger: '.about__skills__technologies__technology--11',
          start: `${topTechnologies} bottom`,
        },
        y: 0,
        x: 0,
        delay: .7,
        ease: 'power2.out'
      })
    }, 700)
  }, [loaded])

  return (
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
  )
}

export default Skills
