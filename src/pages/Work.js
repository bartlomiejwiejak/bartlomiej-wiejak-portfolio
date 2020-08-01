import React, { useEffect, useContext, useRef } from 'react';
import gsap from 'gsap';
import showInterface from '../animations/showInterface';
import { LoadingContext } from '../context/context';
import Project from '../components/Project';
import burger from '../assets/burgerek.png';
import { useLockBodyScroll } from 'react-use';
import scrollTo from '../functions/scrollTo';

const Work = ({ setBodyHeight }) => {
  const { loaded } = useContext(LoadingContext);
  const canScrollRef = useRef(true)
  const currentProjectIndexRef = useRef(0);

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
      showInterface();

    }
  }, [loaded])

  useEffect(() => {
    document.addEventListener('mousewheel', function (event) {
      if (!canScrollRef.current) return;

      const projects = document.querySelectorAll('.project');

      const direction = event.wheelDelta < 0 ? 1 : -1;

      if (direction === 1) {
        const isLastProject = currentProjectIndexRef.current === projects.length - 1;
        if (isLastProject) return;
      }
      if (direction === -1) {
        const firstProject = currentProjectIndexRef.current === 0;
        if (firstProject) return;
      }
      canScrollRef.current = false;

      currentProjectIndexRef.current += direction;
      gsap.to('.work__pagination__active', 1, { y: `${-42 * (currentProjectIndexRef.current)}px` })
      scrollTo(projects[currentProjectIndexRef.current].offsetTop, () => canScrollRef.current = true)
    })
  }, [])

  return (
    <div className='work'>
      <Project src={burger} titleUp='Project' titleDown='Burger' />
      <Project src={burger} titleUp='Project' titleDown='Super2' />
      <Project src={burger} titleUp='Project' titleDown='Super3' />
    </div>
  );
}

export default Work;
