import React, { useEffect, useContext, useRef, useCallback } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import circle from '../../../assets/about/circle-interactivedeveloper.png';
import { LoadingContext } from '../../../context';
import img1 from '../../../assets/projects/burger/menu-mobile.jpg';
import img2 from '../../../assets/projects/burger/builder-mobile.jpg';
import img3 from '../../../assets/projects/burger/home-mobile.jpg';
import img4 from '../../../assets/projects/places/mobile-posts.jpg';
import img5 from '../../../assets/projects/places/home-mobile.jpg';
import img6 from '../../../assets/projects/places/user-profile-mobile.jpg';
import img7 from '../../../assets/projects/vault/mobile-1.jpg';
import img8 from '../../../assets/projects/vault/mobile-2.jpg';
import img9 from '../../../assets/projects/vault/mobile-3.jpg';
import isMobile from '../../../functions/isMobile';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

function Circle() {

  const { loadingState } = useContext(LoadingContext)

  const canThrowPictureRef = useRef(true)
  const animationTriggeredRef = useRef(false);

  const throwPicture = useCallback((self = { direction: Math.random() * 2 - 1 }) => {
    if (!canThrowPictureRef.current) return;
    canThrowPictureRef.current = false;
    let timeout = 150;
    if (isMobile()) {
      timeout = 250;
    }
    setTimeout(() => {
      canThrowPictureRef.current = true;
    }, timeout)
    const image = document.createElement('img');
    image.className = 'about__circle__inner';
    image.src = images[(Math.random() * 8).toFixed(0)];
    image.draggable = false;
    const parent = document.querySelector('.about__circle')
    parent.appendChild(image);
    gsap.to(image, .1, { opacity: 1 })
    gsap.to(image, 1, {
      y: `${-150 * Math.random() * self.direction}%`, x: (Math.random() * 2 - 1) * 400, onComplete: () => {
        parent.removeChild(image);
      }
    })
    gsap.to(image, .4, { autoAlpha: 0, delay: .6, scale: 0 })
  }, [])


  useEffect(() => {
    if (!loadingState.isLoaded) return
    let timeout;
    gsap.registerPlugin(ScrollTrigger)

    let animation = () => {
      if (animationTriggeredRef.current) return;
      animationTriggeredRef.current = true;
      gsap.to('.about__circle__img', {
        rotate: 360, scrollTrigger: {
          id: 'trigger-circle-rotate',
          trigger: '.about__circle__img',
          scrub: 1,
          start: '100px bottom',
          end: 'bottom top',
          onUpdate: self => throwPicture(self)
        }
      })
    }
    timeout = setTimeout(() => {
      gsap.to('.about__circle img', .7, {
        y: 0, autoAlpha: 1, scrollTrigger: {
          id: 'trigger-circle-appear',
          trigger: '.about__circle',
          start: 'top center'
        },
        onStart: () => {
          if (ScrollTrigger.getById('trigger-circle-appear')) {
            ScrollTrigger.getById('trigger-circle-appear').kill()
          }
        },
        onComplete: animation
      })
    }, 700)
    return () => {
      if (ScrollTrigger.getById('trigger-circle-rotate')) {
        ScrollTrigger.getById('trigger-circle-rotate').kill()
      }
      if (ScrollTrigger.getById('trigger-circle-appear')) {
        ScrollTrigger.getById('trigger-circle-appear').kill()
      }
      animation = null;
      if (timeout) clearTimeout(timeout)
    }
  }, [loadingState.isLoaded, throwPicture])

  return (
    <div onClick={() => throwPicture()} onMouseMove={() => throwPicture()} onTouchMove={() => throwPicture()} className='about__circle'>
      <img draggable={false} className='about__circle__img' src={circle} alt='Creative Developer' />
    </div>
  )
}

export default Circle