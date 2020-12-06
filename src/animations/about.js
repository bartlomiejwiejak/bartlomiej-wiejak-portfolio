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
  const timeout = toLight(1000);
  scrollInstant(0);
  const intervals = [];
  let removeInterval;
  setTimeout(() => {
    callafter();
    scrollbarAppear();

    const ease = 'power4.out';
    const duration = 1.5;
    const delay = 0.5;
    let topText = '150px';
    if (isMobile()) {
      topText = '0px';
    }

    gsap.to('.about__line', 1, {
      x: 0, ease: 'power2.out', onComplete: () => {
        if (!isMobile()) {
          callback();
        }
        gsap.to('.about__heading__indicator span span', duration, { ease, y: 0, autoAlpha: 1 })
        gsap.to('.about__heading__indicator__line-fill', .5, { y: '0%', ease: 'custom' })
        gsap.to('.about__heading__indicator__line-fill', .5, { y: '100%', ease: 'custom', delay: 1 })
        intervals.push(setInterval(() => {
          gsap.set('.about__heading__indicator__line-fill', { y: '-100%' })
          gsap.to('.about__heading__indicator__line-fill', .5, { y: '0%', ease: 'custom' })
          gsap.to('.about__heading__indicator__line-fill', .5, { y: '100%', ease: 'custom', delay: 1 })
        }, 2000))

        const removeInterval = () => {
          gsap.to('.about__heading__indicator', .5, { autoAlpha: 0 })
          clearInterval(intervals[0]);
          window.removeEventListener('scroll', removeInterval);
        }

        window.addEventListener('scroll', removeInterval);

        let transformY = '115%';
        if (isMobile()) {
          transformY = 0;
        }

        gsap.to('.about__line--1, .about__line--3', {
          x: '20%', opacity: 0, y: transformY, scrollTrigger: {
            trigger: '.about__heading',
            start: `-${topText} top`,
            end: 'bottom top',
            scrub: 1.5
          }
        })
        gsap.to('.about__line--2', {
          x: '-20%', opacity: 0, y: transformY, scrollTrigger: {
            trigger: '.about__heading',
            start: `-${topText} top`,
            end: 'bottom top',
            scrub: 1.5
          }
        })
        gsap.to('.about__description__heading__line span span', 1, {
          ease: 'custom', y: 0, autoAlpha: 1, scrollTrigger: {
            trigger: '.about__description__img',
            start: 'center bottom'
          },
          onComplete: () => {
            const tl = gsap.timeline({ defaults: { ease: 'custom' } })
              .set('.about__description__img-container', { autoAlpha: 1 })
            tl.to('.about__description__img-reveal', 1.2, { height: '0%' })
              .from('.about__description__img', 1.2, { scale: 1.6, delay: -1.4 })
          }
        })
      }, delay: .2
    })

    gsap.to('.about__description__paragraph span span', duration, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay: .3, ease, scrollTrigger: {
        trigger: '.about__description__paragraph',
        start: 'bottom bottom'
      }
    })
    gsap.to('.about__description__paragraph--mobile span span', duration, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay: .3, ease, scrollTrigger: {
        trigger: '.about__description__paragraph--mobile',
        start: 'bottom bottom'
      }
    })
    gsap.to('.about__skills__heading span span', duration, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay, ease, scrollTrigger: {
        trigger: '.about__skills__heading',
        start: 'bottom bottom'
      }
    })
    gsap.to('.about__skills__description span span', duration, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay, ease, scrollTrigger: {
        trigger: '.about__skills__description',
        start: 'bottom bottom'
      }
    })
    gsap.to('.about__contact__content span span', duration, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay, ease, scrollTrigger: {
        trigger: '.about__contact__content',
        start: 'bottom bottom'
      }
    })
    gsap.to('.about__footer span span', duration, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay, ease, scrollTrigger: {
        trigger: '.about__footer',
        start: 'bottom bottom'
      }
    })
    let startAnimation = 'bottom';
    if (isMobile()) {
      startAnimation = 'center';
    }
    gsap.to('.about__go-to-work span span, .about__go-to-work .highlight-text', duration, {
      y: 0, autoAlpha: 1, stagger: 0.05, delay, ease, scrollTrigger: {
        trigger: '.about__go-to-work',
        start: `${startAnimation} bottom`
      }
    })
  }, timeout)

  return () => {
    gsap.to('.about__heading__indicator', .5, { autoAlpha: 0 })
    clearInterval(intervals[1]);
    window.removeEventListener('scroll', removeInterval)
  };
}
export const aboutLeave = (callback1, callback2) => {
  gsap.set('body', { overflow: 'hidden' });
  callback2();
  scrollTo(0, () => {
    setTimeout(() => {
      scrollbarHide();
      gsap.to('.about__line--1', 1, {
        x: '150%', ease: 'power2.out', onComplete: () => {
          callback1();
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