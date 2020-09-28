import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import isMobile from '../functions/isMobile';
import scrollTo from '../functions/scrollTo';
import { toLight } from '../functions/handleBackground';
import { scrollbarAppear, scrollbarHide } from './scrollBar';
import scrollInstant from '../functions/scrollInstant';

gsap.registerPlugin(ScrollTrigger);

export const aboutEnter = (callafter, callback) => {
  const timeout = toLight(500);
  scrollInstant(0);
  setTimeout(() => {
    callafter();
    scrollbarAppear();
    let topText = '200px';
    if (isMobile()) {
      topText = '0px';
    }
    gsap.to('.about__line', 1, {
      x: 0, ease: 'power2.out', onComplete: () => {
        callback();
        gsap.to('.about__line--1, .about__line--3', {
          x: '30%', scrollTrigger: {
            trigger: '.about__heading',
            start: `-${topText} top`,
            end: 'bottom top',
            scrub: 1.5
          }
        })
        gsap.to('.about__line--2', {
          x: '-30%', scrollTrigger: {
            trigger: '.about__heading',
            start: `-${topText} top`,
            end: 'bottom top',
            scrub: 1.5
          }
        })
      }, delay: .2
    })
    document.querySelectorAll('.about span span').forEach(span => {
      if (span.classList.contains('highlight-text')) return;
      gsap.to(span, 1.5, {
        scrollTrigger: { trigger: span, start: `${topText} bottom` }, y: 0, ease: 'power2.out', delay: .2, opacity: 1
      })
    })
    gsap.to('.about .highlight-text', 1.5, { y: 0, autoAlpha: 1, scrollTrigger: '.about .highlight-text' })

  }, timeout)
}
export const aboutLeave = (callback) => {
  gsap.set('body', { overflow: 'hidden' });
  scrollTo(0, () => {
    setTimeout(() => {
      scrollbarHide();
      gsap.to('.about__line--1', 1, {
        x: '150%', ease: 'power2.out', onComplete: () => {
          callback();
          gsap.set('body', { overflow: 'auto' });
        }
      })
      gsap.to('.about *:not(.about__heading)', 1, { ease: 'power2.out', autoAlpha: 0 })
      gsap.to('.about__line--2', 1, { x: '-150%', ease: 'power2.out' })
      gsap.to('.about__line--3', 1, { x: '150%', ease: 'power2.out' })
    }, 1000)
  })
}
export function moveLines(e) {
  const transformX = (window.innerWidth / 2 - e.clientX);
  const transformY = (window.innerHeight / 2 - e.clientY);
  document.querySelector('.about__line--1 span').style.transform = `translate(${transformX * 0.07}px,${transformY * 0.03}px)`;
  document.querySelector('.about__line--2 span').style.transform = `translate(${transformX * 0.05}px,${transformY * 0.02}px)`;
  document.querySelector('.about__line--3 span').style.transform = `translate(${transformX * 0.02}px,${transformY * 0.01}px)`;
}