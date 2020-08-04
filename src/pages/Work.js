import React, { useEffect, useContext, useRef, useCallback } from 'react';
import gsap from 'gsap';
import showInterface from '../animations/showInterface';
import { LoadingContext, RoutingContext } from '../context/context';
import Project from '../components/Project';
import burger from '../assets/burgerek.png';
import { useLockBodyScroll } from 'react-use';
import scrollTo from '../functions/scrollTo';
import hideInterface from '../animations/hideInterface';
import { useHistory } from 'react-router-dom';

const Work = ({ setBodyHeight }) => {
  const { loaded } = useContext(LoadingContext);
  const { animating, path, setAnimating } = useContext(RoutingContext)
  const canScrollRef = useRef(true)
  const currentProjectIndexRef = useRef(0);
  const initialYRef = useRef(0);
  const history = useHistory();

  const slider = useCallback((event) => {
    if (!canScrollRef.current) return;

    const projects = document.querySelectorAll('.project');

    const direction = event.deltaY < 0 ? -1 : 1;

    if (direction === 1) {
      const isLastProject = currentProjectIndexRef.current === projects.length - 1;
      if (isLastProject) return;
    }
    if (direction === -1) {
      const firstProject = currentProjectIndexRef.current === 0;
      if (firstProject) return;
    }
    canScrollRef.current = false;
    if (direction > 0) {
      gsap.to('.circle', 1, { rotate: '+=90deg', delay: .5, ease: 'power2.out' })
      gsap.fromTo(projects[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,-100%,0)', ease: 'power2.out' })
      gsap.fromTo(projects[currentProjectIndexRef.current + 1].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,100%,0)' }, { transform: 'translate3d(0,0,0)', delay: .5, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
    }
    if (direction < 0) {
      gsap.to('.circle', 1, { rotate: '-=90deg', delay: .5, ease: 'power2.out' })
      gsap.fromTo(projects[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,100%,0)', ease: 'power2.out' })
      gsap.fromTo(projects[currentProjectIndexRef.current - 1].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,-100%,0)' }, { transform: 'translate3d(0,0,0)', delay: .5, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
    }
    setTimeout(() => {
      currentProjectIndexRef.current += direction;
      gsap.to('.work__pagination__active', 1, { y: `${-42 * (currentProjectIndexRef.current)}px` })
      window.scrollTo({
        top: projects[currentProjectIndexRef.current].offsetTop,
        behavior: 'smooth'
      })
    }, 300)
  }, [])

  const swipeListen = useCallback((event) => {
    if (!canScrollRef.current) return;
    const projects = document.querySelectorAll('.project');
    const currentY = event.touches[0].clientY;
    if (Math.abs(currentY - initialYRef.current) < 50) return;
    const direction = initialYRef.current - currentY > 0 ? 1 : -1;
    console.log(initialYRef.current, currentY)
    if (direction === 1) {
      const isLastProject = currentProjectIndexRef.current === projects.length - 1;
      if (isLastProject) return;
    }
    if (direction === -1) {
      const firstProject = currentProjectIndexRef.current === 0;
      if (firstProject) return;
    }
    canScrollRef.current = false;
    if (direction > 0) {
      gsap.to('.circle', 1, { rotate: '+=90deg', delay: .5, ease: 'power2.out' })
      gsap.fromTo(projects[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,-100%,0)', ease: 'power2.out' })
      gsap.fromTo(projects[currentProjectIndexRef.current + 1].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,100%,0)' }, { transform: 'translate3d(0,0,0)', delay: .5, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
    }
    if (direction < 0) {
      gsap.to('.circle', 1, { rotate: '-=90deg', delay: .5, ease: 'power2.out' })
      gsap.fromTo(projects[currentProjectIndexRef.current].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,100%,0)', ease: 'power2.out' })
      gsap.fromTo(projects[currentProjectIndexRef.current - 1].querySelectorAll('.project__title div'), 1.5, { transform: 'translate3d(0,-100%,0)' }, { transform: 'translate3d(0,0,0)', delay: .5, onComplete: () => canScrollRef.current = true, ease: 'power2.out' })
    }
    setTimeout(() => {
      currentProjectIndexRef.current += direction;
      gsap.to('.work__pagination__active', 1, { y: `${-42 * (currentProjectIndexRef.current)}px` })
      window.scrollTo({
        top: projects[currentProjectIndexRef.current].offsetTop,
        behavior: 'smooth'
      })
    }, 300)
  }, [])

  const swiper = useCallback((event) => {
    if (!canScrollRef.current) return;
    initialYRef.current = event.touches[0].clientY;
  }, [])

  useEffect(() => {
    if (animating) {
      document.removeEventListener('wheel', slider)
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
              y: '-200%', onComplete: () => {
                setAnimating(false)
                history.push(path)
              }
            })
          }, 700)
        }, 300)
      })
    }
  }, [animating, path, slider, history, setAnimating])

  useLockBodyScroll(true)
  useEffect(() => {
    setBodyHeight()
  }, [setBodyHeight])
  useEffect(() => {
    if (loaded) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      document.querySelector('.background').style.setProperty('background-color', 'var(--light)');
      setTimeout(() => {
        document.querySelector('.project__img-reveal').style.setProperty('background-color', 'var(--light)');
        gsap.set('.project__img', { opacity: 1 })
        gsap.to('.project__img-reveal', 1.4, { width: 0 })
        gsap.from('.project__img', 1.4, { scale: 1.6 })
      }, 500)
      setTimeout(() => {
        showInterface();
        gsap.to('.circle', 1, { y: '50%', x: '50%' })
        gsap.to('.project__title div', 1, { y: 0 })
        gsap.to('.work__pagination > div', 1, { y: 0 })
        gsap.to('.project .button', 1, {
          y: 0, onComplete: () => {
            document.addEventListener('wheel', slider)
            document.addEventListener('touchstart', swiper)
            document.addEventListener('touchmove', swipeListen)
          }
        })
      }, 2000)
    }
    return () => {
      document.removeEventListener('wheel', slider)
      document.removeEventListener('touchstart', swiper)
      document.removeEventListener('touchmove', swipeListen)
    }
  }, [loaded, slider, swiper, swipeListen])



  return (
    <div className='work'>
      <Project src={burger} titleUp='Project' titleDown='Burger' />
      <Project src={burger} titleUp='Project' titleDown='Super2' />
      <Project src={burger} titleUp='Project' titleDown='Super3' />
      <Project src={burger} titleUp='Project' titleDown='Super4' />
    </div>
  );
}

export default Work;
