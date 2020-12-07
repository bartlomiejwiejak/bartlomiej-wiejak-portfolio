import React, { useContext, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useHistory } from 'react-router-dom';

import { LoadingContext, RoutingContext } from '../../../context';
import { showInterface } from '../../../animations/interface';
import scrollTo from '../../../functions/scrollTo';
import { hideInterface } from '../../../animations/interface';
import scrollInstant from '../../../functions/scrollInstant';
import { scrollbarAppear, scrollbarHide } from '../../../animations/scrollBar';
import { cursorBackToNormal, cursorHide } from '../../../animations/cursor';
import projectContentAnimation from '../../../animations/projectContent';

const ProjectHeader = ({ titleLeft, titleRight, projectIndex }) => {

  const { loadingState } = useContext(LoadingContext);
  const { routingState, dispatch } = useContext(RoutingContext);
  const history = useHistory();
  const [isMounted, setIsMounted] = useState(false);
  const leavingToWorkRef = useRef(false);


  useEffect(() => {
    if (isMounted) return;
    if (loadingState.isLoaded) {
      gsap.set('body', { overflow: 'hidden' });
      scrollInstant(0)
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      dispatch({ type: 'SET_CURRENT_SCROLL_INDEX', payload: projectIndex });
      if (routingState.lastProject === null) {

        tl.to('.project-header__title--left', .5, { rotateY: '-20deg', delay: .5 })
          .to('.project-header__title--right', .5, { rotateY: '20deg', delay: -.5 })
          .to('.project-header__title--left, .project-header__title--right ', .5, { rotateY: 0 })
          .to('.project-header__title--left', 1, { bottom: '50%', left: '50%', scale: 0.5, x: '-80%', y: '50%', delay: -0.5 })
          .to('.project-header__title--right', 1, {
            top: '50%', right: '50%', scale: 0.5, x: '80%', y: '-50%', delay: -1, onComplete: () => { showInterface(); cursorBackToNormal() }
          })
          .to('.project-header__scroll-indicator span', 1, {
            y: 0, opacity: 1, onComplete: () => {
              gsap.set('body', { overflow: 'auto' });
              setIsMounted(true)
              scrollbarAppear();
              projectContentAnimation();
            }
          })
      }
      else {
        tl.to('.project-header__title div', 1, {
          delay: 3.3,
          y: 0, autoAlpha: 1, ease: 'power2.out', onComplete: () => {
            showInterface();
            cursorBackToNormal();
            scrollbarAppear();
          }
        })
          .to('.project-header__scroll-indicator span', 1, {
            y: 0, opacity: 1, onComplete: () => {
              gsap.set('body', { overflow: 'auto' });
              setIsMounted(true)
              projectContentAnimation();
            }
          })
      }
    }
  }
    , [loadingState.isLoaded, routingState.lastProject, isMounted, routingState.path, dispatch, projectIndex])

  useEffect(() => {
    if (routingState.animating && routingState.path !== '/work') {
      gsap.set('body', { overflow: 'hidden' });
      hideInterface()
      cursorHide()
      scrollTo(0, () => {
        scrollbarHide();
        dispatch({ type: 'SET_LAST_PROJECT', payload: projectIndex });
        gsap.to('.project-header__scroll-indicator span, .project-header__title div', 1, { y: '100%', ease: 'power2.out', autoAlpha: 0 })
        setTimeout(() => {
          dispatch({ type: 'SET_ANIMATING', payload: false })
          history.push(routingState.path)
          if (routingState.path === '/about' || routingState.path === '/') {
            dispatch({ type: 'SET_LAST_PROJECT', payload: null });
          }
        }, 2500)
      })
    }
  }, [routingState.animating, routingState.path, history, dispatch, projectIndex])

  useEffect(() => {
    if (routingState.animating && routingState.path === '/work' && !leavingToWorkRef.current) {
      hideInterface()
      cursorHide()
      gsap.set('body', { overflow: 'hidden' });
      scrollTo(0, () => {
        let positionY = '0%';
        if (window.innerWidth <= 460) {
          positionY = '5%'
        }
        scrollbarHide();
        leavingToWorkRef.current = true;
        dispatch({ type: 'SET_LAST_PROJECT', payload: projectIndex });
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
        let styles = { y: '0%' };
        if (classRef.current === 'project-header--animated') {
          styles = { yPercent: 0 };
        }
        tl.to('.project-header__scroll-indicator span', 1, { y: '100%', autoAlpha: 0 })
          .to('.project-header__title--left', .5, { rotateY: '45deg', delay: .5 })
          .to('.project-header__title--right', .5, { rotateY: '-45deg', delay: -.5 })
          .to('.project-header__title--left, .project-header__title--right ', .5, { rotateY: 0 })
          .to('.project-header__title--left', 1, { bottom: positionY, left: '0%', x: '0%', y: '0%', scale: 1, delay: -.5 })
          .to('.project-header__title--right', 1, {
            top: positionY, right: '0%', x: '0%', ...styles, scale: 1, delay: -1, onComplete: () => {
              dispatch({ type: 'SET_ANIMATING', payload: false })
              history.push(routingState.path)
            }
          })
      })
    }
  }, [routingState.animating, routingState.path, dispatch, history, projectIndex])
  const classRef = useRef('');
  if (routingState.lastProject !== null && !routingState.animating) {
    classRef.current = 'project-header--animated';
  }
  return <header className={`project-header ${classRef.current}`}>
    <h1 className='project-header__title project-header__title--left'><div>{titleLeft}</div></h1>
    <h1 className='project-header__title project-header__title--right'><div>{titleRight}</div></h1>
    <div className="project-header__scroll-indicator"><span>Scroll<i className="fas fa-long-arrow-alt-down"></i></span></div>
  </header>
}

export default ProjectHeader;