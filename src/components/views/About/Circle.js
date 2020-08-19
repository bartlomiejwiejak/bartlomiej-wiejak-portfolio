import React, { useEffect, useContext } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import circle from '../../../assets/about/circle.png';
import { LoadingContext } from '../../../context';

function Circle() {

  const { loaded } = useContext(LoadingContext)

  useEffect(() => {
    if (!loaded) return
    gsap.registerPlugin(ScrollTrigger)
    setTimeout(() => {
      gsap.to('.about__circle img', .7, {
        y: 0, autoAlpha: 1, scrollTrigger: {
          trigger: '.about__circle',
          start: 'top center'
        },
        onComplete: () => {
          gsap.to('.about__circle', {
            rotate: 360, scrollTrigger: {
              trigger: '.about__circle',
              scrub: 2,
              start: 'top bottom',
              end: 'bottom top'
            }
          })
        }
      })
    }, 500)
  }, [loaded])

  return (
    <div className="about__circle">
      <img draggable={false} className="about__circle__img" src={circle} alt='Creative Developer' />
    </div>
  )
}

export default Circle
