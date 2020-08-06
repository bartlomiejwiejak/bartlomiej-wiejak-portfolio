import React, { useEffect, useContext, useRef } from 'react';
import Button from './Button';
import Link from '../components/Link';
import { RoutingContext } from '../context/context';
import gsap from 'gsap';
import hideInterface from '../animations/hideInterface';
import { useHistory } from 'react-router-dom';
import { skewConfig } from '../App';

const Project = ({ src, titleUp, titleDown, removeListeners, url, inactive }) => {

  const { path, setAnimating, animating } = useContext(RoutingContext);
  const history = useHistory()

  const projectRef = useRef(null);

  const ref = useRef(null);

  useEffect(() => {
    if (inactive) {
      const btn = ref.current;
      const button = btn.querySelector('.button')
      gsap.set(button, { color: '#999' })
    }
    if (animating && path === url) {
      const project = projectRef.current;
      const btn = project.querySelector('.button');

      hideInterface();
      gsap.to([btn, '.work__pagination div'], 1, { y: '100%', ease: 'power2.out', autoAlpha: 0 });
      gsap.to('.circle', 1, {
        y: '100%', x: '100%', ease: 'power2.out', onComplete: () => {
          gsap.set('.scroll', { y: 0 })
          window.scrollTo(0, 0)
          gsap.set('.scroll', { y: 0 })           //prevents screen flashing
          skewConfig.previous = 0;
          gsap.set('.scroll', { y: 0 })
          setAnimating(false)
          history.push(path)
        }
      })
    }
  }, [animating, removeListeners, path, url, setAnimating, history])

  return (
    <div ref={projectRef} className='project'>
      <div className="project__container">
        <div className="project__img-container">
          <img draggable={false} src={src} alt="project" className="project__img" />
          <div className="project__img-reveal"></div>
        </div>
        <div ref={ref} onClick={removeListeners} className="project__button-container"><Button type='black'><Link to={url}>Explore project</Link></Button></div>
      </div>
      <h2 className="project__title project__title--down"><div>{titleDown}</div></h2>
      <h2 className="project__title project__title--up"><div>{titleUp}</div></h2>
    </div>
  );
}

export default Project;
