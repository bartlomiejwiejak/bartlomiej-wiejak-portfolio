import React, { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

import isMobile from '../../../../functions/isMobile';
import { cursorBackToNormal, cursorHide } from '../../../../animations/cursor';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
CustomEase.create('custom', 'M0,0,C0.214,0.041,0.097,0.01,0.24,0.054,0.24,0.054,0.24,0.054,0.24,0.054,0.354,0.074,0.429,0.213,0.526,0.368,0.50.482,0.649,0.858,0.79,1,0.922,1,0.974,1,1,1');

const Skill = ({ src, children, infoColor }) => {
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const imgRef = useRef(null);
  const infoRef = useRef(null);
  const iRef = useRef(null);

  const moveInfo = useCallback((e) => {
    const element = infoRef.current.querySelector('.about__skills__technologies__technology__info');
    const x = e.clientX - element.offsetWidth;
    const y = e.clientY - element.offsetHeight - 25;
    gsap.to(element, .5, { x: x, y: y });
  }, [])

  const handleMouseEnter = () => {
    if (isMobile() || !children) return;
    cursorHide();
    gsap.set(infoRef.current.querySelectorAll('.content > *'), { autoAlpha: 1 })
    gsap.set(infoRef.current.querySelectorAll('h1,.line-content'), { transform: 'translate3d(0,50%,0)', opacity: 0 });
    gsap.set(infoRef.current.querySelectorAll('.line'), { x: '-100%' });
    gsap.to([itemRef.current, infoRef.current.querySelector('.content')], .5, { filter: 'grayscale(0)' })
    const tl = gsap.timeline({ defaults: { ease: 'custom' } });
    tl.fromTo(infoRef.current.querySelector('.content'), .5, { transform: 'translate3d(0,100%,0)' }, { transform: 'translate3d(0,0,0)' })
      .to(infoRef.current.querySelector('h1'), .3, { transform: 'translate3d(0,0,0)', opacity: 1 })

    gsap.to(infoRef.current.querySelectorAll('.line'), .3, { x: 0, stagger: .15, delay: .7 })
    gsap.to(infoRef.current.querySelectorAll('.line-content'), .3, { y: 0, opacity: 1, stagger: .15, delay: .9 })
    document.addEventListener('mousemove', moveInfo)
  }
  const handleMouseLeave = () => {
    if (isMobile() || !children) return;
    cursorBackToNormal();
    const tl = gsap.timeline({ defaults: { ease: 'custom' } });
    gsap.to([itemRef.current, infoRef.current.querySelector('.content')], .5, { filter: 'grayscale(1)' })
    tl.to(infoRef.current.querySelectorAll('.content > *'), .3, { autoAlpha: 0, delay: .1 })
      .fromTo(infoRef.current.querySelector('.content'), .4, { transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,-100%,0)' })
    document.removeEventListener('mousemove', moveInfo);
  }
  useEffect(() => {
    let top = '200px'
    if (isMobile()) {
      top = '100px';
    }
    setTimeout(() => {
      gsap.to(itemRef.current, .7, {
        ease: 'custom', y: 0, scrollTrigger: {
          trigger: containerRef.current,
          start: `${top} bottom`
        },
        onComplete: () => {
          gsap.to(imgRef.current, .3, { ease: 'custom', y: 0, autoAlpha: 1 })
          if (iRef.current) {
            gsap.to(iRef.current, .3, { ease: 'custom', autoAlpha: 1 })
          }
        }
      })
    }, 3000)
  }, [])

  useEffect(() => {
    if (infoColor) {
      gsap.set(infoRef.current.querySelector('.content'), { backgroundColor: infoColor })
    }
  }, [infoColor])
  return (
    <>
      {children ? ReactDOM.createPortal(<div className='skill-info' ref={infoRef}>{children}</div>, document.getElementById('root')) : null}
      <div ref={containerRef} className="about__skills__technologies__technology">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={itemRef}>
          {(children && !isMobile()) && <i style={{ color: infoColor }} ref={iRef} className="far fa-lightbulb"></i>}
          <img ref={imgRef} draggable={false} src={src} alt='' />
        </div>
      </div>
    </>
  )
}

export default Skill;