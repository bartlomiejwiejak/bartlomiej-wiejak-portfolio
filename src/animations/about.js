import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

import isMobile from '../functions/isMobile';
import scrollTo from '../functions/scrollTo';
import { toLight } from '../functions/handleBackground';
import { scrollbarAppear, scrollbarHide } from './scrollBar';
import scrollInstant from '../functions/scrollInstant';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase)
CustomEase.create('custom', 'M0,0 C0,0 0.094,0.019 0.174,0.058 0.231,0.085 0.24,0.088 0.318,0.15 0.426,0.25 0.627,0.701 0.718,0.836 0.819,0.985 1,1 1,1 ')

export const aboutEnter = (callafter, callback) => {
  const timeout = toLight(700);
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
    gsap.to('.about__description__heading__line:nth-child(1) span span', 1, {
      ease: 'power2.out', y: 0, autoAlpha: 1, scrollTrigger: {
        trigger: '.about__description__img',
        start: 'center bottom'
      }, onStart: () => {
        const tl = gsap.timeline({ defaults: { ease: 'custom' } })
        tl.to('.about__description__heading__line:nth-child(2) span span', 1, { y: 0, autoAlpha: 1, delay: .05 })
          .set('.about__description__img-container', { autoAlpha: 1 })
          .to('.about__description__img-reveal', 1.2, { height: '0%', })
          .from('.about__description__img', 1.2, { scale: 1.6, delay: -1.4 })
      }
    })
    gsap.to('.about__description__paragraph span span', 1, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay: .2, scrollTrigger: {
        trigger: '.about__description__paragraph',
        start: 'bottom bottom'
      }
    })
    gsap.to('.about__description__paragraph--mobile span span', 1, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay: .2, scrollTrigger: {
        trigger: '.about__description__paragraph--mobile',
        start: 'bottom bottom'
      }
    })
    gsap.to('.about__skills__heading span span', 1, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay: .2, scrollTrigger: {
        trigger: '.about__skills__heading',
        start: 'bottom bottom'
      }
    })
    gsap.to('.about__skills__description span span', 1, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay: .2, scrollTrigger: {
        trigger: '.about__skills__description',
        start: 'bottom bottom'
      }
    })
    gsap.to('.about__contact__content span span', 1, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay: .2, scrollTrigger: {
        trigger: '.about__contact__content',
        start: 'bottom bottom'
      }
    })
    gsap.to('.about__footer span span', 1, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay: .2, scrollTrigger: {
        trigger: '.about__footer',
        start: 'bottom bottom'
      }
    })
    gsap.to('.about__go-to-work span span, .about__go-to-work .highlight-text', 1, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay: .2, scrollTrigger: {
        trigger: '.about__go-to-work',
        start: 'bottom bottom'
      }
    })
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