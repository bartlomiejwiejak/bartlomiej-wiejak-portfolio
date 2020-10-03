import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import isMobile from '../functions/isMobile';

gsap.registerPlugin(ScrollTrigger)

export default function () {
  const ease = 'power4.out';
  const time = 1.5;
  gsap.to('.project-content__info span span', time, {
    y: '0%', autoAlpha: 1, ease, delay: .25, stagger: 0.05, scrollTrigger: {
      trigger: '.project-content__info',
      start: 'bottom bottom'
    }
  })
  gsap.to('.project-content__line', {
    x: '-100%', scrollTrigger: {
      trigger: '.project-content__line',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 5
    }
  })
  gsap.to('.project-content__next-project span span, .project-content__next-project .highlight-text', time, {
    ease, y: '0%', autoAlpha: 1, delay: .5, scrollTrigger: {
      trigger: '.project-content__next-project',
      start: 'bottom bottom'
    }
  })
  if (!isMobile) {
    document.querySelectorAll('.project-content__image').forEach(item => {
      gsap.from(item, {
        scale: 1.1, scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    })
  }
}