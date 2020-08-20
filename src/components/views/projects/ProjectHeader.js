import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { useHistory } from 'react-router-dom';

import { LoadingContext, RoutingContext } from '../../../context';
import { useToggle, useLockBodyScroll } from 'react-use';
import showInterface from '../../../animations/showInterface';
import scrollTo from '../../../functions/scrollTo';
import hideInterface from '../../../animations/hideInterface';
import scrollInstant from '../../../functions/scrollInstant';

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
      document.querySelector('html').classList.add('scrollbar-light')
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.to('.project-header__title--left', .5, { rotateY: '-15deg', delay: .5 })
        .to('.project-header__title--right', .5, { rotateY: '15deg', delay: -.5 })
        .to('.project-header__title--left, .project-header__title--right ', .5, { rotateY: 0 })
        .to('.project-header__title--left', 1, { bottom: '50%', left: '50%', y: '50%', x: '-80%', scale: .5, delay: -0.5 })
        .to('.project-header__title--right', 1, { top: '50%', y: '-50%', right: '50%', x: '80%', scale: .5, delay: -1 })
        .to('.project-header__img', 1, { scale: 2, delay: -1, onComplete: showInterface })
        .to('.project-header__scroll-indicator span', 1, {
          y: 0, opacity: 1, onComplete: () => {
            setToggle(false)
            setBodyHeight();
          }
        })
    }
  }, [setBodyHeight, setToggle, loaded])

  useEffect(() => {
    if (animating && path !== '/work') {
      setToggle(true)
      hideInterface()
      scrollTo(0, () => {
        gsap.to('.project-header', .75, {
          y: '-100%', scale: .3, delay: 1.7, onComplete: () => {
            setAnimating(false)
            history.push(path)
          }
        })
      })
    }
  }, [animating, path, history, setAnimating, setToggle])

  useEffect(() => {
    if (animating && path === '/work') {
      hideInterface()
      setToggle(true)
      scrollTo(0, () => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
        tl.to('.project-header__scroll-indicator span', 1, { y: '100%', autoAlpha: 0 })
          .to('.project-header__title--left', .5, { rotateY: '15deg', delay: .5 })
          .to('.project-header__title--right', .5, { rotateY: '-15deg', delay: -.5 })
          .to('.project-header__title--left, .project-header__title--right ', .5, { rotateY: 0 })
          .to('.project-header__title--left', 1, { bottom: 0, left: 0, y: '0%', x: '0%', scale: 1, delay: -0.5 })
          .to('.project-header__title--right', 1, { top: 0, y: '0%', right: 0, x: '0%', scale: 1, delay: -1 })
          .to('.project-header__img', 1, {
            scale: 1, delay: -1, onComplete: () => {
              setLastProject(1)
              setAnimating(false)
              history.push(path)
            }
          })
      })
    }
  }, [animating, path, setToggle, setAnimating, history, setLastProject])


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
