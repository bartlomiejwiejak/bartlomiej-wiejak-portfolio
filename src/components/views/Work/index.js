import React, { useEffect, useContext, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { useLockBodyScroll } from 'react-use';
import gsap from 'gsap';

import { showInterface } from '../../../animations/interface';
import { LoadingContext, RoutingContext } from '../../../context';
import Project from './Project';
import burger from '../../../assets/projects/burger/header.png';
import scrollTo from '../../../functions/scrollTo';
import { hideInterface } from '../../../animations/interface';
import incoming from '../../../assets/projects/incoming.jpg';
import { cursorMultiDot } from '../../../animations/cursor';
import scrollInstant from '../../../functions/scrollInstant';
import WorkPagination from './WorkPagination';
import Circle from './Circle';
import { cursorBackToNormal } from '../../../animations/cursor';

const Work = ({ setBodyHeight }) => {
  const { loaded } = useContext(LoadingContext);
  const { animating, path, setAnimating, lastProject, setLastProject } = useContext(RoutingContext)
  const canScrollRef = useRef(true)
  const currentProjectIndexRef = useRef(0);
  const initialYRef = useRef(0);
  const history = useHistory();
  const initialMouseClientYRef = useRef(0);
  const projectsRef = useRef(null);

  if (lastProject !== null) {
    currentProjectIndexRef.current = lastProject;
  }

  useEffect(() => {
    projectsRef.current = document.querySelectorAll('.project')
  }, [])

  const slideHandle = useCallback((direction) => {
    if (direction === 1) {
      const isLastProject = currentProjectIndexRef.current === projectsRef.current.length - 1;
      if (isLastProject) return;
    }
    if (direction === -1) {
      const firstProject = currentProjectIndexRef.current === 0;
      if (firstProject) return;
    }
    canScrollRef.current = false;
    if (navigator.userAgent.indexOf("Firefox") > -1) {
      if (direction > 0) {
        gsap.to('.circle', 1, { rotate: '+=90deg', delay: .5, ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.5, { y: 0 }, { y: '-100%', ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current + 1].querySelectorAll('.project__title div'), 1.5, { y: '100%' }, { y: 0, delay: .5, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
      }
      if (direction < 0) {
        gsap.to('.circle', 1, { rotate: '-=90deg', delay: .5, ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.5, { y: 0 }, { y: '100%', ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current - 1].querySelectorAll('.project__title div'), 1.5, { y: '-100%' }, { y: 0, delay: .5, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
      }
    } else {
      if (direction > 0) {
        gsap.to('.circle', 1, { rotate: '+=90deg', delay: .5, ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,-100%,0)', ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current + 1].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,100%,0)' }, { transform: 'translate3d(0,0,0)', delay: .5, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
      }
      if (direction < 0) {
        gsap.to('.circle', 1, { rotate: '-=90deg', delay: .5, ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,100%,0)', ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current - 1].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,-100%,0)' }, { transform: 'translate3d(0,0,0)', delay: .5, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
      }
    }
    setTimeout(() => {
      currentProjectIndexRef.current += direction;
      gsap.to('.work__pagination__active', 1, { y: `${-34 * (currentProjectIndexRef.current)}px` })
      window.scrollTo({
        top: projectsRef.current[currentProjectIndexRef.current].offsetTop,
        behavior: 'smooth'
      })
    }, 300)
  }, [])

  const slider = useCallback((event) => {
    if (!canScrollRef.current) return;
    const direction = event.deltaY < 0 ? -1 : 1;

    slideHandle(direction)
  }, [slideHandle])

  const swipeListen = useCallback((event) => {
    if (!canScrollRef.current) return;
    const currentY = event.touches[0].clientY;
    if (Math.abs(currentY - initialYRef.current) < 100) return;
    const direction = initialYRef.current - currentY > 0 ? 1 : -1;

    slideHandle(direction)
  }, [slideHandle])

  const swiper = useCallback((event) => {
    if (!canScrollRef.current) return;
    initialYRef.current = event.touches[0].clientY;
  }, [])

  const swipeMouseListen = useCallback((event) => {
    if (!canScrollRef.current) return;
    const currentY = event.clientY;
    if (Math.abs(currentY - initialMouseClientYRef.current) < 100) return;
    const direction = initialMouseClientYRef.current - currentY > 0 ? 1 : -1;

    slideHandle(direction)
  }, [slideHandle])

  const swiperMouse = useCallback((event) => {
    if (!canScrollRef.current) return;
    initialMouseClientYRef.current = event.clientY;
  }, [])

  const removeListeners = useCallback(() => {
    document.removeEventListener('wheel', slider)
    document.removeEventListener('touchstart', swiper)
    document.removeEventListener('touchmove', swipeListen)
    document.removeEventListener('mousedown', cursorMultiDot)
    document.removeEventListener('mousedown', swiperMouse)
    document.removeEventListener('mouseup', swipeMouseListen)
  }, [slider, swiper, swipeListen, swiperMouse, swipeMouseListen])

  const addListeners = useCallback(() => {
    document.addEventListener('wheel', slider)
    document.addEventListener('touchstart', swiper)
    document.addEventListener('touchmove', swipeListen)
    document.addEventListener('mousedown', cursorMultiDot)
    document.addEventListener('mousedown', swiperMouse)
    document.addEventListener('mouseup', swipeMouseListen)
  }, [slider, swiper, swipeListen, swiperMouse, swipeMouseListen])

  useEffect(() => {
    if (animating && (path === '/' || path === '/about')) {
      removeListeners();
      gsap.set('.project__title div', { y: 0 })
      gsap.to('.work__pagination__active', 1, { y: 0, ease: 'power2.out' })
      gsap.to('.project .button', 1, { y: '100%', ease: 'power2.out' })
      hideInterface();
      if (currentProjectIndexRef.current !== 0) {
        gsap.to('.circle', .5, { rotate: '-265deg', ease: 'power2.out' })
      }
      scrollTo(0, () => {
        setTimeout(() => {
          gsap.to('.circle', .5, { y: '100%', x: '100%', ease: 'power2.out' })
          gsap.to('.work__pagination > div', .5, { y: '100%', ease: 'power2.out' })
          setTimeout(() => {
            gsap.to('.project__title--down', 1, { x: '300%', ease: 'power2.out' })
            gsap.to('.project__title--up', 1, { x: '-300%', ease: 'power2.out' })
            gsap.to('.project:nth-child(1) .project__img-container', 1, {
              y: '-200%', scale: .5, onComplete: () => {
                setAnimating(false)
                history.push(path)
              }
            })
          }, 700)
        }, 300)
      })
    }
  }, [animating, path, slider, history, setAnimating, removeListeners])

  useLockBodyScroll(true)
  useEffect(() => {
    setBodyHeight()
  }, [setBodyHeight])

  useEffect(() => {
    let timeout;
    if (loaded && lastProject === null) {
      scrollInstant(0);
      cursorBackToNormal()
      document.querySelector('.background').style.setProperty('background-color', 'var(--light)');
      setTimeout(() => {
        document.querySelector('.project__img-reveal').style.setProperty('background-color', 'var(--light)');
        gsap.set('.project__img', { opacity: 1 })
        gsap.to('.project__img-reveal', 1.4, { width: 0 })
        gsap.from('.project__img', 1.4, { scale: 1.6 })
      }, 500)
      timeout = setTimeout(() => {
        showInterface();
        gsap.to('.circle', 1, { y: '50%', x: '50%' })
        gsap.to('.project__title div', 1, { y: 0 })
        gsap.to('.work__pagination > div', 1, { y: 0 })
        gsap.to('.project .button', 1, {
          y: 0, onComplete: addListeners
        })
      }, 2000)
    }
    return () => {
      removeListeners();
      clearTimeout(timeout)
    }
  }, [loaded, slider, swiper, swipeListen, removeListeners, lastProject, addListeners])

  useEffect(() => {
    if (lastProject !== null) {
      cursorBackToNormal()
      scrollInstant(lastProject * window.innerHeight)
      document.querySelector('.background').style.setProperty('background-color', 'var(--light)');
      showInterface();
      gsap.to('.circle', 1, { y: '50%', x: '50%', rotate: `+=${90 * lastProject}deg` })
      gsap.to('.work__pagination > div', 1, { y: 0 })
      gsap.set('.work__pagination__active', { y: -lastProject * 34 })
      gsap.to('.project .button', 1, {
        y: 0, onComplete: addListeners
      })
    }
  }, [lastProject, slider, swipeListen, swiper, addListeners])

  useEffect(() => {
    return () => {
      setLastProject(null)
    }
  }, [setLastProject])

  return (
    <div className='work'>
      {ReactDOM.createPortal(<WorkPagination />, document.getElementById('root'))}
      {ReactDOM.createPortal(<Circle />, document.getElementById('root'))}
      <Project src={burger} titleUp='Project' titleDown='Burger' url='/work/burger-project' removeListeners={removeListeners} />
      <Project src={burger} titleUp='Project' titleDown='Burger' url='/work/burger-project' removeListeners={removeListeners} />
      <Project src={incoming} titleUp='Soon' titleDown='Coming' url='/work' inactive={true} />
      <Project src={incoming} titleUp='Soon' titleDown='Coming' url='/work' inactive={true} />
    </div>
  );
}

export default Work;