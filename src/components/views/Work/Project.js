import React, { useEffect, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import gsap from 'gsap';

import Button from '../../shared/Button';
import Link from '../../shared/Link';
import { RoutingContext } from '../../../context';
import { hideInterface } from '../../../animations/interface';
import { cursorHide } from '../../../animations/cursor';
import isMobile from '../../../functions/isMobile';

const Project = ({ titleUp, titleDown, removeListeners, url, inactive, projectIndex }) => {

  const { routingState, dispatch } = useContext(RoutingContext);
  const history = useHistory()

  const projectRef = useRef(null);

  const ref = useRef(null);

  const stylesRef = useRef({});

  if (routingState.lastProject === projectIndex) {
    stylesRef.current = {
      title: { transform: 'translate3d(0,0,0)' },
      stroke: { WebkitTextFillColor: 'black' }
    }
    if (isMobile()) {
      stylesRef.current.stroke = { WebkitTextFillColor: 'transparent' }
    }
  }
  useEffect(() => {
    if (isMobile()) return;
    gsap.to(projectRef.current.querySelectorAll('.project__title'), .75, { WebkitTextFillColor: 'transparent' });
  }, [])
  useEffect(() => {
    if (routingState.animating && routingState.path === url) {
      removeListeners();
      const project = projectRef.current;
      const btn = project.querySelector('.button');

      hideInterface();
      cursorHide();
      gsap.to([btn, '.work__pagination div'], 1, { y: '100%', ease: 'power2.out', autoAlpha: 0 });
      gsap.to('.circle', 1, {
        y: '100%', x: '100%', ease: 'power2.out', onComplete: () => {
          dispatch({ type: 'SET_ANIMATING', payload: false })
          history.push(routingState.path)
        }
      })
    }
  }, [routingState.animating, removeListeners, routingState.path, url, history, inactive, dispatch])

  const handleHover = () => {
    if (inactive || isMobile()) return;
    dispatch({ type: 'SET_WAVE', payload: projectIndex })
  }
  const handleMouseOut = () => {
    if (routingState.animating || inactive || isMobile()) return;
    dispatch({ type: 'SET_WAVE', payload: null })
  }
  const handleClick = () => {
    if (inactive || isMobile()) return;
    removeListeners();
    dispatch({ type: 'SET_WAVE', payload: false })
    gsap.to(projectRef.current.querySelectorAll('.project__title'), .75, { WebkitTextFillColor: 'black' });
  }

  return (
    <div ref={projectRef} className='project'>
      <div onMouseEnter={handleHover} onMouseOut={handleMouseOut} ref={ref} onClick={handleClick} className="project__button-container"><Button type={inactive ? 'inactive' : 'black'} arrow><Link to={url}>{inactive ? 'In developing' : 'Explore project'}</Link></Button></div>
      <h2 style={stylesRef.current.stroke} className="project__title project__title--down"><div style={stylesRef.current.title}>{titleDown}</div></h2>
      <h2 style={stylesRef.current.stroke} className="project__title project__title--up"><div style={stylesRef.current.title}>{titleUp}</div></h2>
    </div>
  );
}

export default Project;