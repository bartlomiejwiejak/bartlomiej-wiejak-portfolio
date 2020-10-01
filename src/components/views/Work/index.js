import React, { useEffect, useContext, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { useLockBodyScroll } from 'react-use';
import gsap from 'gsap';

import { showInterface } from '../../../animations/interface';
import { LoadingContext, RoutingContext } from '../../../context';
import Project from './Project';
import { hideInterface } from '../../../animations/interface';
import { cursorMultiDot } from '../../../animations/cursor';
import scrollInstant from '../../../functions/scrollInstant';
import WorkPagination from './WorkPagination';
import Circle from './Circle';
import CustomEase from 'gsap/CustomEase';
import { cursorBackToNormal, cursorHide } from '../../../animations/cursor';
import { toLight } from '../../../functions/handleBackground';

gsap.registerPlugin(CustomEase)
CustomEase.create('custom', 'M0,0 C0,0 0.094,0.019 0.174,0.058 0.231,0.085 0.24,0.088 0.318,0.15 0.426,0.25 0.627,0.701 0.718,0.836 0.819,0.985 1,1 1,1 ')

const Work = () => {
  const { loaded } = useContext(LoadingContext);
  const { animating, path, setAnimating, lastProject, setLastProject, currentScrollIndex, setCurrentScrollIndex } = useContext(RoutingContext)
  const history = useHistory();

  const canScrollRef = useRef(true)
  const currentProjectIndexRef = useRef(0);
  const initialYRef = useRef(0);
  const initialMouseClientYRef = useRef(0);
  const projectsRef = useRef(null);
  const isMountedRef = useRef(false)

  if (lastProject !== null && !animating && !isMountedRef.current) {
    currentProjectIndexRef.current = lastProject;
  }

  useEffect(() => {
    projectsRef.current = document.querySelectorAll('.project')
  }, [])

  useEffect(() => {
    if (currentScrollIndex === null) {
      setCurrentScrollIndex(0);
    }
  }, [currentScrollIndex, setCurrentScrollIndex])

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
    let circleRotation;
    switch (currentProjectIndexRef.current + direction) {
      case 0:
        circleRotation = '90deg';
        break;
      case 1:
        circleRotation = '185deg';
        break;
      case 2:
        circleRotation = '269deg'
        break;
      case 3:
        circleRotation = '357deg'
        break;
      default:
        circleRotation = '90deg';
    }
    if (navigator.userAgent.indexOf("Firefox") > -1) {
      if (direction > 0) {
        gsap.to('.circle', 1, { rotate: circleRotation, delay: .3, ease: 'custom' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.2, { y: 0 }, { y: '-100%', ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current + 1].querySelectorAll('.project__title div'), 1.2, { y: '100%' }, { y: 0, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
      }
      if (direction < 0) {
        gsap.to('.circle', 1, { rotate: circleRotation, delay: .3, ease: 'custom' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.2, { y: 0 }, { y: '100%', ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current - 1].querySelectorAll('.project__title div'), 1.2, { y: '-100%' }, { y: 0, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
      }
    } else {
      if (direction > 0) {
        gsap.to('.circle', 1, { rotate: circleRotation, delay: .3, ease: 'custom' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.2, { transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,-100%,0)', ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current + 1].querySelectorAll('.project__title div'), 1.2, { transform: 'translate3d(0,100%,0)' }, { transform: 'translate3d(0,0,0)', delay: .9, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
      }
      if (direction < 0) {
        gsap.to('.circle', 1, { rotate: circleRotation, delay: .3, ease: 'custom' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.2, { transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,100%,0)', ease: 'power2.out' })
        gsap.fromTo(projectsRef.current[currentProjectIndexRef.current - 1].querySelectorAll('.project__title div'), 1.2, { transform: 'translate3d(0,-100%,0)' }, { transform: 'translate3d(0,0,0)', delay: .9, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
      }
    }
    setTimeout(() => {
      currentProjectIndexRef.current += direction;
      setCurrentScrollIndex(currentProjectIndexRef.current)
      gsap.to('.work__pagination__active', 1, { y: `${-34 * (currentProjectIndexRef.current)}px` })
      const scrollValue = -currentProjectIndexRef.current * (100 / projectsRef.current.length);
      gsap.to('.work__scroller', .9, { transform: `translate3d(0,${scrollValue}%,0)`, ease: 'custom' })
    }, 300)
  }, [setCurrentScrollIndex])

  const slider = useCallback((event) => {
    if (!canScrollRef.current) return;
    const direction = event.deltaY < 0 ? -1 : 1;

    slideHandle(direction)
  }, [slideHandle])

  const swipeListen = useCallback((event) => {
    if (!canScrollRef.current) return;
    const currentY = event.touches[0].clientY;
    if (Math.abs(currentY - initialYRef.current) < 50) return;
    const direction = initialYRef.current - currentY > 0 ? 1 : -1;
    document.removeEventListener('touchmove', swipeListen)
    slideHandle(direction)
  }, [slideHandle])

  const swiper = useCallback((event) => {
    if (!canScrollRef.current) return;
    initialYRef.current = event.touches[0].clientY;
    document.addEventListener('touchmove', swipeListen)
  }, [swipeListen])

  const swipeMouseListen = useCallback((event) => {
    if (!canScrollRef.current) return;
    const currentY = event.clientY;
    if (Math.abs(currentY - initialMouseClientYRef.current) < 100) return;
    const direction = initialMouseClientYRef.current - currentY > 0 ? 1 : -1;
    document.removeEventListener('mousemove', swipeMouseListen)
    slideHandle(direction)
  }, [slideHandle])

  const swiperMouse = useCallback((event) => {
    if (!canScrollRef.current) return;
    initialMouseClientYRef.current = event.clientY;
    document.addEventListener('mousemove', swipeMouseListen)
  }, [swipeMouseListen])

  const removeListeners = useCallback(() => {
    document.removeEventListener('wheel', slider)
    document.removeEventListener('touchstart', swiper)
    document.removeEventListener('touchmove', swipeListen)
    document.removeEventListener('mousedown', cursorMultiDot)
    document.removeEventListener('mousedown', swiperMouse)
    document.removeEventListener('mousemove', swipeMouseListen)
  }, [slider, swiper, swipeListen, swiperMouse, swipeMouseListen])

  const addListeners = useCallback(() => {
    document.addEventListener('wheel', slider)
    document.addEventListener('touchstart', swiper)
    document.addEventListener('mousedown', cursorMultiDot)
    document.addEventListener('mousedown', swiperMouse)
    document.addEventListener('mouseup', () => document.removeEventListener('mousemove', swipeMouseListen))
    document.addEventListener('touchend', () => document.removeEventListener('touchmove', swipeListen))
  }, [slider, swiper, swipeListen, swiperMouse, swipeMouseListen])

  useEffect(() => {
    if (animating && (path === '/' || path === '/about')) {
      removeListeners();
      gsap.set('.project__title div', { y: 0 })
      gsap.to('.work__pagination__active', currentProjectIndexRef.current * .4, { y: 0, ease: 'custom' })
      gsap.to('.project .button', 1, { y: '100%', ease: 'power2.out' })
      hideInterface();
      cursorHide()
      gsap.to('.circle', currentProjectIndexRef.current * .4, { rotate: '90deg', ease: 'custom' })
      setCurrentScrollIndex(0);
      gsap.to('.work__scroller', currentProjectIndexRef.current * .4, {
        y: '0%', ease: 'custom', onComplete: () => {
          setTimeout(() => {
            gsap.to('.circle', .5, { y: '100%', x: '100%', ease: 'power2.out' })
            gsap.to('.work__pagination > div', .5, { y: '100%', ease: 'power2.out' })
            setTimeout(() => {
              gsap.to('.project__title--down', 1, { x: '300%', ease: 'power2.out' })
              gsap.to('.project__title--up', 1, {
                x: '-300%', ease: 'power2.out', onComplete: () => {
                  setAnimating(false)
                  history.push(path)
                }
              })
            }, 1000)
          }, 200)
        }
      })
    }
  }, [animating, path, slider, history, setAnimating, removeListeners, setCurrentScrollIndex])

  useLockBodyScroll(true)

  useEffect(() => {
    let timeout;
    let timeoutListeners;

    if (loaded && lastProject === null && !isMountedRef.current) {
      scrollInstant(0);
      const time = toLight(1000) + 3000;

      timeout = setTimeout(() => {
        showInterface();
        cursorBackToNormal()
        gsap.to('.circle', 1, { y: '50%', x: '50%' })
        gsap.to('.project__title div, .work__pagination > div', 1, { y: 0 })
        gsap.to('.project .button', 1, {
          y: 0
        })
        timeoutListeners = setTimeout(addListeners, 1000)
      }, time)

    }
    return () => {
      clearTimeout(timeout)
      clearTimeout(timeoutListeners)
    }
  }, [loaded, slider, swiper, swipeListen, removeListeners, lastProject, addListeners])
  useEffect(() => {
    if (lastProject !== null) {
      cursorBackToNormal()
      showInterface();
      let circleRotation;
      switch (lastProject) {
        case 0:
          circleRotation = '90deg';
          break;
        case 1:
          circleRotation = '185deg';
          break;
        case 2:
          circleRotation = '269deg'
          break;
        case 3:
          circleRotation = '357deg'
          break;
        default:
          circleRotation = '90deg';
      }
      gsap.to('.circle', 1, { y: '50%', x: '50%', rotate: circleRotation })
      gsap.to('.work__pagination > div', 1, { y: 0 })
      gsap.set('.work__pagination__active', { y: -lastProject * 34 })
      gsap.to('.project .button', 1, {
        y: 0, onComplete: () => {
          setLastProject(null)
          isMountedRef.current = true;
        }
      })
    }
    const timeout = setTimeout(addListeners, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [lastProject, slider, swipeListen, swiper, addListeners, setLastProject])

  const styleRef = useRef({})
  if (lastProject !== null) {
    styleRef.current = { transform: `translate3d(0,-${lastProject * 25}%,0)` }
  }
  return (
    <div style={{ overflow: 'hidden' }} className='work'>
      <div className='work__scroller' style={styleRef.current}>
        {ReactDOM.createPortal(<WorkPagination />, document.getElementById('root'))}
        {ReactDOM.createPortal(<Circle />, document.getElementById('root'))}
        <Project projectIndex={0} titleUp='Cloth' titleDown='Vault' url='/work/vault-clothing' removeListeners={removeListeners} />
        <Project projectIndex={1} titleUp='Place' titleDown='Your' url='/work/places-app' removeListeners={removeListeners} />
        <Project projectIndex={2} titleUp='Project' titleDown='Burger' url='/work/burger-project' removeListeners={removeListeners} />
        <Project projectIndex={3} titleUp='Soon' titleDown='Coming' url='/work' inactive={true} />
      </div>
    </div>
  );
}

export default Work;