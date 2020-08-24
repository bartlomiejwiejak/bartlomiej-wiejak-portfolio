import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

export default function () {
  document.querySelectorAll('.project-content span span').forEach(span => {
    if (span.classList.contains('highlight-text')) {
      return;
    }
    gsap.to(span, 1.5, {
      y: 0, autoAlpha: 1, delay: .2, scrollTrigger: {
        trigger: span,
        start: '100px bottom'
      }
    })
  })
  gsap.to('.project-content__next-project .highlight-text', 1, {
    y: 0, autoAlpha: 1, scrollTrigger: {
      trigger: '.project-content__next-project > span',
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