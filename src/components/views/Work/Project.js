import React, { useEffect, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import gsap from 'gsap';

import Button from '../../shared/Button';
import Link from '../../shared/Link';
import { RoutingContext } from '../../../context';
import { hideInterface } from '../../../animations/interface';
import scrollInstant from '../../../functions/scrollInstant';
import { cursorHide } from '../../../animations/cursor';

const Project = ({ src, titleUp, titleDown, removeListeners, url, inactive, projectIndex }) => {

  const { path, setAnimating, animating, lastProject } = useContext(RoutingContext);
  const history = useHistory()

  const projectRef = useRef(null);

  const ref = useRef(null);

  const stylesRef = useRef({});

  if (lastProject === projectIndex) {
    stylesRef.current = {
      projectImg: { opacity: 1 },
      imgReveal: { width: 0 },
      title: { transform: 'translate3d(0,0,0)' }
    }
  }

  useEffect(() => {
    if (animating && path === url) {
      removeListeners();
      const project = projectRef.current;
      const btn = project.querySelector('.button');

      hideInterface();
      cursorHide();
      gsap.to([btn, '.work__pagination div'], 1, { y: '100%', ease: 'power2.out', autoAlpha: 0 });
      gsap.to('.circle', 1, {
        y: '100%', x: '100%', ease: 'power2.out', onComplete: () => {
          scrollInstant(0)
          setAnimating(false)
          history.push(path)
        }
      })
    }
  }, [animating, removeListeners, path, url, setAnimating, history, inactive])

  return (
    <div ref={projectRef} className='project'>
      <div className="project__container">
        <div className="project__img-container">
          <img style={stylesRef.current.projectImg} draggable={false} src={src} alt="project" className="project__img" />
          <div style={stylesRef.current.imgReveal} className="project__img-reveal"></div>
        </div>
        <div ref={ref} onClick={removeListeners} className="project__button-container"><Button type={inactive ? 'inactive' : 'black'} arrow><Link to={url}>{inactive ? 'In developing' : 'Explore project'}</Link></Button></div>
      </div>
      <h2 className="project__title project__title--down"><div style={stylesRef.current.title}>{titleDown}</div></h2>
      <h2 className="project__title project__title--up"><div style={stylesRef.current.title}>{titleUp}</div></h2>
    </div>
  );
}

export default Project;
