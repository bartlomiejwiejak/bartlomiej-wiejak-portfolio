import React, { useContext, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useHistory } from 'react-router-dom';

import { LoadingContext, RoutingContext } from '../../../context';
import { useToggle, useLockBodyScroll } from 'react-use';
import { showInterface } from '../../../animations/interface';
import scrollTo from '../../../functions/scrollTo';
import { hideInterface } from '../../../animations/interface';
import scrollInstant from '../../../functions/scrollInstant';
import { scrollbarAppear, scrollbarHide } from '../../../animations/scrollBar';
import { cursorBackToNormal, cursorHide } from '../../../animations/cursor';
import projectContentAnimation from '../../../animations/projectContent';

const ProjectHeader = ({ src, titleLeft, titleRight, setBodyHeight, projectIndex }) => {

  const { loaded } = useContext(LoadingContext);
  const { animating, path, setAnimating, setLastProject, lastProject } = useContext(RoutingContext);
  const history = useHistory();
  const [isMounted, setIsMounted] = useState(false);

  const [toggle, setToggle] = useToggle(true);
  useLockBodyScroll(toggle)

  useEffect(() => {
    document.querySelector('.background').style.setProperty('background-color', 'var(--light)');
    if (isMounted) return;
    if (loaded) {
      scrollInstant(0)
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      if (lastProject === null) {
        let translatesLeft = {}
        let translatesRight = {}
        if (navigator.userAgent.indexOf("Firefox") > -1) {
          translatesLeft = { x: '-80%', y: '50%' }
          translatesRight = { x: '80%', y: '-50%' }
        }
        tl.to('.project-header__title--left', .5, { rotateY: '-15deg', delay: .5 })
          .to('.project-header__title--right', .5, { rotateY: '15deg', delay: -.5 })
          .to('.project-header__title--left, .project-header__title--right ', .5, { rotateY: 0 })
          .to('.project-header__title--left', 1, { bottom: '50%', left: '50%', transform: 'translate3d(-80%, 50%,0) scale(0.5)', ...translatesLeft, delay: -0.5 })
          .to('.project-header__title--right', 1, { top: '50%', right: '50%', transform: 'translate3d(80%, -50%, 0) scale(0.5)', ...translatesRight, delay: -1 })
          .to('.project-header__img', 1, {
            scale: 2, delay: -1, onComplete: () => { showInterface(); cursorBackToNormal() }
          })
          .to('.project-header__scroll-indicator span', 1, {
            y: 0, opacity: 1, onComplete: () => {
              setToggle(false)
              setIsMounted(true)
              setBodyHeight();
              scrollbarAppear();
              projectContentAnimation();
            }
          })
      }
      else {
        gsap.set('.project-header__img', { scale: 2 })
        tl.to('.project-header', 1.5, {
          delay: .3,
          transform: 'scaleX(1) scaleY(1) translate3d(0,0,0)', ease: 'power2.out', onComplete: () => {
            showInterface();
            cursorBackToNormal();
            scrollbarAppear();
          }
        })
          .to('.project-header__scroll-indicator span', 1, {
            y: 0, opacity: 1, onComplete: () => {
              setToggle(false);
              setBodyHeight();
              setIsMounted(true)
              projectContentAnimation();
            }
          })
      }
    }
  }
    , [setBodyHeight, setToggle, loaded, lastProject, isMounted])

  useEffect(() => {
    if (animating && path !== '/work') {
      setToggle(true)
      hideInterface()
      cursorHide()
      if (navigator.userAgent.indexOf("Firefox") > -1) {
        scrollInstant(0);
        scrollbarHide();
        gsap.to('.project-header', .75, {
          y: '-100%', scaleX: 0, scaleY: .5, delay: 1.7, onComplete: () => setTimeout(() => {
            setAnimating(false)
            if (path !== '/about' && path !== '/') {
              setLastProject(projectIndex)
            } else {
              setLastProject(null)
            }
            history.push(path)
          }, 200)
        })
      } else {
        scrollTo(0, () => {
          scrollbarHide();
          gsap.to('.project-header', .75, {
            y: '-100%', scaleX: .3, scaleY: .5, delay: 1.7, onComplete: () => setTimeout(() => {
              setAnimating(false)
              if (path !== '/about' && path !== '/') {
                setLastProject(projectIndex)
              } else {
                setLastProject(null)
              }
              history.push(path)
            }, 200)
          })
        })
      }
    }
  }, [animating, path, history, setAnimating, setToggle, projectIndex, setLastProject])

  useEffect(() => {
    if (animating && path === '/work') {
      hideInterface()
      cursorHide()
      setToggle(true)
      if (navigator.userAgent.indexOf("Firefox") > -1) {
        scrollInstant(0);
        scrollbarHide();
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
        tl.to('.project-header__scroll-indicator span', 1, { y: '100%', autoAlpha: 0 })
          .to('.project-header__title--left', .5, { rotateY: '15deg', delay: .5 })
          .to('.project-header__title--right', .5, { rotateY: '-15deg', delay: -.5 })
          .to('.project-header__title--left, .project-header__title--right ', .5, { rotateY: 0 })
          .to('.project-header__title--left', 1, { bottom: 0, left: 0, transform: 'translate3d(0, 0, 0) scale(1)', delay: -0.5 })
          .to('.project-header__title--right', 1, { top: 0, right: 0, transform: 'translate3d(0, 0, 0) scale(1)', delay: -1 })
          .to('.project-header__img', 1, {
            scale: 1, delay: -1, onComplete: () => {
              setLastProject(projectIndex)
              setAnimating(false)
              history.push(path)
            }
          })
      } else {
        scrollTo(0, () => {
          scrollbarHide();
          const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
          tl.to('.project-header__scroll-indicator span', 1, { y: '100%', autoAlpha: 0 })
            .to('.project-header__title--left', .5, { rotateY: '15deg', delay: .5 })
            .to('.project-header__title--right', .5, { rotateY: '-15deg', delay: -.5 })
            .to('.project-header__title--left, .project-header__title--right ', .5, { rotateY: 0 })
            .to('.project-header__title--left', 1, { bottom: 0, left: 0, transform: 'translate3d(0, 0, 0) scale(1)', delay: -0.5 })
            .to('.project-header__title--right', 1, { top: 0, right: 0, transform: 'translate3d(0, 0, 0) scale(1)', delay: -1 })
            .to('.project-header__img', 1, {
              scale: 1, delay: -1, onComplete: () => {
                setLastProject(projectIndex)
                setAnimating(false)
                history.push(path)
              }
            })
        })
      }
    }
  }, [animating, path, setToggle, setAnimating, history, setLastProject, projectIndex])

  const styleRef = useRef({})
  if (lastProject !== null) {
    styleRef.current = {
      projectHeader: { transform: 'scaleX(.3) scaleY(0.5) translate3d(0,200%,0)' },
      projectImg: { transform: 'translate3d(-50%, -50%, 0)' },
      projectTitleLeft: { bottom: '50%', left: '50%', transform: 'translate3d(-80%, 50%,0) scale(0.5)' },
      projectTitleRight: { top: '50%', y: '-50%', right: '50%', transform: 'translate3d(80%, -50%,0) scale(0.5)' }
    }
  }
  return (
    <header style={styleRef.current.projectHeader} className='project-header'>
      <img style={styleRef.current.projectImg} className='project-header__img' src={src} alt="project" />
      <h1 style={styleRef.current.projectTitleLeft} className='project-header__title project-header__title--left'>{titleLeft}</h1>
      <h1 style={styleRef.current.projectTitleRight} className='project-header__title project-header__title--right'>{titleRight}</h1>
      <div className="project-header__scroll-indicator"><span>Scroll<i className="fas fa-long-arrow-alt-down"></i></span></div>
    </header>
  );
}

export default ProjectHeader;
