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
import { toLight } from '../../../functions/handleBackground';

const ProjectHeader = ({ titleLeft, titleRight, projectIndex }) => {

  const { loaded } = useContext(LoadingContext);
  const { animating, path, setAnimating, setLastProject, lastProject, setCurrentScrollIndex } = useContext(RoutingContext);
  const history = useHistory();
  const [isMounted, setIsMounted] = useState(false);
  const leavingToWorkRef = useRef(false);

  const [toggle, setToggle] = useToggle(true);
  useLockBodyScroll(toggle)

  useEffect(() => {
    if (isMounted) return;
    if (loaded) {
      scrollInstant(0)
      const timeout = toLight(500);
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      setCurrentScrollIndex(projectIndex);
      setTimeout(() => {
        if (lastProject === null) {
          let translatesLeft = {}
          let translatesRight = {}
          if (navigator.userAgent.indexOf("Firefox") > -1) {
            translatesLeft = { x: '-80%', y: '50%' }
            translatesRight = { x: '80%', y: '-50%' }
          }
          tl.to('.project-header__title--left', .5, { rotateY: '-20deg', delay: .5 })
            .to('.project-header__title--right', .5, { rotateY: '20deg', delay: -.5 })
            .to('.project-header__title--left, .project-header__title--right ', .5, { rotateY: 0 })
            .to('.project-header__title--left', 1, { bottom: '50%', left: '50%', transform: 'translate3d(-80%, 50%,0) scale(0.5)', ...translatesLeft, delay: -0.5 })
            .to('.project-header__title--right', 1, {
              top: '50%', right: '50%', transform: 'translate3d(80%, -50%, 0) scale(0.5)', ...translatesRight, delay: -1, onComplete: () => { showInterface(); cursorBackToNormal() }
            })
            .to('.project-header__scroll-indicator span', 1, {
              y: 0, opacity: 1, onComplete: () => {
                setToggle(false)
                setIsMounted(true)
                scrollbarAppear();
                projectContentAnimation();
              }
            })
        }
        else {
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
                setIsMounted(true)
                projectContentAnimation();
              }
            })
        }
      }, timeout)
    }
  }
    , [setToggle, loaded, lastProject, isMounted, path, setCurrentScrollIndex, projectIndex])

  useEffect(() => {
    if (animating && path !== '/work') {
      setToggle(true)
      hideInterface()
      cursorHide()
      scrollTo(0, () => {
        scrollbarHide();
        setLastProject(projectIndex);
        gsap.to('.project-header__scroll-indicator span, .project-header__title div', 1, { y: '100%', ease: 'power2.out', autoAlpha: 0 })
        setTimeout(() => {
          setAnimating(false)
          history.push(path)
          if (path === '/about' || path === '/') {
            setLastProject(null);
          }
        }, 2500)
      })
    }
  }, [animating, path, history, setAnimating, setToggle, projectIndex, setLastProject])

  useEffect(() => {
    if (animating && path === '/work' && !leavingToWorkRef.current) {
      hideInterface()
      cursorHide()
      setToggle(true)
      scrollTo(0, () => {
        let positionY = 0;
        if (window.innerWidth <= 460) {
          positionY = '5%'
        }
        scrollbarHide();
        leavingToWorkRef.current = true;
        setLastProject(projectIndex);
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

        tl.to('.project-header__scroll-indicator span', 1, { y: '100%', autoAlpha: 0 })
          .to('.project-header__title--left', 1, { bottom: positionY, left: 0, transform: 'translate3d(0, 0, 0) scale(1)' })
          .to('.project-header__title--right', 1, {
            top: positionY, right: 0, transform: 'translate3d(0, 0, 0) scale(1)', delay: -1, onComplete: () => {
              setAnimating(false)
              history.push(path)
            }
          })
      })
    }
  }, [animating, path, setToggle, setAnimating, history, setLastProject, projectIndex])

  let content = <header className='project-header'>
    <h1 className='project-header__title project-header__title--left'><div>{titleLeft}</div></h1>
    <h1 className='project-header__title project-header__title--right'><div>{titleRight}</div></h1>
    <div className="project-header__scroll-indicator"><span>Scroll<i className="fas fa-long-arrow-alt-down"></i></span></div>
  </header>

  if (lastProject !== null && !animating) {
    const style = {
      projectHeader: { transform: 'scaleX(.3) scaleY(0.5) translate3d(0,200%,0)' },
      projectTitleLeft: { bottom: '50%', left: '50%', transform: 'translate3d(-80%, 50%,0) scale(0.5)' },
      projectTitleRight: { top: '50%', y: '-50%', right: '50%', transform: 'translate3d(80%, -50%,0) scale(0.5)' }
    }
    content = <header className='project-header'>
      <h1 style={style.projectHeader} className='project-header__title project-header__title--left'><div>{titleLeft}</div></h1>
      <h1 style={style.projectTitleRight} className='project-header__title project-header__title--right'><div>{titleRight}</div></h1>
      <div style={style.projectTitleRight} className="project-header__scroll-indicator"><span>Scroll<i className="fas fa-long-arrow-alt-down"></i></span></div>
    </header>
  }
  return content;
}

export default ProjectHeader;