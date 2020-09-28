import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

import isMobile from '../../../../functions/isMobile';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
CustomEase.create('custom', 'M0,0,C0.214,0.041,0.097,0.01,0.24,0.054,0.24,0.054,0.24,0.054,0.24,0.054,0.354,0.074,0.429,0.213,0.526,0.368,0.50.482,0.649,0.858,0.79,1,0.922,1,0.974,1,1,1');

const Skill = ({ src }) => {
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const imgRef = useRef(null);

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
        }
      })
    }, 3000)
  }, [])

  return (
    <div ref={containerRef} className="about__skills__technologies__technology">
      <div ref={itemRef}>
        <img ref={imgRef} draggable={false} src={src} alt='' />
      </div>
    </div>
  )
}

export default Skill;