import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { LoadingContext } from '../../../../context';
import ProjectHeader from '../ProjectHeader';
import headerImg from '../../../../assets/projects/burger/header.png';
import Content from './Content';
import { cursorBackToNormal } from '../../../../animations/cursor';

const Burger = ({ setBodyHeight }) => {
  const { loaded } = useContext(LoadingContext);

  useEffect(() => {
    if (loaded) {
      cursorBackToNormal();
      gsap.registerPlugin(ScrollTrigger)
      document.querySelectorAll('.burger span span').forEach(span => {
        if (span.classList.contains('highlight-text')) {
          return;
        }
        gsap.to(span, 1.5, {
          y: 0, autoAlpha: 1, delay: .2, scrollTrigger: {
            trigger: span,
            start: '100px bottom'
          }
        })
      })
      gsap.to('.burger__next-project .highlight-text', 1, {
        y: 0, autoAlpha: 1, scrollTrigger: {
          trigger: '.burger__next-project > span',
          start: 'bottom bottom'
        }
      })
      document.querySelectorAll('.burger .content-wrapper > *').forEach(item => {
        gsap.from(item, {
          scale: 1.1, scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      })
    }
  }, [loaded])

  return (
    <div className='burger'>
      {ReactDOM.createPortal(<ProjectHeader src={headerImg} titleLeft='Burger' titleRight='Project' setBodyHeight={setBodyHeight} projectIndex={1} />, document.getElementById('root'))}
      <div className='burger__header'></div>
      <Content />
    </div>
  );
}

export default Burger;