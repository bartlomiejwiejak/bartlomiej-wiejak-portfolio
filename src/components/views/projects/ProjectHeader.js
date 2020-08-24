import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { useHistory } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { LoadingContext, RoutingContext } from '../../../context';
import { useToggle, useLockBodyScroll } from 'react-use';
import { showInterface } from '../../../animations/interface';
import scrollTo from '../../../functions/scrollTo';
import { hideInterface } from '../../../animations/interface';
import scrollInstant from '../../../functions/scrollInstant';
import { scrollbarAppear, scrollbarHide } from '../../../animations/scrollBar';
import { cursorBackToNormal, cursorHide } from '../../../animations/cursor';

const ProjectHeader = ({ src, titleLeft, titleRight, setBodyHeight, projectIndex }) => {

  const { loaded } = useContext(LoadingContext);
  const { animating, path, setAnimating, setLastProject } = useContext(RoutingContext);
  const history = useHistory();

  const [toggle, setToggle] = useToggle(true);
  useLockBodyScroll(toggle)

  useEffect(() => {
    document.querySelector('.background').style.setProperty('background-color', 'var(--light)');
    if (loaded) {
      scrollInstant(0)
      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.to('.project-header__title--left', .5, { rotateY: '-15deg', delay: .5 })
        .to('.project-header__title--right', .5, { rotateY: '15deg', delay: -.5 })
        .to('.project-header__title--left, .project-header__title--right ', .5, { rotateY: 0 })
        .to('.project-header__title--left', 1, { bottom: '50%', left: '50%', y: '50%', x: '-80%', scale: .5, delay: -0.5 })
        .to('.project-header__title--right', 1, { top: '50%', y: '-50%', right: '50%', x: '80%', scale: .5, delay: -1 })
        .to('.project-header__img', 1, {
          scale: 2, delay: -1, onComplete: () => { showInterface(); cursorBackToNormal() }
        })
        .to('.project-header__scroll-indicator span', 1, {
          y: 0, opacity: 1, onComplete: () => {
            setToggle(false)
            setBodyHeight();
            scrollbarAppear();
            document.querySelectorAll('.project-content span span').forEach(span => {
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
            gsap.to('.project-content__next-project .highlight-text', 1, {
              y: 0, autoAlpha: 1, scrollTrigger: {
                trigger: '.project-content__next-project > span',
                start: 'bottom bottom'
              }
            })
            gsap.to('.project-content__line', {
              x: '-100%', scrollTrigger: {
                trigger: '.project-content__line',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 5
              }
            })
            document.querySelectorAll('.project-content__image').forEach(item => {
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
        })
    }
  }, [setBodyHeight, setToggle, loaded])

  useEffect(() => {
    if (animating && path !== '/work') {
      setToggle(true)
      hideInterface()
      cursorHide()
      scrollTo(0, () => {
        scrollbarHide();
        gsap.to('.project-header', .75, {
          y: '-100%', scaleX: .1, scaleY: .5, delay: 1.7, onComplete: () => setTimeout(() => {
            setAnimating(false)
            history.push(path)
          }, 200)
        })
      })
    }
  }, [animating, path, history, setAnimating, setToggle])

  useEffect(() => {
    if (animating && path === '/work') {
      hideInterface()
      cursorHide()
      setToggle(true)
      scrollTo(0, () => {
        scrollbarHide();
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
        tl.to('.project-header__scroll-indicator span', 1, { y: '100%', autoAlpha: 0 })
          .to('.project-header__title--left', .5, { rotateY: '15deg', delay: .5 })
          .to('.project-header__title--right', .5, { rotateY: '-15deg', delay: -.5 })
          .to('.project-header__title--left, .project-header__title--right ', .5, { rotateY: 0 })
          .to('.project-header__title--left', 1, { bottom: 0, left: 0, y: '0%', x: '0%', scale: 1, delay: -0.5 })
          .to('.project-header__title--right', 1, { top: 0, y: '0%', right: 0, x: '0%', scale: 1, delay: -1 })
          .to('.project-header__img', 1, {
            scale: 1, delay: -1, onComplete: () => {
              setLastProject(projectIndex)
              setAnimating(false)
              history.push(path)
            }
          })
      })
    }
  }, [animating, path, setToggle, setAnimating, history, setLastProject, projectIndex])


  return (
    <header className='project-header'>
      <img className='project-header__img' src={src} alt="project" />
      <h1 className='project-header__title project-header__title--left'>{titleLeft}</h1>
      <h1 className='project-header__title project-header__title--right'>{titleRight}</h1>
      <div className="project-header__scroll-indicator"><span>Scroll<i className="fas fa-long-arrow-alt-down"></i></span></div>
    </header>
  );
}

export default ProjectHeader;
